import React, { useRef, useState } from "react";
import { Wrapper } from "./style";
import emailjs from "@emailjs/browser";
import connect from "../../assets/images/connect.jpg";
import { notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const Connect = () => {
  const form = useRef();
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const getInfo = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const sendEmail = (e) => {
    if (loading) return;
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wd2b5wq",
        "template_r77ovxi",
        form.current,
        "BMyz1ks3YYvCujT-s"
      )
      .then(
        (result) => {
          notification.success({ message: "Email jonatildi" });
          setData({});
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          notification.error({ message: "Yana bir bor urinib koringi" });
        }
      );
  };

  return (
    <Wrapper>
      <Wrapper.Image src={connect} />
      <Wrapper.Form ref={form} onSubmit={sendEmail}>
        <Wrapper.Label>Ism: </Wrapper.Label>
        <Wrapper.Input
          type="text"
          name="user_name"
          value={data.user_name}
          onChange={getInfo}
          required
        />
        <Wrapper.Label>Email manzilingiz: </Wrapper.Label>
        <Wrapper.Input
          type="email"
          name="user_email"
          value={data.user_email}
          onChange={getInfo}
          required
        />
        <Wrapper.Label>Xabar: </Wrapper.Label>
        <Wrapper.Text name="message" value={data.message} onChange={getInfo} />
        <Wrapper.Button
          type="submit"
          value={loading ? "Jonatilmoqda..." : "Jonatish"}
        />
      </Wrapper.Form>
    </Wrapper>
  );
};

export default Connect;
// / <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
