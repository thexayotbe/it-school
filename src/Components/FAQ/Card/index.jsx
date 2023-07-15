import React from "react";
import { Wrapper } from "./style";
import { RightOutlined } from "@ant-design/icons";
const Card = ({ onClick, active }) => {
  console.log(active);
  return (
    <Wrapper>
      <Wrapper.Card onClick={onClick} className={active && "active"}>
        <Wrapper.QuestionSide active={active}>
          <Wrapper.Title>
            What is Webflow and why is it the best website builder?
          </Wrapper.Title>
          <RightOutlined className={active ? "icon activeIcon" : "icon"} />
        </Wrapper.QuestionSide>
        <Wrapper.AnswerSide className={active && "activeText"}>
          <Wrapper.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Wrapper.Text>
        </Wrapper.AnswerSide>
      </Wrapper.Card>
    </Wrapper>
  );
};

export default Card;
