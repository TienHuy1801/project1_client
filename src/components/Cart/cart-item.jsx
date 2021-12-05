import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Cart.module.scss";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import { removeFromCartApi } from "../../../API/cart";
import { alertService } from "../Alert/alert.service";

const CartItemComp = ({ cartId, product, cartItemId, quantity }) => {
  const removeCartItem = async () => {
    try {
      await removeFromCartApi({
        cartId: cartId,
        cartItemId: cartItemId,
        price: quantity * product.price,
      });
      location.reload();
      alertService.success("Xóa thành công")
    } catch (error) {
      alertService.error(error);
    }
  };
  return (
    <tr className={style["cart_item"]}>
      <td>
        <img
          src={product.imageUrl}
          height="100%"
          className={style["cart_item--img"]}
          alt={product.title}
        />
      </td>
      <td className={style["cart_item--title"]}>{product.title}</td>
      <td className={style["cart_item--text"]}>{product.price}</td>
      <td className={style["cart_item--text"]}>{quantity}</td>
      <td className={style["cart_item--text"]}>{quantity * product.price}</td>
      <td className={style["cart_item--btn"]}>
        <Button
          color="danger"
          onClick={() => {
            removeCartItem();
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
    </tr>
  );
};

export default CartItemComp;
