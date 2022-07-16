import { ICompoenetBaseProps } from './base';

export interface OrderListItemProps<T> extends ICompoenetBaseProps<T> {
    listenSave?: Function;
}
