import React from "react";
import { ImageProject, ProjectCardWrapper } from "../../styles/ProjectCard";

interface ProjectProps{
    image: string;
    name: string;
    dateStart: string;
    dateEnd: string;
    desc: string; 
}

function ProjectCard(props: ProjectProps){
    return (
    <ProjectCardWrapper>
        <ImageProject src={props.image} alt="" />
      <p className="name">{props.name}</p>
      <p className="description">{props.desc}</p>
      <p className="dateend">Начало работы: {props.dateStart}</p>
      <p className="dateend">Конец работы: {props.dateEnd}</p>
      
    </ProjectCardWrapper>
    )
}
export default ProjectCard;