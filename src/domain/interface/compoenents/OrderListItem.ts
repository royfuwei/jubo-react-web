import { ICompoenetBaseProps } from './base';
import { ListenOrderUpdateType } from './OrderDialog';

export interface OrderListItemProps<T> extends ICompoenetBaseProps<T> {
    listenOrderSave: ListenOrderUpdateType,
}
