import { Input } from "antd";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  margin: 40px 0;
  gap: 80px;
`;
Wrapper.Image = styled.img`
  flex: 1;
`;
Wrapper.Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
Wrapper.Label = styled.label`
  width: 400px;
  text-align: left;
  font-size: 18px;
  margin: 30px 0 10px 0;
`;
Wrapper.Input = styled(Input)`
  width: 400px;
  height: 45px;
  border-radius: 4px;
  border: 1px solid #59e4a8;
  padding-left: 15px;
  font-size: 18px;
  &:focus-visible {
    border: 1px solid #59e4a8;
  }
`;
Wrapper.Text = styled(Input.TextArea)`
  width: 400px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #59e4a8;
  padding-left: 15px;
  font-size: 18px;
`;
Wrapper.Button = styled.input`
  width: 400px;
  height: 50px;
  background-color: #59e4a8;
  margin: 20px 0;
  border: 1px solid #59e4a8;
  border-radius: 8px;
  color: #fff;
  font-size: 25px;
  transition: ease-in-out 0.3s;
  &:hover {
    background-color: #fff;
    color: #59e4a8;
    border: 1px solid #59e4a8;
  }
`;
