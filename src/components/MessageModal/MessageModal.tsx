import Button from "components/Button";
import React from "react";
import cn from "classnames";
import styles from "./MessageModal.module.css";
import { IMessageModalProps } from "./types";

const MessageModal: React.FC<IMessageModalProps> = ({
	buttonHandler,
	message,
	className,
}) => {
	const closeHandler = () => buttonHandler();
	return (
		<div className={cn(styles.modal, className)}>
			<h3 className={styles.heading}>{message}</h3>
			<Button type="button" onClick={closeHandler} className={styles.button}>
				Close
			</Button>
		</div>
	);
};

export default MessageModal;
