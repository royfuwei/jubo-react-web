import { ICompoenetBaseProps } from "./base";

export interface OrderDialogProps<T> extends ICompoenetBaseProps<T> {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    listenCreate: Function,
    open: boolean;
}
  