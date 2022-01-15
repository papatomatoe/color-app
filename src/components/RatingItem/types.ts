export interface IRatingItemProps {
	id: number;
	isSelect: boolean;
	onClick?: (id: number) => void;
	onMouseEnter?: (id: number) => void;
}
