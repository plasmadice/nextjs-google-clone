import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import { Image, Container } from "semantic-ui-react";

const Home = () => (
  <div>
    <Head>
      <title>Google</title>
      <link rel="icon" href="/google-favicon.png" />
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
    </Head>

    <Navbar />

    <div
      style={{
        minHeight: "500px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Container textAlign={"center"}>
        <Image centered src="./google.png" style={{ marginBottom: "30px" }} />
        <Searchbar />
      </Container>
      <Footer />
    </div>
  </div>
);

export default Home;
