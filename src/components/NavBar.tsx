import { TextField } from "@mui/material";
import MuiButton from "@mui/material/Button";
import Divider from "@mui/material/Divider";

interface NavBarProps {
  onIsOpenForm: () => void;
  search: string;
  onSearch: (term: string) => void;
}

export default function NavBar({
  onIsOpenForm,
  search,
  onSearch,
}: NavBarProps) {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div className="icon">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="32px"
              width="32px"
            >
              <path d="M19.148 2.971A2.008 2.008 0 0017.434 2H6.566c-.698 0-1.355.372-1.714.971L2.143 7.485A.995.995 0 002 8a3.97 3.97 0 001 2.618V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.382A3.97 3.97 0 0022 8a.995.995 0 00-.143-.515l-2.709-4.514zm.836 5.28A2.003 2.003 0 0118 10c-1.103 0-2-.897-2-2 0-.068-.025-.128-.039-.192l.02-.004L15.22 4h2.214l2.55 4.251zM10.819 4h2.361l.813 4.065C13.958 9.137 13.08 10 12 10s-1.958-.863-1.993-1.935L10.819 4zM6.566 4H8.78l-.76 3.804.02.004C8.025 7.872 8 7.932 8 8c0 1.103-.897 2-2 2a2.003 2.003 0 01-1.984-1.749L6.566 4zM10 19v-3h4v3h-4zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.142c.321.083.652.142 1 .142a3.99 3.99 0 003-1.357c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357A3.99 3.99 0 0018 12c.348 0 .679-.059 1-.142V19h-3z" />
            </svg>
          </div>
          <div className="name">
            <h1>Store</h1>
          </div>
        </div>
        <div className="navigation">
          <TextField
            id="outlined-basic"
            label="Search product"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
          <MuiButton
            variant="contained"
            className="button"
            size="medium"
            onClick={onIsOpenForm}
          >
            Add product
          </MuiButton>
        </div>
      </div>
      <Divider />
    </>
  );
}
