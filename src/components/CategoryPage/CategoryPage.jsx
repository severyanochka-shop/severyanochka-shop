import React, { useEffect, useState } from "react";
import { Container } from "../../layout/Container/Container";
import { GridWrapper } from "../../layout/GridWrapper/GridWrapper";
import { Button } from "../../ui/Button/Button";
import { InputRange } from "../../ui/InputRange/InputRange";
import { Toggle } from "../../ui/Toggle/Toggle";
import s from "./CategoryPage.module.scss";
import { useDispatch } from "react-redux";
import { burgerSlice } from "../../store/reducers/BurgerSlice";
import { useSelector } from "react-redux";
import { filterCategorySlice } from "../../store/reducers/FilterCategorySlice";
import clsx from "clsx";
import { FilterButton } from "./FilterButton/FilterButton";
import { Select } from "../../ui/Select/Select";
import { useCategory } from "../../api/hooks/useCategory";
import { Pagination } from "../../ui/Pagination/Pagination";
import { paginationSlice } from "../../store/reducers/PaginationSlice";

export const CategoryPage = ({ categorySlug, subcategories, minPrice, maxPrice }) => {
  const dispatch = useDispatch();
  const { getBurger } = burgerSlice.actions;
  const burger = useSelector((state) => state.burgerReducer.burgerHide);

  const pagination = useSelector((state) => state.paginationReducer);
  const { setOffset } = paginationSlice.actions;

  const filterCategory = useSelector((state) => state.filterCategoryReducer);
  const { setAvailability, setSubcategoryId, deleteFilterCategory } = filterCategorySlice.actions;

  const [burgerHide, setBurgerHide] = useState(false);
  const [size, setSize] = useState(0);

  const options = [
    { value: "asc", label: "По возрастанию" },
    { value: "desc", label: "По убыванию" },
  ];

  const [args, setArgs] = useState({});

  const { category, errorCategory, isLoadingCategory } = useCategory(categorySlug, {
    ...args,
    productsLimit: 22,
    productsOffset: pagination.page * pagination.limit,
  });

  const handlerOffset = () => {
    dispatch(setOffset());
  };

  const deleteFilters = () => {
    setArgs({});
    dispatch(deleteFilterCategory());
  };

  const deletePriceRange = () => {
    setArgs({
      ...args,
      productsMinPrice: category.productsTotalMinPrice,
      productsMaxPrice: category.productsTotalMaxPrice,
    });
  };

  console.log(category);

  const handlerInStock = () => {
    dispatch(setAvailability());
  };

  const getCountFilter = () => {
    let count = 0;
    for (let keys of Object.keys(category.filter))
      if (
        keys === "productsMinPrice" ||
        keys === "productsMaxPrice" ||
        keys === "subcategoryId" ||
        keys === "productsFilterInStock"
      )
        count++;
    return count;
  };

  const applyFilter = () => {
    let tempArgs = {};
    if (filterCategory.productsMinPrice > category.productsTotalMinPrice)
      tempArgs = { ...args, productsMinPrice: filterCategory.productsMinPrice };
    if (filterCategory.productsMaxPrice < category.productsTotalMaxPrice)
      tempArgs = { ...args, productsMaxPrice: filterCategory.productsMaxPrice };
    if (filterCategory.subcategoryId)
      tempArgs = { ...tempArgs, subcategoryId: filterCategory.subcategoryId };
    if (filterCategory.availability)
      tempArgs = { ...tempArgs, productsFilterInStock: filterCategory.availability };
    setArgs({ ...args, ...tempArgs });
  };

  const handlerSubcategory = (subcategoryId) => {
    dispatch(setSubcategoryId(subcategoryId));
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 913) setSize(914);
    if (window.innerWidth < 913) setSize(0);
  });

  useEffect(() => {
    dispatch(getBurger(false));
    setBurgerHide(false);
  }, [size]);

  useEffect(() => {
    if (!burger) setBurgerHide(false);
  }, [burger]);

  const handler = () => {
    setBurgerHide(!burgerHide);
    dispatch(getBurger(false));
  };

  const buttonHandler = () => {
    setBurgerHide(true);
    dispatch(getBurger());
  };

  burgerHide
    ? document.body.setAttribute("style", "position: fixed; overflow-y: scroll;")
    : document.body.setAttribute("style", "overflow: visible; position: static;");

  return (
    <>
      <Container>
        <div className={burgerHide ? s.popUp : ""} onClick={() => handler()}></div>
        <div className={s.category_page}>
          <div className={s.filter}>
            <div className={s.button_filter}>
              <p className={s.text_filter}>Фильтр</p>
            </div>

            <Button
              medium
              background="green"
              className={s.button_filter_media}
              handler={buttonHandler}
            >
              Фильтр
            </Button>

            <div className={s.filter_none}>
              {!!category && (
                <InputRange
                  min={category.productsTotalMinPrice}
                  max={category.productsTotalMaxPrice}
                />
              )}
              <div className={s.list_block}>
                <ul className={s.ul_subcategory}>
                  {subcategories.map((el) => (
                    <li
                      key={el.id}
                      className={clsx(s.li_subcategory, {
                        [s.li_subcategory_active]: el.id === filterCategory.subcategoryId,
                      })}
                      onClick={() => handlerSubcategory(el.id)}
                    >
                      {el.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.stock}>
                <Toggle M handler={handlerInStock} checked={filterCategory.availability} />
                <p>В наличии</p>
              </div>
              <Button small background="orange" className={s.btn_apply} handler={applyFilter}>
                Применить
              </Button>
            </div>
          </div>
          <div className={s.filter_wrapper}>
            <div className={s.filter_buttons}>
              {!!category && !!getCountFilter() && (
                <div className={s.deletebtn_block}>
                  <FilterButton
                    color="green"
                    text={`Фильтр ${getCountFilter()}`}
                    onClick={deleteFilters}
                  />
                  {(filterCategory.productsMinPrice !== category.productsTotalMinPrice ||
                    filterCategory.productsMaxPrice !== category.productsTotalMaxPrice) && (
                    <FilterButton
                      color="green"
                      text={`Цена от ${args.productsMinPrice} до ${args.productsMaxPrice}`}
                      onClick={deletePriceRange}
                    />
                  )}
                  <FilterButton color="gray" text="Очистить фильтры" onClick={deleteFilters} />
                </div>
              )}
              <div className={s.select_wrapper}>
                <Select options={options} />
              </div>
            </div>
            {!!category && <GridWrapper data={category.products} />}
            <Button large background="gray" className={s.btn_show} handler={handlerOffset}>
              Показать ещё
            </Button>
            {!!category && (
              <Pagination
                count={Math.ceil(category.productsTotalCount / category.filter.productsLimit)}
              />
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
