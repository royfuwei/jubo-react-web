import './OrderDialog.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem } from "@mui/material"
import { OrderDTO } from '../../domain/dto/core/orders';
import { OrderListItemComponent } from '../OrderListItem/index';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { OrderDialogProps } from '../../domain/interface/compoenents/OrderDialog';


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