import { RespItems } from '../common';
import { OrderDTO } from './orders';

export class PatientDTO {
    id: string = '';
    name: string = '';
    orderIds: string[] = [];
}

export class RespPatientData extends PatientDTO {
    orders: OrderDTO[] = [];
}

export class RespPatients extends RespItems<RespPatientData> {}
