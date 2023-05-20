import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 270px;
  height: 254px;
  box-shadow: 0 4px 12px 0px rgba(31, 38, 135, 0.37);

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: ease-in 0.4s;
`;
Wrapper.Img = styled.img`
  margin-bottom: 18px;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #22253b;
  width: 166px;
  margin: 0 auto;
`;
Wrapper.Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  width: 200px;
  text-align: center;
  color: #22253b;
  margin-top: 10px;
`;
export { Wrapper };
