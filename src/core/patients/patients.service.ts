import axios from 'axios';
import { ReqOrderData } from '../../domain/dto/core/orders';
import { RespPatients, RespPatientData } from '../../domain/dto/core/patients';
export class PatientsService {
    async getAll(): Promise<RespPatients> {
        const originURL = window.location.origin;
        const patientsUrl = `${originURL}/api/patients/`;
        let result = new RespPatients();
        try {
            const { data } = await axios.get<RespPatients>(patientsUrl);
            result = data;
        } catch (err) {
            console.error(err);
        }
        return result;
    }

    async createOrderById(id: string, message: string) {
        const originURL = window.location.origin;
        const patientsUrl = `${originURL}/api/patients/${id}/order`;
        let result = new RespPatientData();
        try {
            const body: ReqOrderData = {
                message
            };
            const { data } = await axios.post<RespPatientData>(patientsUrl, body);
            result = data;
        } catch (err) {
            console.error(err);
        }
        return result;
    }
}