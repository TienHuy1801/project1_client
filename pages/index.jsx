import HomePage from "../src/components/HomePage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../src/redux/product/action";
import Loading from "../src/components/Loading";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const route = useRouter();
  const search = route.query.search;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (products.status !== "succeeded") dispatch(fetchProductsRequest());
  }, []);

  return (
    <>
      {products.status === "loading" ? (
        <Loading />
      ) : (
        <HomePage
          products={products?.products?.filter((prod) => {
            if (search)
              return (
                prod.shopId != user.user?.shopId && prod.title.toLowerCase().includes(search.toLowerCase())
              );
            else return prod.shopId != user.user?.shopId;
          })}
        />
      )}
    </>
  );
};

export default Home;
