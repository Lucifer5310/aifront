import React from "react";
import styles from "../styles/Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "danger" | "ghost";
  size?: "sm" | "md";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].join(" ");
  return <button className={classes} {...props} />;
};

export default Button;
