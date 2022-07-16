import './OrderListItem.scss';
import { IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { OrderDTO } from '../../domain/dto/core/orders';
import { ICompoenetBaseProps } from '../../domain/interface/compoenents/base';

const testData: OrderDTO = new OrderDTO();

export const OrderListItemComponent = ({ content = testData }: ICompoenetBaseProps<OrderDTO>) => {
    return (
        <ListItem className='OrderListItem'
            secondaryAction={
                <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                </IconButton>
            }
        >
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText
                primary={ content.message }
            >
                
            </ListItemText>
        </ListItem>
    )
};