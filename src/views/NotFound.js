import { height } from "@mui/system";
import Img404 from "../assets/error-404.jpg";

export default function NotFound() {
  return (
    <div className="container">
      <img
        src={Img404}
        style={{
          width: "100%",
          minHeight: "100vh",
          objectFit: "cover",
          objectPosition: "center",
          marginTop: "-60px",
        }}
      />
    </div>
  );
}
