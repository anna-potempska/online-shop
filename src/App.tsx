import { createTheme, ThemeProvider } from "@mui/material";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const theme = createTheme({
    typography: {
      htmlFontSize: 12,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <ProductCard
          title="Schuhe"
          price={45}
          image="/img/schuhe.jpeg"
          description="Coole Adidas Schuhe"
        />

        <ProductCard
          title="Schuhe"
          price={45}
          image="/img/schuhe.jpeg"
          description="Coole Adidas Schuhe"
        />

        <ProductCard
          title="Schuhe"
          price={45}
          image="/img/schuhe.jpeg"
          description="Coole Adidas Schuhe"
        />

        <ProductCard
          title="Schuhe"
          price={45}
          image="/img/schuhe.jpeg"
          description="Coole Adidas Schuhe"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
