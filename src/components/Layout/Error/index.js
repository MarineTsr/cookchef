import { useRouteError } from "react-router-dom";
import styles from "./Error.module.scss";

function Error() {
  const errorInfos = useRouteError();

  return (
    <div className={`${styles.errorWrapper}`}>
      <h2 className="mb-2">
        {errorInfos.status ? errorInfos.status + " " : ""}Error
      </h2>
      <p className="my-0">{errorInfos.message || errorInfos.statusText} </p>
    </div>
  );
}

export default Error;
