import { useSelector } from "react-redux";
import Loading from "../src/components/Loading";
import OrderComp from "../src/components/Order";

const Order = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user.status !== "succeeded" ? (
        <Loading />
      ) : (
        <OrderComp orderId={user?.user?.orderId} />
      )}
    </>
  );
};

export default Order;
