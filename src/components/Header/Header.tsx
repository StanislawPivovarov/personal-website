import React from "react";
import logo from "../../assets/img/logo.svg";
import { HeaderWrapper, Link, Links, Logo } from "../../styles/Header";
import { Col, Row } from "antd";
function Header() {
  return (
    <HeaderWrapper>
      <Row justify="center">
        <Col xs={23} lg={20}>
          <Logo src={logo} alt="logotype" />
          <Links>
            <Link href="#" className="about">
              Обо мне
            </Link>
            <Link href="#" className="projects">
              Проекты
            </Link>
            <Link href="#" className="prices">
              Цены
            </Link>
          </Links>
        </Col>
      </Row>
    </HeaderWrapper>
  );
}
export default Header;
