import styles from "./styles.module.css";

type ButtonProps = {
  text: string;
  isGray?: boolean;
  className?: string;
  width?: "small" | "medium" | "large";
  height?: string;
};

function Button({ text, isGray = false, width = "medium" }: ButtonProps) {
  const widthClass = width ? styles[width] : "";
  const buttonClass = `${styles.btn} ${
    isGray ? styles.grayBG : ""
  } ${widthClass}`;
  return <button className={buttonClass}>{text}</button>;
}

export default Button;
