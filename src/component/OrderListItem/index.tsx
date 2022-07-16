import './OrderListItem.scss';
import { Box, IconButton, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { OrderDTO } from '../../domain/dto/core/orders';
import { ICompoenetBaseProps } from '../../domain/interface/compoenents/base';
import { useState } from 'react';
import { OrderListItemProps } from '../../domain/interface/compoenents/OrderListItem';

const testData: OrderDTO = new OrderDTO();



export const OrderListItemComponent = ({ listenSave = () => {}, content = testData }: OrderListItemProps<OrderDTO>) => {
    const [isEdit, setIsEdit] = useState(false);
    const [message, setMessage] = useState(content.message);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const clickEditButton = () => {
        setIsEdit(true);
    }

    const clickSaveButton = () => {
        listenSave();
        setIsEdit(false);
    }

    const clickClearButton = () => {
        setIsEdit(false);
    }

    const showEditButton = () => {
        if (!isEdit) {
            return (
                <IconButton edge="end" aria-label="edit" onClick={clickEditButton}>
                    <EditIcon />
                </IconButton>
            )
        } else {
            return (
                <>
                    <IconButton edge="end" aria-label="clear" onClick={clickClearButton}>
                        <ClearIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="check" onClick={clickSaveButton}>
                        <CheckIcon />
                    </IconButton>
                </>
            )
        }
    }

    const showListItemText = () => {
        if (!isEdit) {
            return (
                message
            )
        } else {
            return <TextField
                fullWidth
                id="outlined-name"
                label=""
                size="small"
                value={message}
                onChange={handleChange}
            />
        }
    }


    return (
        <ListItem className='OrderListItem'
            secondaryAction={
                <Box>
                    { showEditButton() }
                </Box>
            }
        >
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText className='list-item-text'>
                { showListItemText() }
            </ListItemText>
        </ListItem>
    )
};