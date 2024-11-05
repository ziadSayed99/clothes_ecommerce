import { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import { Clothes } from "../data/clothes";
import { getClothesByCategory } from "../Apis/clothes";

function ProductsPage() {
  const [prodcuts, setProducts] = useState<Clothes[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryName = params.get("name");
    if (categoryName === "Men") {
      getClothesByCategory("men").then((res) => setProducts(res));
    } else if (categoryName === "Kids") {
      getClothesByCategory("kids").then((res) => setProducts(res));
    }
  }, []);

  console.log(prodcuts);

  return <SideBar products={prodcuts} />;
}

export default ProductsPage;
