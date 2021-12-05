import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import AddProduct from "../../src/components/Shop/AddProduct";
import MyProduct from "../../src/components/Shop/MyProduct";
import style from "../../src/components/Shop/AddProduct/AddProduct.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { fetchLoginSuccess } from "../../src/redux/user/action";
import { fetchProductsRequest } from "../../src/redux/product/action";
import Link from "next/link";
import Loading from "../../src/components/Loading";

const Shop = () => {
  const [addProduct, setAddProduct] = useState(false);
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);

  return (
    <>
      <div
        style={{ display: "flex", marginTop: "20px", justifyContent: "center" }}
      >
        <Button color="primary" onClick={() => setAddProduct(!addProduct)}>
          Thêm sản phẩm
        </Button>
        <Link href="/shop/delivering">
          <a>
            <Button color="info" style={{ marginLeft: "50px" }}>
              Danh sách đơn hàng
            </Button>
          </a>
        </Link>
      </div>
      {products.status === "loading" ? (
        <Loading/>
      ) : (
        <MyProduct
          products={products?.products?.filter(
            (prod) => prod.shopId == user.user?.shopId
          )}
        />
      )}

      {addProduct ? (
        <>
          <div
            className={style["background"]}
            onClick={() => setAddProduct(false)}
          ></div>
          <AddProduct setAddProduct={setAddProduct} user={user.user} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Shop;
