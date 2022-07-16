import './MainPage.scss';
import { Container, List } from '@mui/material';
import { AppService } from '../../core/app/app.service';
import { useEffect, useState } from 'react';
import { PatientListItemComponent } from '../../component/PatientListItem';
import { PageTitleComponent } from '../../component/PageTitle';
import { OrderDialogComponent } from '../../component/OrderDialog';
import { RespPatientData, PatientDTO } from '../../domain/dto/core/patients';
import { OrderDTO } from '../../domain/dto/core/orders';
import { PatientsService } from '../../core/patients/patients.service';
import { OrdersService } from '../../core/orders/orders.service';

export const MainPage = () => {
    const appService = new AppService();
    const patientsService = new PatientsService();
    const ordersService = new OrdersService();
    const [app, setApp] = useState(`App`);
    const [open, setOpen] = useState(false);
    const [orders, setOrders] = useState<OrderDTO[]>([]);
    const [selectPatient, setSelectPatient] = useState<RespPatientData>(new RespPatientData());
    const [patients, setPatients] = useState<RespPatientData[]>([]);

    const asyncData = async () => {
        const data = await appService.getApp();
        const { items } = await patientsService.getAll();
        setApp(data.name);
        setPatients(items);
    };

    const asyncGetOrders = async (patient: PatientDTO) => {
        const { items } = await ordersService.getManyByPatientId(patient.id);
        setOrders(items);
    }

    const genPatientList = () => patients.map(patient => (
        <PatientListItemComponent 
            key={patient.id} content={patient}
            name={patient.name}
            clickOrderButton={async () => {
                await asyncGetOrders(patient);
                setSelectPatient(patient);
                openOrderDialog();
            }}
        /> 
    ));

    const openOrderDialog = () => {
        setOpen(true);
    }

    const creeateOrder = async (patient: PatientDTO, message: string) => {
        await patientsService.createOrderById(patient.id, message);
        await asyncGetOrders(patient);
    };
    
    const updateOrder = async (order: OrderDTO, message: string) => {
        await ordersService.updateById(order.id, message);
    };

    useEffect(() => {
        asyncData();
    }, []);

    return (
        <div className="main-page">
            <Container>
                <PageTitleComponent name="Patients List" />
                <List>
                    { genPatientList() }
                </List>
            </Container>
            <OrderDialogComponent name={selectPatient.name} patient={selectPatient} listenOrderCreate={creeateOrder} listenOrderSave={updateOrder} open={open} content={orders} setOpen={setOpen} />
        </div>
    );
};