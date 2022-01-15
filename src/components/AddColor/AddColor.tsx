import * as React from "react";
import AddColorForm from "components/AddColorForm";
import Button from "components/Button";
import styles from "./AddColor.module.css";

const AddColor: React.FC = () => {
	const [isOpened, setIsOpened] = React.useState<boolean>(false);

	const openHandler = () => setIsOpened(true);
	const closeHandler = () => setIsOpened(false);

	return (
		<>
			<Button
				className={styles.addColorButton}
				type="button"
				onClick={openHandler}
			>
				Add Color
			</Button>

			{isOpened && <AddColorForm onClose={closeHandler} />}
		</>
	);
};

export default AddColor;
