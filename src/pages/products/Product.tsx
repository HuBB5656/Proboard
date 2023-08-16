import Single from "../../componets/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

function product() {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
}

export default product;
