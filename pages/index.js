import { Button } from "antd";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const Router = useRouter();

  const goToStudentsScreen = () => {
    Router.push("students");
  };

  return (
    <>
      <h1>Hello World</h1>
      <Button type="primary" onClick={() => goToStudentsScreen()}>
        Click Me
      </Button>
    </>
  );
}
