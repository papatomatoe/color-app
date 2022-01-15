import * as React from "react";
import colorsData from "mock/colorData.json";

interface IContextProps {
	id: number;
	hex: string;
	rating: number;
}

interface IStata {
	colors: Array<IContextProps>;
	deleteColor: (id: number) => void;
	addColor: (value: { title: string; hex: string }) => void;
	setRating: (id: number, rating: number) => void;
}

const initialState: IStata = {
	colors: [],
	deleteColor: null,
	addColor: null,
	setRating: null,
};

const AppContext = React.createContext(initialState);

export const ContextWrapper: React.FC = ({ children }) => {
	const [colors, setColors] = React.useState<IContextProps[]>(colorsData);

	const deleteColor = (colorId: number) => {
		const newColors = colors.filter(({ id }) => id !== colorId);
		setColors(newColors);
	};

	const addColor = (value: { title: string; hex: string }) => {
		const newColor = { id: 999, hex: value.hex, rating: 0 };
		const newColors = [...colors, newColor];
		setColors(newColors);
	};

	const setRating = (colorId: number, rating: number) => {
		const currentColorIndex = colors.findIndex((color) => color.id === colorId);

		const currentColor = { ...colors[currentColorIndex] };

		currentColor.rating = rating;

		const newColors = [...colors];
		newColors[currentColorIndex] = currentColor;

		setColors(newColors);
	};

	return (
		<AppContext.Provider value={{ colors, deleteColor, addColor, setRating }}>
			{children}
		</AppContext.Provider>
	);
};

export const useColors = () => React.useContext(AppContext);
