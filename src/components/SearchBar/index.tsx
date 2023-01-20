import styles from "./SearchBar.module.scss";

function SearchBar({ setFilter }) {
  const handleInput = (event) => {
    const filter = event.target.value.trim().toLowerCase();
    setFilter(filter);
  };

  return (
    <form className={`${styles.mainSearch}`}>
      <input type="text" placeholder="Je recherche..." onInput={handleInput} />
      <span
        className={`${styles.mainSearchBtn} btn btn--filled btn--primaryReverse no-hover`}
        title="Rechercher"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
    </form>
  );
}

export default SearchBar;
