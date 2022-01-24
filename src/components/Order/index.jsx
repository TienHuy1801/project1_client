import { useEffect, useState } from "react";
import { orderApi } from "../../../API/order";
import Loading from "../Loading";
import OrderItem from "./oder-item";

const OrderComp = ({ orderId }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await orderApi(orderId);
      if (response.data) setOrders(response.data.orders);
    }
    fetchData();
  }, []);
  return (
    <>
      {orders ? (
        orders.map((orderItem) => (
          <OrderItem key={orderItem._id} item={orderItem} />
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default OrderComp;
