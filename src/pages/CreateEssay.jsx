import React, { useState } from "react";
import { Group, Radio } from "@mantine/core";
import { Configuration, OpenAIApi } from "openai";
import { Input } from "@mantine/core";
import { Button } from "@mantine/core";
import Typewriter from "typewriter-effect/dist/core";

const configuration = new Configuration({
	apiKey: "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",
});
const openai = new OpenAIApi(configuration);

function CreateEssay() {
	const [assistValue, setAssistValue] = useState("fullai");
	const [complexValue, setComplexValue] = useState("normal");
	console.log(assistValue, complexValue);

	const [input, setInput] = useState("");
	const [essay, setEssay] = useState("");

	const createEssay = async (e) => {
		e.preventDefault();
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: `${complexValue}. ${assistValue} "${input}"`,
			temperature: 0.3,
			max_tokens: 1000,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});
		setEssay(response.data.choices[0].text);
	};

	return (
		<div className='CreateEssay'>
			<div className='flex justify-center h-screen items-start'>
				<div className='w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 flex justify-center items-center flex-col mt-20 border-2'>
					<div className='generator-navbar flex justify-around items-center w-full'>
						<div className='navbar-assistance text-center'>
							<Radio.Group
								value={assistValue}
								onChange={setAssistValue}
								name='Assistance'
								label='Choose assistance level'
								description='How complex do you want your essay to be?'
							>
								<Group mt='xs'>
									<Radio
										value='Write a highly complex and elaborated essay on '
										label='Full AI'
									/>
									<Radio value='Write an essay layout on ' label='Partial AI' />
								</Group>
							</Radio.Group>
						</div>

						<div className='navbar-complexity text-center'>
							<Radio.Group
								value={complexValue}
								onChange={setComplexValue}
								name='Complexity'
								label='Choose complexity level'
								description='How complex do you want your essay to be?'
							>
								<Group mt='xs'>
									<Radio
										value='You are a 16 years old student with an average intelligence, your vocabulary and writing skills are mediocre'
										label='Normal'
									/>
									<Radio
										value='You are a highly intelligent professor with a PhD in writing and literature, you also have a dense and rich vocabulary'
										label='Advanced'
									/>
								</Group>
							</Radio.Group>
						</div>
					</div>
					<div className='inputs flex flex-col justify-center items-center mt-10 text-center'>
						<Input.Wrapper
							id='input-demo'
							label='Enter theme'
							description='What should the essay be about? e.g. "The Torrents Of Spring by Hemingway"'
						>
							<Input
								id='input-demo'
								placeholder='Type something...'
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
						</Input.Wrapper>
						<div className='button mt-5'>
							<Button color='violet' variant='outline' onClick={createEssay}>
								Generate
							</Button>
						</div>
					</div>
					{/*}`output mt-5 p-7 ${!essay ? 'border border-indigo-100 : '''}`}>*/}
					<div
						className={`output mt-5 p-7 ${essay && "border border-indigo-100"}`}
					>
						{essay && <p>{essay}</p>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateEssay;
