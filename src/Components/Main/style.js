import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  background: url();
`;
Wrapper.Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
Wrapper.Text = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 70px;
  color: #000000;
`;
Wrapper.Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.Video = styled.img`
  width: 80%;
  height: auto;
`;
export { Wrapper };
