import './OrderDialog.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, IconButton, List, ListItem, ListItemIcon } from "@mui/material"
import { useState } from "react";
import { RespOrders, OrderDTO } from '../../domain/dto/core/orders';
import { OrderListItemComponent } from '../OrderListItem/index';
import AddIcon from '@mui/icons-material/Add';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ICompoenetBaseProps } from '../../domain/interface/compoenents/base';

interface OrderDialogProps<T> extends ICompoenetBaseProps<T> {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const testData: OrderDTO[] = []

export const OrderDialogComponent = (
  { name, content = testData, open = false, setOpen}: OrderDialogProps<OrderDTO[]>
) => {
  const genOrderListItems = () => content.map(order => (
    <OrderListItemComponent key={order.id} content={order}/>
  ))

  const handleClose = () => {
    setOpen(false);
  };
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
          <ListItem className='list-item-append'>
            <Button fullWidth onClick={handleClose} startIcon={
              <AssignmentIcon/>
            }>新增醫囑</Button>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </Dialog>
  )
}