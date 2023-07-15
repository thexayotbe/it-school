import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 310px;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border: 1px solid #eaecf0;
  background: #fff;
`;
Wrapper.ImgSection = styled.div`
  width: 310px;
  height: 230px;
  background-color: ${({ isTeacher }) => (isTeacher ? "#a4d5f0" : "#adf1c0")};
`;
Wrapper.ProfileImg = styled.img``;
Wrapper.TextSide = styled.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;
Wrapper.Name = styled.h3`
  color: #282828;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;
Wrapper.Job = styled.p`
  color: #3e3e59;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

Wrapper.Description = styled.p`
  color: #5f6980;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
