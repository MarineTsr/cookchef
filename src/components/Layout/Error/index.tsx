import {useRouteError, isRouteErrorResponse} from "react-router-dom";
import styles from "./Error.module.scss";

function Error() {
    const errorInfos = useRouteError();

    return (
        <div className={`${styles.errorWrapper}`}>
            <h2 className="mb-2">
                {isRouteErrorResponse(errorInfos) ? errorInfos.status + " " : ""}Error
            </h2>
            <p className="my-0">{isRouteErrorResponse(errorInfos) ? errorInfos.statusText : 'Une erreur inconnue est survenue'} </p>
        </div>
    );
}

export default Error;
