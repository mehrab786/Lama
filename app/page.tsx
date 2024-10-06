import Image from "next/image";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
   <>
   <Slider/>
   <div className='mt-24 px-4 md:8 lg:16 xl:32 2xl:64'>
          <ProductList/>
        </div>

   </>
  );
}
