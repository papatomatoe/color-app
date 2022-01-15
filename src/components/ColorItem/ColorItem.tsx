import * as React from "react";
import Rating from "components/Rating";
import styles from "./ColorItem.module.css";
import { IColorItemProps } from "./types";
import { useRating } from "hooks/useRating";

const ColorItem: React.FC<IColorItemProps> = ({
	id,
	hex,
	rating,
	onDelete,
}) => {
	const {
		hoverHandler,
		leaveHandler,
		ratingHoverHandler,
		clickHandler,
		setIsSelected,
		ratingValue,
	} = useRating(id, rating);

	const deleteHandler = () => onDelete && onDelete(id);

	return (
		<div className={styles.item}>
			<div className={styles.colorBox} style={{ backgroundColor: hex }}>
				<h3 className={styles.colorTitle}>{hex}</h3>
			</div>
			<Rating
				rating={ratingValue}
				onClick={clickHandler}
				onHover={ratingHoverHandler}
				onLeave={leaveHandler}
				onItemHover={hoverHandler}
				setSelectedItem={setIsSelected}
			/>
			<button
				className={styles.deleteButton}
				type="button"
				aria-label={`delete ${id} color`}
				onClick={deleteHandler}
			>
				X
			</button>
		</div>
	);
};

export default ColorItem;
