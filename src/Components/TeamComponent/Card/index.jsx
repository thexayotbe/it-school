import React from "react";
import { Wrapper } from "./style";

const Card = ({ name, job, description, img, isTeacher }) => {
  return (
    <Wrapper>
      <Wrapper.ImgSection isTeacher={isTeacher}>
        <Wrapper.ProfileImg src={img} />
      </Wrapper.ImgSection>
      <Wrapper.TextSide>
        <Wrapper.Name>{name}</Wrapper.Name>
        <Wrapper.Job>{job}</Wrapper.Job>
        <Wrapper.Description>{description}</Wrapper.Description>
      </Wrapper.TextSide>
    </Wrapper>
  );
};

export default Card;
