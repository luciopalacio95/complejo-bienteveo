import Banner from "../components/home/banner";
import Somos from "../components/home/somos";

function HomePage() {
  return (
    <div className="mt-14 sm:mt-18 pt-2 sm:pt-8 items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Banner/>
      <Somos/>
    </div>
  );
}

export default HomePage;