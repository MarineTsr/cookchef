import styles from "./RecipeForm.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import ApiContext from "context/ApiContext";

function RecipeForm() {
  const BASE_URL_API = useContext(ApiContext);

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
    title: null,
    image: null,
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

      const response = await fetch(BASE_URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const results = await response.json();
        console.log(results);
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
      <h3 className="pb-5">Ajouter une recette</h3>

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
          Ajouter
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
