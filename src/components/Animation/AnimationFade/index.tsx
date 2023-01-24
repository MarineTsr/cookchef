import {useRef} from "react";
import {CSSTransition} from "react-transition-group";
import styles from "./AnimationFade.module.scss";

function AnimationFade({
                           visibility,
                           timeout,
                           classes,
                           children
                       }: { visibility: boolean, timeout: number, classes: string, children: any }) {
    const currentRef = useRef(null);
    return (
        <CSSTransition
            nodeRef={currentRef}
            in={visibility}
            timeout={timeout}
            unmountOnExit
            classNames={styles}
        >
            <div ref={currentRef} className={classes}>
                {children}
            </div>
        </CSSTransition>
    );
}

export default AnimationFade;
