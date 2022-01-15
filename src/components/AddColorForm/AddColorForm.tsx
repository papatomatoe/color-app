import * as React from "react";
import cn from "classnames";

import Button from "components/Button";
import MessageModal from "components/MessageModal/MessageModal";

import { useValue } from "hooks/useValue";

import { useColors } from "context";

import styles from "./AddColorForm.module.css";

import { IAddColorFormProps } from "./types";

const AddColorForm: React.FC<IAddColorFormProps> = ({ onClose }) => {
	const { addColor } = useColors();
	const [title, setTitle, resetTitle, titleRef] = useValue("");
	const [hex, setHex, resetHex] = useValue("#ffffff");

	const [error, setError, resetError] = useValue("");
	const [isSubmitSuccess, setSubmitSuccess, resetSubmitSuccess] =
		useValue(false);
	const [isSubmitError, setSubmitError, resetSubmitError] = useValue(false);

	const closeHandler = () => onClose && onClose();

	const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		resetError();
		setTitle(event.target.value);
	};

	const colorHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
		setHex(event.target.value);

	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!title) {
			setError(titleRef.current.validationMessage);
			return;
		}

		try {
			addColor({ title, hex });
			resetTitle();
			resetHex();
			setSubmitSuccess(true);
		} catch (e) {
			console.error(e);
			setSubmitError(true);
		}
	};

	const submitSuccessHandler = () => {
		onClose();
		resetSubmitSuccess();
	};

	const submitErrorHandler = () => {
		resetSubmitSuccess();
		resetSubmitError();
	};

	if (isSubmitSuccess)
		return (
			<MessageModal
				className={styles.form}
				buttonHandler={submitSuccessHandler}
				message="Color has been added!"
			/>
		);

	if (isSubmitError)
		return (
			<MessageModal
				className={styles.form}
				buttonHandler={submitErrorHandler}
				message="Something went wrong!"
			/>
		);

	return (
		<form className={styles.form} onSubmit={submitHandler} noValidate>
			<div className={styles.container}>
				<h3 className={styles.formTitle}>Add Color</h3>
				<label className={styles.field}>
					<span className={styles.label}>Title:</span>
					<input
						ref={titleRef}
						className={cn(styles.input, { [styles.error]: error })}
						type="text"
						name="title"
						onChange={titleHandler}
						value={title}
						required
					/>
					<p className={styles.errorMessage}>{error}</p>
				</label>
				<label className={styles.field}>
					<span className={styles.label}>Color:</span>
					<div className={styles.inputContainer}>
						<p className={styles.inputValue}>{hex}</p>
						<input
							className={styles.input}
							type="color"
							name="hex"
							onChange={colorHandler}
							value={hex}
							required
						/>
					</div>
				</label>
				<div className={styles.field}>
					<Button type="submit" className={styles.button}>
						Add
					</Button>
					<Button
						type="button"
						className={cn(styles.button, styles.close)}
						onClick={closeHandler}
					>
						Close
					</Button>
				</div>
			</div>
		</form>
	);
};

export default AddColorForm;
