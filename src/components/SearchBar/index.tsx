import styles from "./SearchBar.module.scss";
import {ChangeEvent} from "react";

function SearchBar({setFilter}: { setFilter: (filter: string) => void }) {
    const handleInput = (value: string) => {
        const filter = value.trim().toLowerCase();
        setFilter(filter);
    };

    return (
        <form className={`${styles.mainSearch}`}>
            <input type="text" placeholder="Je recherche..."
                   onInput={(event: ChangeEvent<HTMLInputElement>) => handleInput(event.target.value)}/>
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
