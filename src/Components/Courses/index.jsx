import React, { useState } from "react";
import Card from "./Card";
import { Wrapper } from "./style";
import { Span } from "../Generic/styles/index";
import ks from "../../assets/images/ks.jpg";
import psh from "../../assets/images/psh.jpg";
import ka from "../../assets/images/ka.jpg";
import max from "../../assets/images/3d.jpg";
import web from "../../assets/images/web.jpg";
import py from "../../assets/images/py.jpg";
const Courses = () => {
  const [data, setData] = useState([
    {
      title: "Kompyuter Savodxonligi",
      text: "Word, Excel va PowerPoint kabi dasturlar bilan muamosiz ishlashni organing",
      rate: 5,
      time: 3,
      students: "1000+",
      img: ks,
    },
    {
      title: "Photoshop va kompyuter grafikasi",
      text: "Xar xil turdagi rasmlar bilan ishlashni va kreativ rasmlar yaratishni organing",
      rate: 5,
      time: 1,
      students: "700+",
      img: psh,
    },
    {
      title: "Kompyuter administratorligi",
      text: "Kompyuterda kelib chiqadigon xar xil muamolani bartaraf etishni organing",
      rate: 5,
      time: 1,
      students: "700+",
      img: ka,
    },
    {
      title: "3d-MAX, Interyer,Exterior",
      text: "Uylarni dizaynlarni va turli 3D modelarni yaratishni organing",
      rate: 5,
      time: 1,
      students: "100+",
      img: max,
    },
    {
      title: "Front-End programming",
      text: "Zamonaviy texnologiyalar yordamida Web-Saytlar yaratishni organing",
      rate: 5,
      time: 9,
      students: "400+",
      img: web,
    },
    {
      title: "Python backend  and Telegram bots",
      text: "Turli telegram botlar va turli dasturlarni yaratishni organing",
      rate: 5,
      time: 9,
      students: "400+",
      img: py,
    },
  ]);
  return (
    <Wrapper>
      <Wrapper.Header>
        <Wrapper.Title>
          Bizning <Span>kurslar</Span>
        </Wrapper.Title>
      </Wrapper.Header>
      <Wrapper.Items>
        {data.map((value) => (
          <Card {...value} />
        ))}
      </Wrapper.Items>
    </Wrapper>
  );
};

export default Courses;
