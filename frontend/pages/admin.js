import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import Login from "./login";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        //login
        setIsLogin(true);
      } else {
        router.push("/login");
      }
    });
  }
  function logout() {
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  }
  useEffect(() => {
    checkLogin();
  });
  return <>{isLogin && <Button onClick={logout}>Logout</Button>}</>;
}
