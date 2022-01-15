import * as React from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import { IButtonProps } from "./types";
const Button: React.FC<IButtonProps> = ({
	className,
	children,
	...buttonAttributes
}) => {
	return (
		<button className={cn(styles.button, className)} {...buttonAttributes}>
			{children}
		</button>
	);
};

export default Button;
