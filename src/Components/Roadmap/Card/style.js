import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 12px;
  border: 2px solid #59e4a8;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: ease-in 0.2s;
  position: relative;
  &:hover {
    -webkit-box-shadow: 8px 8px 9px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 8px 8px 9px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 8px 8px 9px 2px rgba(34, 60, 80, 0.2);
  }
  &:before {
    content: "";
    width: 100px;
    height: 3px;
    background-color: #59e4a8;
    position: absolute;
    right: ${({ index }) => index % 2 === 0 && "-100px"};
    left: ${({ index }) => index % 2 === 1 && "-100px"};
    top: 50%;
  }
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid #59e4a8;
    background-color: #fff;
    position: absolute;
    right: -113px;
    right: ${({ index }) => index % 2 === 0 && "-113px"};
    left: ${({ index }) => index % 2 === 1 && "-113px"};

    top: 46%;
  }
`;
Wrapper.Img = styled.img`
  width: 200px;
`;
Wrapper.TextSide = styled.div``;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-transform: capitalize;
  color: #333333;
  width: 250px;
`;
Wrapper.Text = styled.p`
  width: 90%;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 25px;
  color: #333333;
`;
export { Wrapper };
