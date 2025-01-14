import Banner from "../components/home/banner";
import Somos from "../components/home/somos";

function HomePage() {
  return (
    <div className="mt-20 pt-2 items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Banner/>
      <Somos/>
    </div>
  );
}

export default HomePage;