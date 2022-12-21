import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useLoaderData } from "react-router-dom";
import { createRecipe, updateRecipe } from "api";
import styles from "./RecipeForm.module.scss";

function RecipeForm() {
  const navigate = useNavigate();
  const currentRecipe = useLoaderData();

  const recipeSchema = yup.object({
    title: yup
      .string()
      .nullable()
      .required("Le champ est obligatoire.")
      .min(4, "Le titre doit faire au moins 4 caractères."),
    image: yup
      .string()
      .nullable()
      .required("Le champ est obligatoire.")
      .url("Le champ doit être une URL valide."),
  });

  const defaultValues = {
    title: currentRecipe ? currentRecipe.title : null,
    image: currentRecipe ? currentRecipe.image : null,
  };

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    mode: "onSubmit",
    resolver: yupResolver(recipeSchema),
  });

  const formSubmit = async (data, event) => {
    try {
      clearErrors(); // Must clear errors because they won't be deleted automatically if they are not linked to a specific field (ex: global errors)

      if (currentRecipe) {
        await updateRecipe({ _id: currentRecipe._id, ...data });
        navigate("/admin/recettes/liste");
      } else {
        await createRecipe(data);
        reset(defaultValues);
      }
    } catch (err) {
      setError("globalErr", {
        type: "globalErr",
        message: err.message,
      });
    }
  };

  return (
    <form
      className={`${styles.recipeForm} p-5`}
      onSubmit={handleSubmit(formSubmit)}
    >
      {errors?.globalErr && (
        <div className="form-group">
          <p className="form-help is-danger">{errors.globalErr.message}</p>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Nom de la recette
        </label>
        <input
          id="title"
          className="form-control"
          name="title"
          type="text"
          {...register("title")}
        />
        {errors?.title && (
          <p className="form-help is-danger">{errors.title.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="recipeImage" className="form-label">
          Visuel de la recette (URL)
        </label>
        <input
          id="image"
          className="form-control"
          name="image"
          type="text"
          {...register("image")}
        />
        {errors?.image && (
          <p className="form-help is-danger">{errors.image.message}</p>
        )}
      </div>

      <div className="d-flex justify-content-center pt-5">
        <button
          type="submit"
          className="btn btn--filled btn--primary"
          disabled={isSubmitting}
        >
          {currentRecipe ? "Modifer" : "Ajouter"}
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
