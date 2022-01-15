import * as React from "react";
import cn from "classnames";
import styles from "./RatingItem.module.css";
import { IRatingItemProps } from "./types";
const RatingItem: React.FC<IRatingItemProps> = ({
	id,
	isSelect,
	onClick,
	onMouseEnter,
}) => {
	const clickHandler = (id: number) => onClick && onClick(id);
	const hoverHandler = (id: number) => onMouseEnter && onMouseEnter(id);
	return (
		<button
			type="button"
			onClick={() => clickHandler(id)}
			onMouseEnter={() => hoverHandler(id)}
			className={cn(styles.ratingButton, {
				[styles.selected]: isSelect,
			})}
		></button>
	);
};

export default RatingItem;
