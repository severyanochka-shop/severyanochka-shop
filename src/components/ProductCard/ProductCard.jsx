import React from "react";
import s from "./ProductCard.module.scss";
import { Stars } from "../Reviews/Starts/Stars";
import clsx from "clsx";
import info from "./assets/info.svg";
import { SimilarProduct } from "../SimilarProduct/SimilarProduct";
import { Discount } from "../../ui/Discount/Discount";
import { useCategory } from "../../api/hooks/useCategory";
import { Link, useParams } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const params = useParams();
  let end = "ов";
  // редактирует окончание в зависимости от кол-ва отзывов
  if (product.reviewsCount) {
    if (product.reviewsCount === 1) end = "";
    if (product.reviewsCount > 1 && product.reviewsCount < 5) end = "a";
    if (product.reviewsCount > 5) end = "ов";
    if (product.reviewsCount > 20) {
      let num = product.reviewsCount % 10;
      if (num === 1) end = "";
      if (num > 1 && num < 5) end = "a";
      if (num > 5) end = "ов";
    }
  }

  const {
    category: subcategory,
    errorCategory: errorSubcategory,
    isLoadingCategory: isLoadingSubcategory,
  } = useCategory(product.category.slug, {
    productsLimit: 6,
    subcategoryId: product.subcategoryId,
  });

  return (
    <div className={s.product}>
      <div className={s.product__nav}>
        <p className={s.art}>арт. 371431</p>
        <div className={s.nav__stars}>
          <Stars rating={product.averageRating} />
          <p className={s.nav__stars__rewiew}>
            {!!product.reviewsCount && `${product.reviewsCount} отзыв${end}`}
          </p>
        </div>
        <button className={clsx(s.btn_favorites, s.btn_favorites_share)}>Поделиться</button>
        <button className={clsx(s.btn_favorites, s.btn_favorites_heart)}>В избранное</button>
      </div>
      <div className={s.wrapper}>
        <div className={s.wrapper__slider}>
          {[
            ...product.images,
            ...product.images,
            ...product.images,
            ...product.images,
            ...product.images,
          ].map((el, i) => {
            return (
              <div key={i} className={s.slider__wrapper}>
                <img className={s.slider__image} key={el.id} src={el.thumb} alt={`Product ${i}`} />
              </div>
            );
          })}
        </div>
        <div className={s.wrapper__product}>
          <img className={s.product__image} src={product.images[0].full} alt="Product" />
          {!!product.discountIsActive && (
            <Discount
              orange
              large
              className={s.product__discount}
              text={`-${product.discountPercent}%`}
            />
          )}
        </div>
        <div className={s.wrapper__description}>
          <div className={s.description__price_wrapper}>
            <div className={s.price__wrapper}>
              <p className={s.price__price_old}>{product.priceRegular} ₽</p>
              <p className={s.price__price_new}>
                {product.discountIsActive ? product.discountedPrice : product.priceWithCard} ₽
              </p>
            </div>

            <div className={s.text__wrapper}>
              <p className={s.text}>Обычная цена</p>
              <div className={s.text__info_wrapper}>
                <p className={s.text}>С картой Северяночки</p>
                <img className={s.text__image} src={info} alt="!" />
              </div>
            </div>
          </div>
          <button className={s.btn_basket}>
            <p className={s.btn_basket__text}>В корзину</p>
          </button>
          <p className={s.points}>
            Вы получаете <span className={s.points__bold}> 10 бонусов</span>
          </p>
          <p className={s.notice}>Уведомить о снижении цены</p>
          <div className={s.description__information}>
            <div className={s.information__wrapper}>
              <p className={s.information__left}>Бренд</p>
              <p className={s.information__right}>
                {product.information.find((el) => el.name === "Бренд").value}
              </p>
            </div>
            <div className={s.information__wrapper}>
              <p className={s.information__left}>Страна производителя</p>
              <p className={s.information__right}>
                {product.information.find((el) => el.name === "Страна производства").value}
              </p>
            </div>
            <div className={s.information__wrapper}>
              <p className={s.information__left}>Упаковка</p>
              <p className={s.information__right}>
                {product.step} {product.unitsOfMeasurement}
              </p>
            </div>
          </div>
        </div>
        <div className={s.wrapper__similar}>
          <p className={s.similar__title}>Похожие</p>
          <div className={s.similar__wrapper}>
            {!!subcategory &&
              subcategory.products.map((el, i) => {
                return (
                  <Link className={s.link} to={`/category/${params.category}/${el.slug}`}>
                    <SimilarProduct
                      key={i}
                      img={el.images[0].small}
                      price={el.discountIsActive ? el.discountedPrice : el.priceWithCard}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
