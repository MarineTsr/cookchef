import RecipeForm from "components/Recipe/RecipeForm";

function Admin() {
  return (
    <main className={`main-content flex-fill`}>
      <div className="container">
        <h2 className="text-center mb-5 pb-3">Gestion des recettes</h2>

        <RecipeForm />
      </div>
    </main>
  );
}

export default Admin;
