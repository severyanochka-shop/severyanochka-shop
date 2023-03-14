import React from "react";
import s from "./Paragraph.module.scss";

export const Paragraph = ({ post, text }) => {
  return (
    <div className={s.paragraph}>
      <p className={s.title}>{post}</p>
      <p className={s.text}>{text}</p>
    </div>
  );
};
