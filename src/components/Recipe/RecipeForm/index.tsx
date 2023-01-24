import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate, useParams} from "react-router-dom";
import {createRecipe, updateRecipe} from "api";
import styles from "./RecipeForm.module.scss";
import {useRecoilValue,} from "recoil";
import {recipeItemSelector} from "state";
import {RecipeInterface} from "interfaces";

function RecipeForm() {
    const navigate = useNavigate();
    const {id} = useParams();
    const currentRecipe = useRecoilValue(recipeItemSelector(id));
    const recipeSchema = yup.object({
        title: yup
            .string()
            .nullable()
            .required("Le champ est obligatoire.")
            .min(4, "Le titre doit faire au moins 4 caractères."),
        image: yup.string().nullable().required("Le champ est obligatoire."),
    });

    console.log(currentRecipe);

    const defaultValues = {
        title: currentRecipe ? currentRecipe.title : null,
        image: currentRecipe ? currentRecipe.image : null,
        globalErr: '',
    };

    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        setError,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues,
        mode: "onSubmit",
        resolver: yupResolver(recipeSchema),
    });

    const formSubmit = async (data: Partial<RecipeInterface>) => {
        try {
            clearErrors(); // Must clear errors because they won't be deleted automatically if they are not linked to a specific field (ex: global errors)

            if (currentRecipe) {
                await updateRecipe({_id: currentRecipe._id, ...data});
                navigate("/admin/recettes/liste");
            } else {
                await createRecipe(data);
                reset(defaultValues);
            }
        } catch (err: any) {
            setError("globalErr", {
                type: "globalErr",
                message: err.message,
            });
        }
    };

    return (
        <form
            className={`${styles.recipeForm} p-5`}
            // @ts-ignore
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
