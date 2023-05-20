import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 390px;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 15px 2px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 3px solid transparent;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: ease-in-out 0.2s;
  &:hover {
    border: 3px solid #59e4a8;
  }
`;
Wrapper.Img = styled.img`
  width: auto;
  height: 215px;
`;
Wrapper.TextSection = styled.div`
  border-top: 1px solid #59e4a8;
  margin-top: 12px;
  display: flex;
  padding: 12px 20px;
  height: 95px;
`;
Wrapper.Title = styled.h3`
  width: 295px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-transform: capitalize;
  color: #333333;
`;
Wrapper.Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 25px;
  text-transform: capitalize;
  color: #333333;
`;
Wrapper.Rate = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 3px;
`;
Wrapper.Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 7px;
  width: 100%;
  margin-top: 30px;
`;
Wrapper.InfoText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
`;
export { Wrapper };
