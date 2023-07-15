import { keyframes, styled } from "styled-components";

let text = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  .active {
    height: 300px;
  }
  .activeText {
    display: block;
  }
  .activeIcon {
    background-color: #59e4a8;
    color: #fff;
    transform: rotate(90deg);
  }
`;
Wrapper.Card = styled.div`
  width: 100%;
  height: 132px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  background: #ffffff;
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 18px;
  cursor: pointer;
  transition: ease-in 0.4s;
`;
Wrapper.QuestionSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  .icon {
    width: 50.66px;
    height: 50.66px;
    border-radius: 50%;
    background: ${({ active }) => (!active ? "#fff" : "#59e4a8")};
    box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: ${({ active }) => (active ? "#fff" : "#59e4a8")};
    font-weight: 700;
    transition: ease-in-out 0.4s;
  }
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #222;
`;
Wrapper.AnswerSide = styled.div`
  display: none;
  padding: 20px 60px;
  height: 0;
  animation: ${text} 1 ease-in;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
`;
Wrapper.Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #6f6c90;
  width: 80%;
`;
