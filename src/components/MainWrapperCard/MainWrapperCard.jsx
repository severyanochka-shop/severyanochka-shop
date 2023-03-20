import React from "react";
import s from "./MainWrapperCard.module.scss";
import { CardCatalog } from "../../components/CardCatalog/CardCatalog";
import { Container } from "../../layout/Container/Container";
import { data } from "./data";
import { Link } from "react-router-dom";

export const MainWrapperCard = ({ title }) => {
  const links = {
    Акции: {
      route: "/stocks",
      title: "Все акции",
    },
    Новинки: {
      route: "/new_products",
      title: "Все новинки",
    },
    "Покупали раньше": { route: "/bought_before", title: "Все покупки" },
  };
  return (
    <Container>
      <div className={s.title_wrapper}>
        <h2 className={s.title}>{title}</h2>
        <Link className={s.link} to={links[title].route}>
          {links[title].title}
        </Link>
      </div>

      <div className={s.wrapper}>
        {data.slice(0, 4).map((el, i) => (
          <CardCatalog
            key={i}
            product_img={el.image_small}
            price_usual={el.priceRegular}
            product_describe={el.name}
            discount={el.priceWithCard}
          ></CardCatalog>
        ))}
      </div>
    </Container>
  );
};
