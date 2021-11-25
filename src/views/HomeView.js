import GrupoProdHome from "../components/GrupoProdHome";
import GroupCategoria from "../components/GroupCategoria";
import HeaderCarousel from "../components/HeaderCarousel";

export default function HomeView() {
  return (
    <>
      <HeaderCarousel />
      <h2 className="text-center my-4">Categorias</h2>
      <GroupCategoria />
      <h2 className="text-center my-4">Ultimas novedades</h2>
      <GrupoProdHome />
    </>
  );
}
