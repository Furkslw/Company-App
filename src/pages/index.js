import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { Features, Footer, Header, Possibility, AboutUs } from "@/containers";
import { Navbar, Brand, Cta } from "@/components";
import Form from "@/containers/form/Form";

export default function Home() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        {/* <Brand /> */}
        <AboutUs />
        <Features />
        {/* <Possibility /> */}
        <Form />
        <Footer />
      </div>
    </>
  );
}
