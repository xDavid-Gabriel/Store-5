import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
  //props.children es literalmente no se que componente voy a renderizar pero lo renderiza de todas maneras, el componente que este dentro de PrivateRoute

  const { user } = useContext(AuthContext);
  console.log("mostrando estado user", user);
  //para que uso Navigate, para redireccionar
  // si es que el usuario es diferente de NULL
  //--V: retorno el hijo que me toque
  //--F: Lo redirijo a login con Navigate
  // !== diferente de
  //operador ternario

  return user !== null ? props.children : <Navigate to="/login" />;
}
