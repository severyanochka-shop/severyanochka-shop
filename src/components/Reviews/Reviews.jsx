import React, { useEffect, useState } from "react";
import s from "./Reviews.module.scss";
import user from "./Images/user.svg";
import { ReviewItem } from "./ReviewItem/ReviewItem";
import { AddReview } from "./AddReview/AddReview";
import { Stars } from "./Starts/Stars";

let saveReview = JSON.parse(localStorage.getItem("review")) ?? [];

export const Reviews = (props) => {
  // const {} = props;

  const [review, setReview] = useState(saveReview);

  useEffect(() => {
    localStorage.setItem("review", JSON.stringify(review));
  }, [review]);

  const totalScore = Math.round(
    review.reduce((sum, el) => {
      return sum + Number(el.score) / [...review].length;
    }, 0)
  ).toString();

  const fives = review.filter((el) => {
    return el.score === "5";
  }).length;

  const fours = review.filter((el) => {
    return el.score === "4";
  }).length;

  const triplets = review.filter((el) => {
    return el.score === "3";
  }).length;

  const deuces = review.filter((el) => {
    return el.score === "2";
  }).length;

  const units = review.filter((el) => {
    return el.score === "1";
  }).length;

  return (
    <div className={s.reviews}>
      <h2 className={s.title}>Отзывы</h2>
      <div className={s.reviews__all}>
        <div className={s.item1}>
          <div className={s.total_score}>
            <div className={s.total_score__stars}>
              <Stars type={totalScore} />
            </div>
            <p className={s.total_score__num}>{totalScore} из 5</p>
          </div>
          {/* Блок со всеми оценками */}
          <div className={s.allstars}>
            <span className={s.span}>5</span>
            <Stars type="5" />
            <span id="point">{fives}</span>
            <span className={s.span}>4</span>
            <Stars type="4" />
            <span id="point">{fours}</span>
            <span className={s.span}>3</span>
            <Stars type="3" />
            <span id="point">{triplets}</span>
            <span className={s.span}>2</span>
            <Stars type="2" />
            <span id="point">{deuces}</span>
            <span className={s.span}>1</span>
            <Stars type="1" />
            <span id="point">{units}</span>
          </div>
        </div>
        <div className={s.rewievbox}>
          <div className={s.item2}>
            <ReviewItem
              name={"Татьяна"}
              type={"4"}
              date={"22.02.2022"}
              text={"приятный вкус"}
            />
            <ReviewItem
              name={"Мария"}
              type={"5"}
              date={"22.02.2022"}
              text={"Масло среднее, есть вкуснее"}
            />
            <ReviewItem
              name={"Алексей"}
              type={"1"}
              date={"22.02.2022"}
              text={
                "Покупали в том числе в этом весе. Масло по вкусу и органолептическим свойствам совершенно не похоже на натуральное. Упаковка выглядит как напечатанная на дешёвом принтере. На наш взгляд продукт является подделкой или контрафактной продукцией. Просим разобраться."
              }
            />
            {review.map((r) => {
              return (
                <div className={s.review} key={r.id}>
                  <div style={{ display: "flex" }}>
                    <img className={s.review__pic} src={user} alt="user" />
                    <p className={s.review__name}>{r.name}</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className={s.review__stars}>
                      <Stars type={r.score} />
                    </div>
                    <p className={s.review__date}>{r.date}</p>
                  </div>
                  <p className={s.review__text}>{r.text}</p>
                </div>
              );
            })}
          </div>
          <AddReview review={review} setReview={setReview} />
        </div>
      </div>
    </div>
  );
};
