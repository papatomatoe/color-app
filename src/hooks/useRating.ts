import * as React from "react";
import { useColors } from "context";
export const useRating = (id: number, rating: number) => {
	const { setRating } = useColors();
	const [tempRatingValue, setTempRatingValue] = React.useState<number>(0);
	const [ratingValue, setRatingValue] = React.useState<number>(rating);
	const [isUseTempRating, setIsUseTempRating] = React.useState<boolean>(false);

	const hoverHandler = (value: number) => setTempRatingValue(value);

	const leaveHandler = () => {
		setTempRatingValue(ratingValue);
		setIsUseTempRating(false);
	};

	const clickHandler = (value: number) => {
		setRating(id, value);
		setRatingValue(value);
	};

	const ratingHoverHandler = () => setIsUseTempRating(true);

	const setIsSelected = (index: number) =>
		isUseTempRating ? index + 1 <= tempRatingValue : index + 1 <= ratingValue;

	return {
		hoverHandler,
		leaveHandler,
		ratingHoverHandler,
		clickHandler,
		setIsSelected,
		ratingValue,
	};
};
