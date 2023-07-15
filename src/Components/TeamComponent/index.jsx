import { Span, Title } from "../Generic/styles";
import Card from "./Card";
import { Wrapper } from "./style";
import { team } from "../../mock/data";
const TeamComponent = () => {
  return (
    <Wrapper>
      <Title>
        Bizning Jamoa <Span>Ustozlar:</Span>
      </Title>
      <Wrapper.CardsWrapper>
        {team.map((value, index) => {
          return value.isTeacher && <Card {...value} key={index} />;
        })}
      </Wrapper.CardsWrapper>
      <Title>
        Bizning Jamoa <Span>Shogirtlar:</Span>
      </Title>
      <Wrapper.CardsWrapper>
        {team.map((value, index) => {
          return !value.isTeacher && <Card {...value} key={index} />;
        })}
      </Wrapper.CardsWrapper>
    </Wrapper>
  );
};

export default TeamComponent;
