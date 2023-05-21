import { styled } from "styled-components";

const Wrapper = styled.div`
  margin: 70px 0;
`;
Wrapper.Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
Wrapper.Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-transform: capitalize;
  color: #333333;
  margin-bottom: 40px;
`;
Wrapper.Sides = styled.div`
  display: flex;
  flex-direction: column;
  gap: 300px;
  padding-top: ${({ left }) => left && "300px"};
`;
Wrapper.Line = styled.div`
  width: 4px;
  height: 1800px;
  background-color: #59e4a8;
`;
export { Wrapper };
