import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertService } from "../../src/components/Alert/alert.service";
import ProductDetailComp from "../../src/components/ProductDetail";
import { fetchProductsRequest } from "../../src/redux/product/action";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);
  const router = useRouter();
  const { id } = router.query;
  var product;
  if (products.status === "succeeded") {
    product = products?.products?.filter((prod) => prod._id == id)[0];
  }

  return <ProductDetailComp product={product} />;
};

export default ProductDetail;
