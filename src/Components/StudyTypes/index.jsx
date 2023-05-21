import React, { useState } from "react";
import { Wrapper } from "./style";
import { FieldTimeOutlined } from "@ant-design/icons";
import ordinary from "../../assets/images/ord.jpg";
import intensive from "../../assets/images/int.jpg";
const StudyTypes = () => {
  const [hover, setHover] = useState({ status: false, id: 0 });
  return (
    <Wrapper>
      <Wrapper.Card
        onMouseEnter={() => setHover({ status: true, id: 1 })}
        onMouseLeave={() => setHover({ status: false, id: 1 })}>
        {hover.status && hover.id === 1 ? (
          <>
            <Wrapper.ExtraText>
              O'z tezligingiz va jadvalingiz bo'yicha o'rganishda oldinga
              siljsangiz, yakuniy nuqtada katta muvaffaqiyatga olib keladi.
              O'zingizning tezligingiz bo'yicha o'rganish sizga materiallarni
              qachon va qanday o'rganishingizni hal qilish uchun
              moslashuvchanlikni beradi. Siz o'zingizning shaxsiy
              ehtiyojlaringiz va sharoitlaringiz uchun mashg'ulotingizni
              moslashtirishingiz mumkin.
            </Wrapper.ExtraText>
          </>
        ) : (
          <>
            <FieldTimeOutlined style={{ fontSize: "35px", color: "#59e4a8" }} />
            <Wrapper.Title>Odatiy ta`lim</Wrapper.Title>
            <Wrapper.Text>
              Muvaffaqiyatli finalga erishish uchun siz o'zingizning o'qish
              tezligingiz va jadvalingizni belgilaysiz.
            </Wrapper.Text>
          </>
        )}
      </Wrapper.Card>
      <Wrapper.Card
        onMouseEnter={() => setHover({ status: true, id: 2 })}
        onMouseLeave={() => setHover({ status: false, id: 2 })}>
        {hover.status && hover.id === 2 ? (
          <>
            <Wrapper.ExtraText>
              Sizga har kuni o'rganishga ko'p vaqt ajratish imkoniyatini berib,
              intensiv o'quv dasturi sizga o'rganayotgan mavzuga chuqurroq kirib
              borish imkonini beradi. Siz materiallarni batafsil o'rganish,
              chuqurroq tadqiqotlar olib borish va murakkab tushunchalarni
              tushunish imkoniyatiga ega bo'lasiz va o'rganilayotgan materialni
              yaxshiroq eslab qolasiz
            </Wrapper.ExtraText>
          </>
        ) : (
          <>
            <FieldTimeOutlined style={{ fontSize: "35px", color: "#59e4a8" }} />
            <Wrapper.Title>Intensiv ta`lim</Wrapper.Title>
            <Wrapper.Text>
              Tez natijalarga erishish uchun sizni har kuni 2 soat mashq
              qilishga taklif qiluvchi intensiv o'quv dasturimizni ko'rib
              chiqing.
            </Wrapper.Text>
          </>
        )}
      </Wrapper.Card>
    </Wrapper>
  );
};

export default StudyTypes;
