import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  gap: 10px;
  margin-top: 80px;
`;
Wrapper.Card = styled.div`
  width: 50%;
  height: 460px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 80px;
  gap: 10px;
  transition: ease-in 0.3s;
  position: relative;
  &:hover {
    background-color: #59e4a8;
  }
`;

Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-transform: capitalize;
  color: #333333;
`;
Wrapper.Text = styled.div`
  width: 90%;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 25px;
  color: #333333;
`;
Wrapper.ExtraText = styled.p`
  width: 85%;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 35px;
  color: #fff;
  padding-top: -40px;
`;
Wrapper.Img = styled.img`
  width: 180px;
  z-index: 10;
`;
export { Wrapper };
