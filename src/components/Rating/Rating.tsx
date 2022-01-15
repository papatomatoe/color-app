import * as React from "react";
import RatingItem from "components/RatingItem";
import styles from "./Rating.module.css";
import { IRatingProps } from "./types";
import { MAX_RATING_COUNT } from "./store";

const Rating: React.FC<IRatingProps> = ({
	rating = 0,
	onHover,
	onLeave,
	onItemHover,
	onClick,
	setSelectedItem,
}) => {
	const hoverHandler = () => onHover && onHover();
	const leaveHandler = () => onLeave && onLeave();
	const clickHandler = (value: number) => onClick && onClick(value);
	const itemHoverHandler = (id: number) => onItemHover && onItemHover(id);
	const isSelect = (index: number) =>
		setSelectedItem ? setSelectedItem(index) : index + 1 <= rating;

	return (
		<div className={styles.colorRating}>
			<ul
				className={styles.ratingList}
				onMouseEnter={hoverHandler}
				onMouseLeave={leaveHandler}
			>
				{[...Array(MAX_RATING_COUNT)].map((_, index) => (
					<li key={index}>
						<RatingItem
							id={index + 1}
							isSelect={isSelect(index)}
							onClick={clickHandler}
							onMouseEnter={itemHoverHandler}
						/>
					</li>
				))}
			</ul>
			<p className={styles.ratingText}>
				{rating} of {MAX_RATING_COUNT}
			</p>
		</div>
	);
};

export default Rating;
