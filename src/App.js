import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import CarritoContextProvider from "./context/carritoContext";

import PrivateRoute from "./components/PrivateRoute";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import CheckOutView from "./views/CheckOutView";
import Navegacion from "./components/Navegacion";
import ProductoDetalleView from "./views/ProductoDetalleView";
import CarritoView from "./views/CarritoView";
import NotFound from "./views/NotFound";
import ProductoConFiltroView from "./views/ProductoConFiltroView";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AuthContextProvider>
      <CarritoContextProvider>
        {/*aqui dentro del provider puedo poner tanto componentes como rutas*/}
        <Router>
          <Navegacion />
          <Routes>
            {/* cuando quiero poner una página de 404, le indico el path="*" y al principio */}
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginView />} />
            <Route
              path="/detalleproducto/:id"
              element={<ProductoDetalleView />}
            />
            <Route path="/carrito" element={<CarritoView />} />

            <Route path="/productosfiltros">
              <Route
                path="/productosfiltros"
                element={<ProductoConFiltroView />}
              />
              <Route
                path="/productosfiltros/:busqueda"
                element={<ProductoConFiltroView />}
              />
            </Route>
            {/* Rutas privadas */}
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <CheckOutView />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </CarritoContextProvider>
    </AuthContextProvider>
  );
}
