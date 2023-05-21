import React from "react";
import { Wrapper } from "./style";

const Card = ({ img, title, text, index }) => {
  return (
    <Wrapper index={index}>
      <Wrapper.Img src={img} />
      <Wrapper.TextSide>
        <Wrapper.Title>{title}</Wrapper.Title>
        <Wrapper.Text>{text}</Wrapper.Text>
      </Wrapper.TextSide>
    </Wrapper>
  );
};

export default Card;
