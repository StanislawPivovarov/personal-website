import React from "react";
import {Rate} from "antd";
import { ImageTech, TechCardWrapper } from "../../styles/TechCard";
interface TechProps {
  image: string;
  name: string;
  stars: number;
}

function TechSkillsCard(props: TechProps) {
  return (
    <TechCardWrapper>
      <ImageTech src={props.image} alt="" />
      <p className="name">{props.name}</p>
      <Rate disabled defaultValue={props.stars} />
    </TechCardWrapper>
  );
}

export default TechSkillsCard;
