import ReactSelect, { components } from "react-select";
import dropdown from "./images/dropdown.svg";
import cross from "./images/cross.svg";
import "./Select.scss";

const orderOptions = (values) => {
  return values.filter((v) => v.isFixed).concat(values.filter((v) => !v.isFixed));
};

export const Select = ({
  options, value, onChange: baseOnChange, isMulti, label, disabled, className, ...restProps
}) => {
  const onChange = (newValue, actionMeta) => {
    if (isMulti) {
      switch (actionMeta.action) {
        case "remove-value":
        case "pop-value":
          if (actionMeta.removedValue.isFixed) {
            return;
          }
          break;
        case "clear":
          newValue = options.filter((v) => v.isFixed);
          break;
        default:
          break;
      }

      baseOnChange(orderOptions(newValue));
    } else baseOnChange(newValue);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={dropdown} alt={"⇓"} />
      </components.DropdownIndicator>
    );
  };

  const MultiValueRemove = (props) => {
    return (
      <components.MultiValueRemove {...props}>
        <img src={cross} alt="X" />
      </components.MultiValueRemove>
    );
  };

  const ControlComponent = (props) => (
    <div>
      <p className="control-styles">{label}</p>
      <components.Control {...props} />
    </div>
  );

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <p className="no-option-message">-</p>
      </components.NoOptionsMessage>
    );
  };

  return (
    <ReactSelect
      {...restProps}
      value={value}
      isMulti={isMulti}
      onChange={onChange}
      options={options}
      className={className}
      classNamePrefix="custom-select"
      components={{
        DropdownIndicator,
        MultiValueRemove,
        Control: ControlComponent,
        NoOptionsMessage,
      }}
      isDisabled={disabled}
      isClearable={false}
    />
  );
};
