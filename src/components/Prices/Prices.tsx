import { Row, Col, Button } from "antd";
import React from "react";
import { PriceWrapper } from "../../styles/Prices";

function Prices() {
  return (
    <div>
        <Row justify="center">
          <Col xs={23} lg={20}>
            <h2 className="">Цены</h2>
            <PriceWrapper>
                <p className="name">
                    Разработка сайта-визитки
                </p>
                <p> от 5000₽*</p>
            </PriceWrapper>
            <PriceWrapper>
                <p className="name">
                    Разработка сайта
                </p>
                <p> от 10000₽*</p>
            </PriceWrapper>
            <p className=""> * - зависит от сложности работы</p>

            <Button style={{width: "100%", margin :"0 0 16px 0"}}>Заказать</Button>
          </Col>
        </Row>
      </div>
  );
}

export default Prices;
