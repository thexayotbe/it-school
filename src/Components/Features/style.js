import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  padding-bottom: 50px;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  width: 700px;
  margin: 0 auto;
`;
Wrapper.Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 35px;
`;
export { Wrapper };
