import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function useForm(initialState = {}) {
	const user = useSelector((state) => state.user.user);
	// console.log(user, 'user');
	const [formData, setFormData] = useState(initialState);

	const handleInputChange = (e) => {
		if (e.target.name === 'ingredients') {
			console.log('works');
			let ingredientsArr = [];
			ingredientsArr.push(e.target.value);
			setFormData({ ...formData, ingredients: ingredientsArr });
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	};

	const imageHandler = (e) => {
		const file = e.target.files[0];
		console.log(e.target.files[0], 'imageHandler');
		setFormData({ ...formData, image: file, userId: user._id });
	};
	return { formData, handleInputChange, imageHandler };
}
