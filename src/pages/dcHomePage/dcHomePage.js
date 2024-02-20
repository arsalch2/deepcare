import React, { useState } from "react";
import "./dcHomePage.scss";
import { Header } from "../../components/layout/header/header";
import { Footer } from "../../components/layout/footer/footer";
import { Content } from "../../components/content/content";
import { Context } from "../../components/context/context";

export function DcHomePage() {
  const [postList, setPostList] = useState([]);
  return (
    <>
      <div className="dCContainer  mx-auto justify-center items-center">
        <Header />
        <div className="dcDynamicContentBody">
          <Content setPostList={setPostList} />
          <Context postList={postList} />
        </div>
        <Footer />
      </div>
    </>
  );
}
