import * as React from "react";
import ColorItem from "components/ColorItem";
import styles from "./ColorList.module.css";
import { useColors } from "context";

const ColorList: React.FC = () => {
	const { colors, deleteColor } = useColors();

	if (!colors.length)
		return (
			<p className={styles.noColors}>
				There is no colors! You can add the first one.
			</p>
		);
	return (
		<ul className={styles.list}>
			{colors.map(({ id, ...restProps }) => (
				<li key={id}>
					<ColorItem id={id} onDelete={deleteColor} {...restProps} />
				</li>
			))}
		</ul>
	);
};

export default ColorList;
