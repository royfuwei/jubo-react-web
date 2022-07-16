import './PatientListItem.scss';
import { RespPatientData } from '../../domain/dto/core/patients';
import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { PatientListItemProps } from '../../domain/interface/compoenents/PatientListItem';

const testData: RespPatientData = new RespPatientData();

export const PatientListItemComponent = (
    { 
        content = testData, clickOrderButton = () => console.log('hihi') }: PatientListItemProps<RespPatientData>
    ) => {
    const onClick = () => {
        clickOrderButton();
    }
    return (
        <ListItem className='PatientListItem'
            secondaryAction={
                <Button onClick={onClick}
                    variant="outlined" startIcon={<AssignmentIcon />}
                >
                    醫囑
                </Button>
            }
        >
            <ListItemAvatar>
                <Avatar alt={ content.name }></Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={ content.name }
            >
                
            </ListItemText>
        </ListItem>
    )
};