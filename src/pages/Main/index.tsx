import './MainPage.scss';
import { Container, List } from '@mui/material';
import { AppService } from '../../core/app/app.service';
import { useEffect, useState } from 'react';
import { PatientListItemComponent } from '../../component/PatientListItem';
import { PageTitleComponent } from '../../component/PageTitle';
import { OrderListItemComponent } from '../../component/OrderListItem';
import { OrderDialogComponent } from '../../component/OrderDialog';
import { RespPatientData } from '../../domain/dto/core/patients';
import { OrderDTO } from '../../domain/dto/core/orders';

const testData: RespPatientData[] = [
    {
        id: 'patient1',
        name: 'patient1',
        orderIds: [],
        orders: [
            {
                id: 'orderId1',
                message: 'test'
            },
            {
                id: 'orderId11',
                message: 'test11'
            },
        ]
    },
    {
        id: 'patient2',
        name: 'patient2',
        orderIds: [],
        orders: [
            {
                id: 'orderId2',
                message: 'test2'
            }
        ]
    }
]; 

export const MainPage = () => {
    const appService = new AppService();
    const [app, setApp] = useState(`App`);
    const [open, setOpen] = useState(false);
    const [orders, setOrders] = useState<OrderDTO[]>([]);
    const [selectPatient, setSelectPatient] = useState<RespPatientData>(testData[0]);
    const asyncData = async () => {
        const data = await appService.getApp();
        setApp(data.name);
    };

    const genPatientList = () => testData.map(patient => (
        <PatientListItemComponent 
            key={patient.id} content={patient}
            name={patient.name}
            clickOrderButton={() => {
                openOrderDialog();
                setOrders(patient.orders);
                setSelectPatient(patient);
            }}
        /> 
    ));

    const openOrderDialog = () => {
        setOpen(true);
    }

    useEffect(() => {
        asyncData();
        console.log(`app: ${app}`);
    }, []);

    return (
        <div className="main-page">
            <Container>
                <PageTitleComponent name="Patients List" />
                <List>
                    { genPatientList() }
                </List>
            </Container>
            <OrderDialogComponent name={selectPatient.name} open={open} content={orders} setOpen={setOpen} />
        </div>
    );
};