import { useState, useEffect } from "react";

function EditableInput() {
	// Define state for the input value
	const [inputValue, setInputValue] = useState(
		localStorage.getItem("editableInput") || ""
	);

	// Define a function to handle input changes
	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	// Save the input value to local storage whenever it changes
	useEffect(() => {
		localStorage.setItem("editableInput", inputValue);
	}, [inputValue]);

	return (
		<input
			type='text'
			className='border border-gray-300 p-2 rounded-md'
			value={inputValue}
			onChange={handleInputChange}
		/>
	);
}

export default EditableInput;
