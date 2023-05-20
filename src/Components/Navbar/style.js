import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .active {
    color: #59e4a8;
  }
`;
Wrapper.Logo = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 32.8px;
  line-height: 41px;
  color: #000000;
`;

Wrapper.Links = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
`;
Wrapper.Link = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: rgba(64, 64, 64, 0.8);
  cursor: pointer;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #59e4a8;
    transition: ease-in 0.2s;
  }
  &:hover {
    color: #59e4a8;
    &:before {
      width: 100%;
    }
  }
`;

export { Wrapper };
