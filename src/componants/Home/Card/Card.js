import { Link } from "react-router-dom";
import "./card.css";
function Card(probs) {
  const product = probs.product;
  return (
    <>
      <div className="card" key={product.id}>
        <div className="image">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt=""></img>
          </Link>
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="titel">
          <h1>{product.title}</h1>
          <span>${product.price}</span>
        </div>
        <p>{product.category}</p>
        <div className="button">
          <div className="btn call">
            <i class="fa-solid fa-phone"></i>
            اتصال
          </div>
          <div className="btn sms">
            <i class="fa-regular fa-comment-dots"></i>
            مراسلة
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
