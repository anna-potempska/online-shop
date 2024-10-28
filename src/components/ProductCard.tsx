import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IProduct } from "../types";

interface IProductCardProps {
  product: IProduct;
  onEditProduct: (product: IProduct) => void;
  onDeleteProduct: (product: IProduct) => void;
}

export default function ProductCard({
  product,
  onEditProduct,
  onDeleteProduct,
}: IProductCardProps) {
  return (
    <div className="product-card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {product.title}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {product.price} €
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="left">
            <Typography variant="body1" sx={{ color: "#333" }}>
              {product.description}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={() => onEditProduct(product)}>Edit</Button>
          <Button onClick={() => onDeleteProduct(product)}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}
