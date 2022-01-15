export interface IColorItemProps {
	id: number;
	hex: string;
	rating: number;
	onDelete?: (id: number) => void;
}
