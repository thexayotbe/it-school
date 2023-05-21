import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 1100px;
  margin-top: 40px;
`;
Wrapper.Header = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;
Wrapper.Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-transform: capitalize;
  color: #333333;
`;
Wrapper.Text = styled.p``;
Wrapper.Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 40px;
`;
export { Wrapper };
