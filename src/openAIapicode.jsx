import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: "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",
});
const openai = new OpenAIApi(configuration);

function App() {
	const [inputText, setInputText] = useState("");
	const [inputLanguage, setInputLanguage] = useState("");
	const [translatedText, setTranslatedText] = useState("");

	const handleTranslate = async (e) => {
		e.preventDefault();
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `Imagineaza-ti ca esti un elev de clasa a-10a. Scrie un eseu in care analizezi poezia "${inputText}" scrisa de ${inputLanguage}.`,
			temperature: 0.3,
			max_tokens: 100,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});
		setTranslatedText(response.data.choices[0].text);
	};

	return (
		<div>
			<form onSubmit={handleTranslate}>
				<label>
					Input text:
					<input
						placeholder='mesaj'
						type='text'
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
					/>
				</label>
				<label>
					<input
						placeholder='limba'
						type='text'
						value={inputLanguage}
						onChange={(e) => setInputLanguage(e.target.value)}
					/>
				</label>
				<button type='submit'>Translate</button>
			</form>
			{translatedText && (
				<div>
					<h2>Translation:</h2>
					<p>{translatedText}</p>
				</div>
			)}
		</div>
	);
}

export default App;
