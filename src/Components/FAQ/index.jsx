import React, { useState } from "react";
import { Wrapper } from "./style";
import Card from "./Card";
const FAQ = () => {
  const [active, setActive] = useState();
  const openCard = (order) => {
    if (order === active) setActive();
    else setActive(order);
  };
  return (
    <Wrapper>
      <Card onClick={() => openCard(1)} active={active === 1} />
      <Card onClick={() => openCard(2)} active={active === 2} />
      <Card onClick={() => openCard(3)} active={active === 3} />
      <Card onClick={() => openCard(4)} active={active === 4} />
    </Wrapper>
  );
};

export default FAQ;
