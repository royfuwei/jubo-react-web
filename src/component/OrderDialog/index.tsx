import './OrderDialog.scss';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material"
import { OrderDTO } from '../../domain/dto/core/orders';
import { OrderListItemComponent } from '../OrderListItem/index';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { OrderDialogProps } from '../../domain/interface/compoenents/OrderDialog';
import { useState } from 'react';


const testData: OrderDTO[] = []

export const OrderDialogComponent = (
  { name, listenCreate, content = testData, open = false, setOpen}: OrderDialogProps<OrderDTO[]>
) => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const genOrderListItems = () => content.map(order => (
    <OrderListItemComponent key={order.id} content={order}/>
  ))
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const clickCreateItem = () => {
    setMessage('');
    setIsCreate(true);
  }

  const clickSaveButton = () => {
    const newMessage = message;
    listenCreate(newMessage);
    setIsCreate(false);
  }

  const clickCloseButton = () => {
    setIsCreate(false);
  }

  const showCreateButton = () => {
    if (!isCreate) {
      return (
        <Button fullWidth onClick={clickCreateItem} startIcon={
          <NoteAddIcon/>
        }>新增醫囑</Button>
      )
    } else {
      return (
        <div className='create-edit'>
          <Button fullWidth onClick={clickCloseButton} color="warning" startIcon={
            <CloseIcon/>
          }>取消</Button>
          <Button fullWidth onClick={clickSaveButton} color="success" startIcon={
            <CheckIcon/>
          }>新增</Button>
        </div>
      )
    }
  }
  const showCreateItem = () => {
    if (isCreate) {
      return (
        <ListItem>
            <ListItemIcon>
                <NoteAddIcon/>
            </ListItemIcon>
            <ListItemText className='list-item-text'>
                <TextField
                  fullWidth
                  id="outlined-name"
                  label=""
                  size="small"
                  value={message}
                  onChange={handleChange}
                />
            </ListItemText>
        </ListItem>
      )
    }
  }
  return (
    <Dialog
      className="OrderDialog"
      maxWidth="md"
      fullWidth={true}
      open={open} onClose={handleClose}
    >
      <DialogTitle >
        { name }醫囑
      </DialogTitle>
      <DialogContent>
        <List>
          { genOrderListItems() }
          
          <Box sx={{
            backgroundColor: '#F4F6F7',
            marginTop: '30px',
          }}>
            { showCreateItem() }
            <ListItem className='list-create-button'>
              { showCreateButton() }
            </ListItem>
          </Box>
          
        </List>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </Dialog>
  )
}