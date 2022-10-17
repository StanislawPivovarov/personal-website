import { Row, Col } from "antd";
import React from "react";
import { Dolina, FrontEnd, HelloHeader, HelloWrapper, Quote } from "../../styles/Hello";
import Header from "../Header";
import face from "../../assets/img/photo_2022-10-17_17-49-13.jpg"
import { Face } from "../../styles/Hello";

function Hello() {
  return (
    <HelloWrapper>
      <Row justify="center">
        <Col xs={23} lg={20}>
          <Header />
          <HelloHeader className="hello">Hi, I'm Stas</HelloHeader>
          <Face src={face} alt="" />
          <FrontEnd className="">Front-end разработчик</FrontEnd>
          <Quote className="">"Вот он, а дальше уже ариана гранде, леди гага и все остальные, вот он стоит на вершине"</Quote>
          <Dolina className="copyright">© Лариса Долина </Dolina>
        </Col>
      </Row>
    </HelloWrapper>
  );
}

export default Hello;
