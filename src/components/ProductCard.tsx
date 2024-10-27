import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IProduct } from "../api/create-product";

export default function ProductCard({
  title,
  price,
  image,
  currency = "€",
  description,
}: IProduct) {
  return (
    <div className="product-card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 200 }} image={image} title={title} />
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
              {title}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {price} {currency}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="left">
            <Typography variant="body1" sx={{ color: "#333" }}>
              {description}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </CardActions>
      </Card>
    </div>
  );
}
