import styles from "./Wishlist.module.scss";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { showWishlistState, wishlistRecipesSelector } from "state";

function Wishlist({ favoriteHandler }) {
  const setShowWishlist = useSetRecoilState(showWishlistState);
  const wishlistRecipes = useRecoilValue(wishlistRecipesSelector);

  return (
    <div
      className={`${styles.wishlist}`}
      onClick={() => setShowWishlist(false)}
    >
      <div
        className={`${styles.wishlist__container}`}
        onClick={(event) => event.stopPropagation()}
      >
        <p className="h3">Wishlist</p>

        {wishlistRecipes.length > 0 ? (
          <ul className="mt-5">
            {wishlistRecipes.map((item) => (
              <li
                key={item._id}
                className="d-flex align-items-center justify-content-between my-2"
              >
                {item.title}
                <button
                  className="btn btn--filled btn--primary"
                  title="Retirer"
                  onClick={(event) =>
                    favoriteHandler(
                      { ...item, isFavorite: !item.isFavorite },
                      event
                    )
                  }
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun favoris pour le moment</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
