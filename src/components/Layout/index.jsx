import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchLoginSuccess } from "../../redux/user/action";
import AlertCustom from "../Alert/index";
import { fetchProductsRequest } from "../../redux/product/action";
import { useRouter } from "next/dist/client/router";

const Layout = ({ children }) => {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const route = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.status === "idle") {
      const dataUser = JSON.parse(localStorage.getItem("user"));
      if (dataUser) dispatch(fetchLoginSuccess(dataUser));
      else if (route.pathname != "/") route.push("/login");
    }
  }, []);
  useEffect(() => {
    if (products.status === "idle") {
      dispatch(fetchProductsRequest());
    }
  }, []);
  return (
    <>
      <Head>
        <title>My Shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Header />
      <AlertCustom />
      <div style={{minHeight: "500px"}}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
