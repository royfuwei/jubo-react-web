import { ICompoenetBaseProps } from "./base";
import { PatientDTO } from '../../dto/core/patients';
import { OrderDTO } from '../../dto/core/orders';

export interface OrderDialogProps<T> extends ICompoenetBaseProps<T> {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    listenOrderCreate: ListenOrderCreateType,
    listenOrderSave: ListenOrderUpdateType,
    patient: PatientDTO,
    open: boolean;
}
  
export type ListenOrderCreateType = (patient: PatientDTO, message: string) => any;
export type ListenOrderUpdateType = (order: OrderDTO, message: string) => any;
