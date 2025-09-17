import { useEffect, type ReactNode } from "react";
import "./DisableAnimations.css";

export interface DisableAnimationsProps {
    children: ReactNode;
    disableAnimations: boolean;
}

export function DisableAnimations({ children, disableAnimations }: DisableAnimationsProps) {
    useEffect(() => {
        if (disableAnimations) {
            document.body.classList.add("disable-animations");
        } else {
            document.body.classList.remove("disable-animations");
        }
    }, [disableAnimations]);

    return children;
}
