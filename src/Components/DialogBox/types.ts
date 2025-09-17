import type {ReactNode} from "react";

interface DialogBoxComponentPropsI {
    content: ReactNode;
    open: boolean;
    closeCallback: () => void;
}

export type { DialogBoxComponentPropsI };