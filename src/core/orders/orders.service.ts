import axios from 'axios';
import { ReqOrderData, RespOrders, OrderDTO } from '../../domain/dto/core/orders';
export class OrdersService {
    async getManyByPatientId(patientId: string) {
        const originURL = window.location.origin;
        const ordersUrl = `${originURL}/api/orders/patients/${patientId}`;
        let result = new RespOrders();
        try {
            const { data } = await axios.get<RespOrders>(ordersUrl);
            result = data;
        } catch (err) {
            console.error(err);
        }
        return result;
    }

    async updateById(id: string, message: string) {
        const originURL = window.location.origin;
        const ordersUrl = `${originURL}/api/orders/${id}`;
        let result = new OrderDTO();
        try {
            const body: ReqOrderData = {
                message
            }
            const { data } = await axios.patch(ordersUrl, body);
            result = data;
        } catch (err) {
            console.error(err);
        }
        return result;
    }
}