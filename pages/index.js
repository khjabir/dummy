import { Button } from "antd";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button type="primary" onClick={() => alert("Hello World")}>
        Click Me
      </Button>
    </>
  );
}
