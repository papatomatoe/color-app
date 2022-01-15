import * as React from "react";
import styles from "./Section.module.css";
import { ISectionProps } from "./types";
const Section: React.FC<ISectionProps> = ({
	title,
	isTitleVisible = false,
	children,
}) => {
	return (
		<section className={styles.section}>
			<h2 className={isTitleVisible ? styles.pageTitle : "visually-hidden"}>
				{title}
			</h2>
			{children}
		</section>
	);
};

export default Section;
