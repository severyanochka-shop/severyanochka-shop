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
      return sum + el.score / [...review].length;
    }, 0),
  );

  const repet = (num) => {
    let quantity = review.filter((el) => {
      return el.score === num;
    }).length;
    return quantity;
  };

  return (
    <div className={s.reviews}>
      <div className={s.reviews__all}>
        <div className={s.item1}>
          <div className={s.total_score}>
            <div className={s.total_score__stars}>
              <Stars rating={totalScore} />
            </div>
            <p className={s.total_score__num}>{totalScore ? totalScore : 0} из 5</p>
          </div>
          {/* Блок со всеми оценками */}
          <div className={s.allstars}>
            {[5, 4, 3, 2, 1].map((el) => (
              <>
                <span className={s.span}>{el}</span>
                <Stars rating={el} />
                <span id="point">{repet(el)}</span>
              </>
            ))}
          </div>
        </div>
        <div className={s.rewievbox}>
          <div className={s.item2}>
            <ReviewItem name={"Татьяна"} rating={4} date={"22.02.2022"} text={"приятный вкус"} />
            <ReviewItem
              name={"Мария"}
              rating={5}
              date={"22.02.2022"}
              text={"Масло среднее, есть вкуснее"}
            />
            <ReviewItem
              name={"Алексей"}
              rating={1}
              date={"22.02.2022"}
              text={
                "Покупали в том числе в этом весе. Масло по вкусу и органолептическим свойствам совершенно не похоже на натуральное. Упаковка выглядит как напечатанная на дешёвом принтере. На наш взгляд продукт является подделкой или контрафактной продукцией. Просим разобраться."
              }
            />
            {review.map((r) => {
              return (
                <div className={s.review} key={r.id}>
                  <div className={s.review__mix}>
                    <img className={s.review__pic} src={user} alt="user" />
                    <p className={s.review__name}>{r.name}</p>
                  </div>
                  <div className={s.star__mix}>
                    <div className={s.review__stars}>
                      <Stars rating={r.score} />
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
