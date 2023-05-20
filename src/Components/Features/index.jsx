import React, { useState } from "react";
import { Wrapper } from "./style";
import { Span } from "../Generic/styles";
import f1 from "../../assets/icons/f1.svg";
import f2 from "../../assets/icons/f2.svg";
import f3 from "../../assets/icons/f3.svg";
import f4 from "../../assets/icons/f4.svg";
import f5 from "../../assets/icons/f5.svg";
import f6 from "../../assets/icons/f6.svg";
import f7 from "../../assets/icons/f7.svg";
import Card from "./Card";
const Features = () => {
  const [data, setData] = useState([
    {
      title: "Kop Amaliyot",
      text: "100 dan ortiq mustaqil vazifalar va to'liq yirik loyihalar",
      img: f1,
    },
    {
      title: "Zamonaviy o'qitish usullari",
      text: "Spiral o'rganish:biz asta-sekin materialga sho`ng`iymiz, navbatma-navbat orgatamiz",
      img: f2,
    },
    {
      title: "Oddiy va tushunarli taqdimot",
      text: "Mavhum atamalar o'rniga - haqiqiy hayotiy misollar",
      img: f3,
    },
    {
      title: "Moslashuvchan dars jadvali",
      text: "O'zingizga qulay vaqtda istalgan vaqtda o'rganing",
      img: f4,
    },
    {
      title: "Tajribali dasturchilar bilan bevosita muloqot",
      text: "Savollar bering va kerakli maslaxatlar oling ",
      img: f5,
    },
    {
      title: "Xar xil to`lov usulari",
      text: "Faqat hozir o'rganayotgan materialingiz uchun to'lang,va bir vaqtning o'zida butun kurs uchun emas",
      img: f6,
    },
    {
      title: "Tez va oson qaytish",
      text: "Agar siz o'qish haqidagi fikringizni o'zgartirsangiz  biz 3 ish kuni ichida pulni qaytarib beramiz",
      img: f7,
    },
  ]);
  return (
    <Wrapper>
      <Wrapper.Title>
        {" "}
        <Span>Uchqorg`on IT School</Span> da oqish afzaliklari
      </Wrapper.Title>
      <Wrapper.Items>
        {data.map((value, index) => (
          <Card {...value} />
        ))}
      </Wrapper.Items>
    </Wrapper>
  );
};

export default Features;
