import './MainPage.scss';
import { Container } from '@mui/material';
import { AppService } from '../../core/app/app.service';
import { useEffect, useState } from 'react';
import { PatientItemComponent } from '../../component/PatientItem';
import { PageTitleComponent } from '../../component/PageTitle';
import { OrderItemComponent } from '../../component/OrderItem';


export const MainPage = () => {
    const appService = new AppService();
    const [ app, setApp ] = useState(`App`);
    const asyncData = async () => {
        const data = await appService.getApp();
        setApp(data.name);
    };

    useEffect(() => {
        asyncData();
        console.log(`app: ${app}`);
    }, []);

    return (
        <div className="main-page">
            <Container>
                <PageTitleComponent name="Patients List" />
                <PatientItemComponent/>
                <OrderItemComponent/>
            </Container>
        </div>
    );
};