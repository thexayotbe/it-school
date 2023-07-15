import React from "react";
import { Wrapper } from "./style";
import { Motion, spring } from "react-motion";

const Card = ({ img, title, text, index }) => {
  return (
    <Motion defaultStyle={{ x: 0 }} style={{ y: spring(100) }}>
      {(interpolatedStyle) => (
        <Wrapper
          index={index}
          style={{ transform: `translateY(${interpolatedStyle.y}px)` }}>
          <Wrapper.Img src={img} />
          <Wrapper.TextSide>
            <Wrapper.Title>{title}</Wrapper.Title>
            <Wrapper.Text>{text}</Wrapper.Text>
          </Wrapper.TextSide>
        </Wrapper>
      )}
    </Motion>
  );
};

export default Card;
