import React from "react";
import ProjectCard from "../../Cards/ProjectCard";
import { Wrapper } from "../../styles/Tech";
import prosto from "../../assets/img/prosto.png";
import mylogo from "../../assets/img/logo.svg";
import giniyatov from "../../assets/img/KLfHHU_eK-M.jpg";
import { Row, Col } from "antd";

function ProjectPage() {
  return (
    <div>
      
      <Row justify="center">
        <Col xs={23} lg={20}>
        <h2 className="header">Tech Skills</h2>
          <Wrapper>
            <ProjectCard
              image={prosto}
              name="Просто дети - центр развития"
              dateStart="февраль 2022"
              dateEnd="июнь 2022"
              desc="Верстка лендинга"
            />
            <ProjectCard
              image={mylogo}
              name="Photovarov.Web"
              dateStart="17 октября 2022 23:40"
              dateEnd="18 октября 2022 05:30"
              desc="Верстка лендинга"
            />
            <ProjectCard
              image={giniyatov}
              name="Giniyatov C.T."
              dateStart="октябрь 2022"
              dateEnd="в разработке"
              desc="Верстка приложения"
            />
          </Wrapper>
        </Col>
      </Row>
    </div>
  );
}
export default ProjectPage;
