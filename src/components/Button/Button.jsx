import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";
const Button = (props) => {
  const { type, variant, label, handleClick, additionalClasses } = props;
  return (
    <>
      <button
        type={type ?? "button"}
        className={classNames({
          "u-button": true,
          "u-button-primary": variant === "primary",
          "u-button-success": variant === "success",
          [additionalClasses] : !!additionalClasses
        })}
        onClick={(event) => handleClick(event)}
      >
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  additionalClasses: PropTypes.string,
  variant: PropTypes.oneOf(["success", "primary"]),
  handleClick: PropTypes.func.isRequired,
};

export default Button;
