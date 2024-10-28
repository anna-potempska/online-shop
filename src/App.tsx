import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import DeleteProduct from "./components/DeleteProduct";
import ProductForm from "./components/ProductForm";
import useProduct from "./hooks/useProduct";
import { IAction, IProduct } from "./types";
import "./App.css";

function App() {
  const {
    products,
    onCreateProduct,
    onEditProduct,
    onDeleteProduct,
    search,
    filteredProducts,
    onSearch,
  } = useProduct();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>(
    undefined
  );
  const [action, setAction] = useState<IAction>({
    action: onCreateProduct,
    dialogActionTitle: "Add product",
    dialogTitle: "Add new product",
  });

  const theme = createTheme({
    typography: {
      htmlFontSize: 12,
    },
  });

  const handleOpenForm = () => {
    setIsEditFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsEditFormOpen(false);
    setSelectedProduct(undefined);
    setAction({
      action: onCreateProduct,
      dialogActionTitle: "Add product",
      dialogTitle: "Add new product",
    });
  };

  const _onEditProduct = (product: IProduct) => {
    setIsEditFormOpen(true);
    setSelectedProduct(product);
    setAction({
      action: onEditProduct,
      dialogActionTitle: "Edit product",
      dialogTitle: "Edit product",
    });
  };

  const _onDeleteProduct = (product: IProduct) => {
    setIsDeleteFormOpen(true);
    setSelectedProduct(product);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar
          onIsOpenForm={handleOpenForm}
          search={search}
          onSearch={onSearch}
        />
        <ProductForm
          product={selectedProduct}
          open={isEditFormOpen}
          onClose={handleCloseForm}
          onSubmit={action.action}
          actionTitle={action.dialogActionTitle}
          dialogTitle={action.dialogTitle}
        />
        {selectedProduct && (
          <DeleteProduct
            product={selectedProduct}
            handleClose={() => setIsDeleteFormOpen(false)}
            isOpen={isDeleteFormOpen}
            onSubmit={async () => {
              await onDeleteProduct(selectedProduct);
              setIsDeleteFormOpen(false);
              setSelectedProduct(undefined);
            }}
          />
        )}
        <ProductList
          products={products}
          onEditProduct={_onEditProduct}
          onDeleteProduct={_onDeleteProduct}
          productsList={filteredProducts}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
