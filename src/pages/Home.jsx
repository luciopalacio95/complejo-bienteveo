import Banner from "../components/home/banner";
import Contacto from "../components/home/contacto";
import Galeria from "../components/home/galeria";
import Servicios from "../components/home/servicios";

function HomePage() {
  return (
    <div className="mt-14 sm:mt-18 pt-2 sm:pt-4 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Banner/>
      <Servicios/>
      <Galeria/>
      <Contacto/>
    </div>
  );
}

export default HomePage;