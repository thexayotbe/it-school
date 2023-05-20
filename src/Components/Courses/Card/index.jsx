import { Wrapper } from "./style";
import {
  StarOutlined,
  TeamOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
const Card = ({ title, text, img, rate, time, students }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={img} alt="" />
      <Wrapper.TextSection>
        <Wrapper.Title>{title}</Wrapper.Title>
        <Wrapper.Rate>
          <StarOutlined style={{ color: "#59e4a8", fontSize: "25px" }} />
          <Wrapper.InfoText>{rate}</Wrapper.InfoText>
        </Wrapper.Rate>
      </Wrapper.TextSection>
      <Wrapper.Text>{text}</Wrapper.Text>
      <Wrapper.Info>
        <ClockCircleOutlined style={{ color: "#59e4a8", fontSize: "20px" }} />
        <Wrapper.InfoText>{time} oy</Wrapper.InfoText>
        <TeamOutlined style={{ color: "#59e4a8", fontSize: "25px" }} />
        <Wrapper.InfoText>{students} o`quvchilar</Wrapper.InfoText>
      </Wrapper.Info>
    </Wrapper>
  );
};

export default Card;
