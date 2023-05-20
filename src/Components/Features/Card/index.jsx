import React from "react";
import { Wrapper } from "./style";

const Card = ({ title, text, img }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={img} alt="" />
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Text>{text}</Wrapper.Text>
    </Wrapper>
  );
};

export default Card;
