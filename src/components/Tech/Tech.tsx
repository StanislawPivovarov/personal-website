import { Row, Col } from "antd";
import React from "react";
import TechSkillsCard from "../../Cards/TechSkills";
import fimga from "../../assets/img/figma.png"
import reactlogo from "../../assets/img/React-icon.svg.png"
import css from "../../assets/img/316df50bcf36dccbe19dd219abf85b16.png"
import { TechWrapper, Wrapper } from "../../styles/Tech";

function Tech() {
  return (
    <TechWrapper>
      <Row justify="center">
        <Col xs={23} lg={20}>
          <h2 className="header">Tech Skills</h2>
          <Wrapper>
            <TechSkillsCard image={fimga} name="Figma" stars={5}/>
            <TechSkillsCard image={reactlogo} name="React" stars={3}/>
            <TechSkillsCard image={css} name="CSS3" stars={4}/>
          </Wrapper>
        </Col>
      </Row>
    </TechWrapper>
  );
}
export default Tech;
