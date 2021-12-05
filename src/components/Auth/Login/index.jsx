import { useEffect, useRef } from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import style from "./login.module.scss";
import { fetchLoginRequest } from "../../../redux/user/action";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const LoginComp = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.status === "succeeded") {
      localStorage.setItem("user", JSON.stringify(user.user));
      router.push("/");
    }
  }, [user, router]);

  const email = useRef();
  const password = useRef();

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      fetchLoginRequest({
        email: email.current.value,
        password: password.current.value,
      })
    );
  };

  return (
    <form onSubmit={submit} className={style["login"]}>
      <div className={style["login_table"]}>
        <div className={style["login_email"]}>
          <label className={style["login_email--label"]} htmlFor="email">
            Email:
          </label>
          <input
            ref={email}
            required
            name="email"
            type="email"
            className={style["login_email--input"]}
          />
        </div>
        <div className={style["login_password"]}>
          <label className={style["login_password--label"]} htmlFor="password">
            Mật khẩu:
          </label>
          <input
            ref={password}
            required
            name="password"
            type="password"
            className={style["login_password--input"]}
          />
        </div>
        <Link href="/reset">
          <a className={style["login_reset"]}>Quên mật khẩu</a>
        </Link>
        <div className={style["login_btn"]}>
          <Button color="primary">Đăng nhập</Button>
        </div>
      </div>
    </form>
  );
};

export default LoginComp;