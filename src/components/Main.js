import styles from "./Main.module.scss";

function Main() {
  return (
    <main className={`${styles.mainContent} flex-fill`}>
      <div className="container">
        <h1 className="text-center">Découvrez nos nouvelles recettes</h1>
        <ul className={`${styles.recipeList} row p-3`}>
          <li className={`${styles.recipeItem} col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.recipeItem__container} p-3`}>Recette</div>
          </li>
          <li className={`${styles.recipeItem} col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.recipeItem__container} p-3`}>Recette</div>
          </li>
          <li className={`${styles.recipeItem} col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.recipeItem__container} p-3`}>Recette</div>
          </li>
          <li className={`${styles.recipeItem} col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.recipeItem__container} p-3`}>Recette</div>
          </li>
          <li className={`${styles.recipeItem} col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.recipeItem__container} p-3`}>Recette</div>
          </li>
          <li className={`${styles.recipeItem} col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.recipeItem__container} p-3`}>Recette</div>
          </li>
          <li className={`${styles.recipeItem} col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.recipeItem__container} p-3`}>Recette</div>
          </li>
          <li className={`${styles.recipeItem} col-12 col-sm-6 col-md-4 col-xl-3`}>
            <div className={`${styles.recipeItem__container} p-3`}>Recette</div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Main;
