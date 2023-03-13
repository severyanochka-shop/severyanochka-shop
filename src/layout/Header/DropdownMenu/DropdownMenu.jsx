import React from "react";
import { Link } from "react-router-dom";
import s from "./DropdownMenu.module.scss";
import { Container } from "../../Container/Container";
import { data } from "../data/goods.js";

export const DropdownMenu = () => {
  return (
    <div className={s.menu}>
      <Container>
        <ul className={s.list}>
          {data.map((el) => (
            <li className={s.list__item} key={el.id}>
              <Link to="/" className={s.list__link}>
                {el.name}
              </Link>
            </li>
          ))}
          {/* <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Хлеб
            </Link>
          </li>
          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Фрукты и овощи
            </Link>
          </li>
          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Замороженные продукты
            </Link>
          </li>

          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Напитки
            </Link>
          </li>
          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Кондитерские изделия
            </Link>
          </li>
          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Чай, кофе
            </Link>
          </li>

          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Бакалея
            </Link>
          </li>
          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Здоровое питание
            </Link>
          </li>
          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Зоотовары
            </Link>
          </li>

          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Мясо, птица, колбаса
            </Link>
          </li>

          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Детское питание
            </Link>
          </li>
          <li className={s.list__item}>
            <Link to="/" className={s.list__link}>
              Непродовольственные товары
            </Link>
          </li> */}
        </ul>
      </Container>
    </div>
  );
};

// export const DropdownMenu = () => {
//   return (
//     <div className={s.menu}>
//       <Container>
//         <div className={s.wrapper}>
//           <div className={s.half}>
//             <ul className={s.list}>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Молоко, сыр, яйцо
//                 </Link>
//               </li>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Хлеб
//                 </Link>
//               </li>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Фрукты и овощи
//                 </Link>
//               </li>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Замороженные продукты
//                 </Link>
//               </li>
//             </ul>
//             <ul className={s.list}>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Напитки
//                 </Link>
//               </li>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Кондитерские изделия
//                 </Link>
//               </li>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Чай, кофе
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className={s.half}>
//             <ul className={s.list}>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Бакалея
//                 </Link>
//               </li>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Здоровое питание
//                 </Link>
//               </li>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Зоотовары
//                 </Link>
//               </li>
//             </ul>
//             <ul className={s.list}>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Непродовольственные товары
//                 </Link>
//               </li>

//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Детское питание
//                 </Link>
//               </li>
//               <li className={s.list__item}>
//                 <Link to="/" className={s.list__link}>
//                   Мясо, птица, колбаса
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };
