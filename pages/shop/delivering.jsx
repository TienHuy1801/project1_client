import { useSelector } from "react-redux";
import Loading from "../../src/components/Loading";
import DeliveringComp from "../../src/components/Shop/Delivering";

const Delivering = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user.status !== "succeeded" ? (
        <Loading />
      ) : (
        <DeliveringComp shopId={user?.user?.shopId} />
      )}
    </>
  );
};

export default Delivering;
