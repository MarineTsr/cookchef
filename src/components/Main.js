import Recipe from "./Recipe";
import styles from "./Main.module.scss";

function Main() {
  return (
    <main className={`${styles.mainContent} flex-fill`}>
      <div className="container">
        <h2 className="text-center mb-5 pb-3">Découvrez nos nouvelles recettes</h2>
        <ul className={`${styles.recipeList} row p-3`}>
          <li className={`col-12 col-sm-6 col-md-4 col-xl-3`}>
            <Recipe />
          </li>
          <li className={`col-12 col-sm-6 col-md-4 col-xl-3`}>
            <Recipe />
          </li>
          <li className={`col-12 col-sm-6 col-md-4 col-xl-3`}>
            <Recipe />
          </li>
          <li className={`col-12 col-sm-6 col-md-4 col-xl-3`}>
            <Recipe />
          </li>
          <li className={`col-12 col-sm-6 col-md-4 col-xl-3`}>
            <Recipe />
          </li>
          <li className={`col-12 col-sm-6 col-md-4 col-xl-3`}>
            <Recipe />
          </li>
          <li className={`col-12 col-sm-6 col-md-4 col-xl-3`}>
            <Recipe />
          </li>
          <li className={`col-12 col-sm-6 col-md-4 col-xl-3`}>
            <Recipe />
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Main;
