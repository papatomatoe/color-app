import * as React from "react";
import styles from "./MainLayout.module.css";

const MainLayout: React.FC = ({ children }) => (
	<main className={styles.main}>
		<h1 className={styles.pageTitle}>Colors</h1>
		{children}
	</main>
);

export default MainLayout;
