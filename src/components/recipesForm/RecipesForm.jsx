import React, { useRef } from 'react';
// import useForm from '../../hooks/useForm';
import {} from 'react';
import useForm from '../../hooks/useForm';

export default function RecipesForm() {
	const { formData, handleInputChange } = useForm({
		title: '',
		description: '',
		ingredients: '',
		type: '',
		image: {},
		userId: '',
	});
	const { title, description, search, type } = formData;
	const ref = useRef();

	const sendingData = () => {
		const formDataInside = new FormData();
		formDataInside.append('file', ref.current.files[0]);
		// formDataInside.append('file2', JSON.stringify(formData));
		formDataInside.append('file3', 'dasist');
		console.log('Log formDataInside :::', formDataInside);
		console.log('Log formData :::', formData);
		const options = {
			method: 'POST',
			body: formDataInside,
		};
		fetch('http://localhost:4000/addRecipe', options)
			.then((res) => res.json())
			.then((res) => console.log(res, 'hehe'));
		// fetch('http://localhost:4000/addRecipe', {
		// 	method: 'POST',
		// 	mode: 'no-cors',
		// 	body: JSON.stringify(formData),
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json',
		// 		'Access-Control-Allow-Origin': 'http://localhost:4000/addRecipe',
		// 		'Access-Control-Allow-Credentials': 'true',
		// 	},
		// 	credentials: 'include',
		// })
		// 	.then((res) => res.json())
		// 	.then((result) => console.log(result));
	};
	return (
		<div>
			<div>
				<label htmlFor='title'>Title</label>
				<input
					onChange={handleInputChange}
					type='text'
					name='title'
					id='title'
					value={title}
				/>
			</div>
			<div>
				<label htmlFor='description'>description</label>
				<textarea
					onChange={handleInputChange}
					type='text'
					name='description'
					id='description'
					value={description}
				/>
			</div>
			<div>
				<label htmlFor='ingredients'>search</label>
				<input
					onChange={handleInputChange}
					type='search'
					name='ingredients'
					id='ingredients'
					value={search}
				/>
			</div>
			<div>
				<label htmlFor='type'>type</label>
				<input
					onChange={handleInputChange}
					type='text'
					name='type'
					id='type'
					value={type}
				/>
			</div>
			<div>
				<label htmlFor='recipesPhoto'>Choose photo</label>
				<input
					ref={ref}
					type='file'
					id='recipesPhoto'
					name='recipesPhoto'
					accept='image/*'
					multiple={false}
				/>
			</div>
			<div>
				<button onClick={sendingData}>Add Recipe</button>
			</div>
		</div>
	);
}

// title:"",
// images:"",
// description:"",
// type:"",
// ingredients:["mis","mis","eli mis"],
// postLikes:["Anna","Ashot","Arsen","Gev","Lian"],
// comment: [
// {username: "",
// comment:"text",
// commentLikes:["Anna","Ashot","Arsen","Gev","Lian"],
