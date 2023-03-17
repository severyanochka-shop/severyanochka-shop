### Пример использования компонента Radio:

```jsx
// State нужен для понимания какой radio выбран, туда записывается value из инпута.
const [state, setState] = useState(null);

return (
  <>
    // Обычный набор из 3х радио баттанов
    <div>
      {" "}
      // checked сравнивает стейт со значением, которые вы передаете в пропс radioValue (так вы присваиваете
      нужное вам value). // в handler нужно передать setState функцию!
      <Radio checked={state === "1"} handler={setSalue} radioValue="1" radioName="s" S />
      <Radio checked={state === "2"} handler={setSalue} radioValue="2" radioName="s" S />
      <Radio checked={state === "3"} handler={setSalue} radioValue="3" radioName="s" S />
    </div>
    // Задизейбленные radio:
    <div>
      {" "}
      <Radio disabled checked={state === "1"} handler={setSalue} radioValue="1" radioName="xl" XL />
      <Radio disabled checked={state === "2"} handler={setSalue} radioValue="2" radioName="xl" XL />
      <Radio disabled checked={state === "3"} handler={setSalue} radioValue="3" radioName="xl" XL />
    </div>
  </>
);
```
