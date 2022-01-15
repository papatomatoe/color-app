export interface IRatingProps {
	rating?: number;
	onHover?: () => void;
	onLeave?: () => void;
	onItemHover?: (id: number) => void;
	onClick?: (value: number) => void;
	setSelectedItem?: (index: number) => boolean;
}
