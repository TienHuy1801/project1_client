import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Table } from "reactstrap";
import { addOrderApi } from "../../../API/order";
import { fetchProductsRequest } from "../../redux/product/action";
import { alertService } from "../Alert/alert.service";
import CartItemComp from "./cart-item";
import style from "./Cart.module.scss";

const CartComp = ({ cart }) => {
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const route = useRouter();
  
  const orderCart = async () => {
    try {
      if (cart.price <= 0) {
        alertService.error("Chưa có sản phẩm");
      } else {
        const mess = await addOrderApi({
          userId: user.user.id,
        });
        alertService.success(mess.data);
        route.push("/order");
      }
    } catch (error) {
      alertService.error(error.response.data);
    }
  };
  if (cart) {
    return (
      <>
        <div className={style["cart"]}>
          <Table className={style["cart_table"]}>
            <thead>
              <tr>
                <th style={{ width: "20%" }}></th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((item) => (
                <CartItemComp
                  key={item._id}
                  cartId={cart._id}
                  cartItemId={item._id}
                  product={
                    products.products.filter(
                      (product) => product._id == item.productId
                    )[0]
                  }
                  quantity={item.quantity}
                />
              ))}
            </tbody>
          </Table>
          <p className={style["cart_price"]}>Tổng tiền: {cart.price}</p>
          <Button
            color="primary"
            onClick={() => {
              orderCart();
            }}
            style={{marginBottom: "30px"}}
          >
            Đặt hàng
          </Button>
        </div>
      </>
    );
  } else return <></>;
};

export default CartComp;
