import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IProduct } from "../types";

interface IDeleteProductProps {
  product: IProduct;
  isOpen: boolean;
  handleClose: () => void;
  onSubmit: () => void;
}

export default function DeleteProduct({
  product,
  onSubmit,
  isOpen,
  handleClose,
}: IDeleteProductProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete product?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmit} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
