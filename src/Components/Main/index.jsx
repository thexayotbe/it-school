import React from "react";
import { Wrapper } from "./style";
import { Span } from "../Generic/styles";
import mainImg from "../../assets/images/main1.jpg";
const Main = () => {
  return (
    <Wrapper>
      <Wrapper.Left>
        <Wrapper.Text>
          <Span>IT Hamma uchun</Span> : do'stona va qulay muhitda o'rganishni
          boshlang!
        </Wrapper.Text>
      </Wrapper.Left>
      <Wrapper.Right>
        <Wrapper.Video src={mainImg} />
      </Wrapper.Right>
    </Wrapper>
  );
};

export default Main;
