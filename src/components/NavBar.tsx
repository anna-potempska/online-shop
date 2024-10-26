import { TextField } from "@mui/material";
import MuiButton from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>Store</h1>
        </div>
        <div className="navigation">
          <TextField
            id="outlined-basic"
            label="Search product"
            variant="outlined"
            size="small"
          />
          <MuiButton variant="contained" className="button" size="medium">
            Add product
          </MuiButton>
        </div>
      </div>
      <Divider />
    </>
  );
}
