import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import { acceptDeliApi, declineDeliApi } from "../../../../API/shop";
import { alertService } from "../../Alert/alert.service";
import Loading from "../../Loading";
import style from './Delivering.module.scss';

const DeliveringItem = ({ item }) => {
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

  const accept = async (deliveringId, shopId, orderId) => {
    try {
      const mess = await acceptDeliApi({
        deliveringId: deliveringId,
        shopId: shopId,
        orderId: orderId
      });
      alertService.success(mess.data);
      location.reload();
    } catch (error) {
      alertService.error(error);
    }
  }

  const decline = async (deliveringId, shopId, orderId) => {
    try {
      const mess = await declineDeliApi({
        deliveringId: deliveringId,
        shopId: shopId,
        orderId: orderId
      });
      alertService.success(mess.data);
      location.reload();
    } catch (error) {
      alertService.error(error);
    }
  }

  return (
    <>
      {products.status === "loading" ? (
        <Loading />
      ) : (
        <Container className={style["deli-item"]}>
          {
            products?.products?.map((prodData) => {
              if (item.productId == prodData._id) return (
                <Row key={item.productId} className={style["deli-item_box"]}>
                    <Col sm={2}><img className={style["deli-item--img"]} src={prodData.imageUrl} alt={prodData.title} /></Col>
                    <Col sm={3}>Tên sản phẩm: {prodData.title}</Col>
                    <Col sm={2}>Số lượng：{item.quantity}</Col>
                    <Col sm={3}>
                      <p>Tên: {item.username}</p> 
                      <p>Địa chỉ: {item.place}</p> 
                    </Col>
                    <Col sm={2}>
                      <p className={style[statusStyle[item.status]]}>Trạng thái：{status[item.status]}</p>
                      {
                        (item.status == 0) ? <>
                      <Button color="success" style={{marginRight: "10px"}} onClick={() => accept(item._id, prodData.shopId, item.orderId)}>Xác nhận</Button> 
                      <Button color="danger" onClick={() => decline(item._id, prodData.shopId, item.orderId)}>Hết hàng</Button> </> : <></>
                      }
                    </Col>
                </Row>
              );
            })
          }
        </Container>
      )}
    </>
  );
};

export default DeliveringItem;
