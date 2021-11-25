import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function LoginView() {
  const {signIn} = useContext(AuthContext);
//   console.log("valorContexto", valorContexto);
  return <div>
      <button className="btn btn-danger btn-lg" onClick={signIn}>Ingresa con google</button>
  </div>;
}
