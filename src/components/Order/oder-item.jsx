import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Loading from "../Loading";
import style from './Order.module.scss'

const OrderItem = ({ item }) => {
  const products = useSelector((state) => state.products);
  const status = [
    "Chưa xác nhận",
    "Đang giao",
    "Hết hàng"
  ]
  const statusStyle = [
    "",
    "accept",
    "decline"
  ]
  return (
    <>
      {products.status === "loading" ? (
        <Loading />
      ) : (
        <Container className={style["order-item"]}>
          <div style={{display: "flex", justifyContent: "center"}}><p className={style["order-item_id"]}>ID: {item._id}</p></div>
          {item.products.map((prod) => {
            return products?.products?.map((prodData) => {
              if (prod.productId == prodData._id) return (
                <Row key={prod.productId} className={style["order-item_box"]}>
                    <Col sm={1}><img className={style["order-item--img"]} src={prodData.imageUrl} alt={prodData.title} /></Col>
                    <Col sm={3}>Tên sản phẩm: {prodData.title}</Col>
                    <Col sm={3}>Số lượng：{prod.quantity}</Col>
                    <Col sm={2} className={style[statusStyle[prod.status]]}>Trạng thái：{status[prod.status]}</Col>
                </Row>
              );
            });
          })}
        </Container>
      )}
    </>
  );
};

export default OrderItem;
