import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { IProduct } from "../types";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface ProductFormProps {
  open: boolean;
  dialogTitle: string;
  actionTitle: string;
  product?: IProduct;
  onClose: () => void;
  onSubmit: any;
}

export default function ProductForm({
  open,
  dialogTitle,
  actionTitle,
  product,
  onClose,
  onSubmit,
}: ProductFormProps) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [buttonText, setButtonText] = useState("Upload image");

  useEffect(() => {
    if (product) {
      setId(product.id);
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);
      setImage(product.image);
      setButtonText("Uploaded");
    } else {
      setId("");
      setTitle("");
      setDescription("");
      setPrice(0);
      setImage("");
    }
  }, [product]);

  function onAddTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  const onAddPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = parseFloat(value);

    if (!isNaN(numericValue)) {
      setPrice(numericValue);
    }
  };

  function onAddDescription(e: React.ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        setButtonText("Uploaded");
      };
      reader.readAsDataURL(file);
    }
  };

  const onButtonSubmit = (event: any) => {
    event.preventDefault();
    const newProduct: any = {
      title,
      price,
      image,
      description,
    };
    if (product) {
      newProduct["id"] = product.id;
    }

    onSubmit(newProduct);
    setTitle("");
    setPrice(0);
    setImage("");
    setDescription("");
    onClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          component: "form",
        }}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the product details here.</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Product title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={onAddTitle}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            name="price"
            label="Product price"
            type="number"
            fullWidth
            variant="standard"
            value={price}
            onChange={onAddPrice}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Product description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={onAddDescription}
          />
          <div className="img-upload-button">
            <DialogContentText>
              Upload your product image here (only JPEG).{" "}
            </DialogContentText>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z" />
                  <path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z" />
                </svg>
              }
            >
              {buttonText}
              <VisuallyHiddenInput
                type="file"
                onChange={handleFileChange}
                multiple
              />
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onButtonSubmit}>{actionTitle}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
