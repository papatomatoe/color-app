import * as React from "react";

export const useValue = (defaultValue: any) => {
	const ref = React.useRef(null);
	const [value, setValue] = React.useState<typeof defaultValue>(defaultValue);

	const resetValue = () => setValue(defaultValue);
	return [value, setValue, resetValue, ref];
};
