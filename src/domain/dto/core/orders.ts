import { RespItems } from '../common';
export class OrderDTO {
    id: string = 'id';
    message: string = 'message';
}

export class ReqOrderData {
    message!: string;
}

export class RespOrders extends RespItems<OrderDTO> {}
