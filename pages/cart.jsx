import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartComp from "../src/components/Cart";
import Loading from "../src/components/Loading";
import { fetchCartRequest } from "../src/redux/cart/action";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const route = useRouter();
  useEffect(() => {
    if (user.status !== "succeeded") {
      const dataUser = JSON.parse(localStorage.getItem("user"));
      !dataUser && route.push("/login");
    }
  }, []);
  useEffect(() => {
    if (cart.status === "idle" && user.status === "succeeded")
      dispatch(fetchCartRequest({ cartId: user.user.cartId }));
  }, [user]);

  return (
    <>
      {cart.status === "loading" ? (
        <Loading/>
      ) : (
        <CartComp cart={cart.cart} />
      )}
    </>
  );
};

export default Cart;
