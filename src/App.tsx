import { createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import DeleteProduct from "./components/DeleteProduct";
import ProductForm from "./components/ProductForm";
import { createProduct } from "./api/create-product";
import "./App.css";
import { useState } from "react";

function App() {
  const theme = createTheme({
    typography: {
      htmlFontSize: 12,
    },
  });

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar onIsOpenForm={handleOpenForm} />
        <ProductForm
          open={isFormOpen}
          onClose={handleCloseForm}
          onCreateProduct={createProduct}
        />
        <DeleteProduct />
        <ProductList
          products={[
            { title: "product 1" } as any,
            { title: "product 2" } as any,
            { title: "product 3" } as any,
            { title: "product 4" } as any,
          ]}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
