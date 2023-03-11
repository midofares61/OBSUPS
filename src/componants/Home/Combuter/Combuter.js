import TitelCategory from "../Title/Title";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./products.css";
function Combuter() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  return (
    <>
      <TitelCategory
        name="اجهزة الكومبيوتر"
        content="هذا النص هو مثال لنص يمكن ان يستبدل في نفس المساحة"
      />
      <div className="container cards">
        {products.map((product) => {
          return (
            product.category === "electronics" && (
              <Card key={product.id} product={product} />
            )
          );
        })}
      </div>
      <div className="other">مشاهدة المزيد</div>
    </>
  );
}
export default Combuter;
