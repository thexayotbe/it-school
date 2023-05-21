import React, { useState } from "react";
import { Wrapper } from "./style";
import Card from "./Card";
import { Span } from "../Generic/styles";
import choise from "../../assets/images/choise.jpg";
import study from "../../assets/images/study.jpg";
import project from "../../assets/images/project.jpg";
import certification from "../../assets/images/certification.jpg";
import apply from "../../assets/images/apply.jpg";
import work from "../../assets/images/work.jpg";
const Roadmap = () => {
  const [data] = useState([
    {
      title: "Ozingizga kerakli kurs tanlash",
      text: "Biz IT soxasini barcha yonalishlaridagi kurslarni tanlash imkonini beramiz",
      img: choise,
    },
    {
      title: "Ta`lim olish",
      text: "Ta`lim zamonaviy kompyuterlar bilan ta`minlangan xonalarda maxoratli ustozlar tomonidan beriladi",
      img: study,
    },
    {
      title: "Real loyixalar",
      text: "Kurslar davomida real loyixalar bilan ishlab orqali qoshimcha bilimlar olasiz",
      img: project,
    },
    {
      title: "Sertifikat bilan taqdirlash",
      text: "Kurs so'nggida talabaning o'zlashtirish ko'rsatkichlari e'tiborga olingan holda sertifikat va diplom beriladi.",
      img: certification,
    },
    {
      title: "Ishga kirish",
      text: "Kurslarni muvaffaqiyatli tamomlagan talabalar oz yonalishlari va darajalari mos ishga kirish imkoniga ega boladilar.",
      img: apply,
    },
    {
      title: "Karyerangizni boshlang",
      text: "Biz bilan kurslarni muvaffaqiyatli tamomlang va orzu qilgan ish o'rningiz egasiga aylaning.",
      img: work,
    },
  ]);

  return (
    <Wrapper>
      <Wrapper.Title>
        <Span>Ta`lim</Span> Tizimi
      </Wrapper.Title>
      <Wrapper.Items>
        <Wrapper.Sides>
          {data.map(
            (value, index) =>
              index % 2 === 0 && <Card {...value} index={index} />
          )}
        </Wrapper.Sides>
        <Wrapper.Line />
        <Wrapper.Sides left>
          {data.map(
            (value, index) =>
              index % 2 === 1 && <Card {...value} index={index} />
          )}
        </Wrapper.Sides>
      </Wrapper.Items>
    </Wrapper>
  );
};

export default Roadmap;
