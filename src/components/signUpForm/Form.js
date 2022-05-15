import React, { useEffect, useState } from 'react';

export default function Form() {
	let [usernameTest, setUsernameTest] = useState('');
	let [isUsernameRepeated, setUsernameRepeated] = useState(false);
	let [emailTest, setEmailTest] = useState('');
	let [isEmailRepeated, setEmailRepeated] = useState(false);

	let [userData, setUserData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/users')
			.then((res) => res.json())
			.then((res) => {
				setUserData(res);
			});
	}, []);

	useEffect(() => {
		userData.forEach((it) => {
			if (usernameTest === it.username) {
				setUsernameRepeated(true);
			} else {
				setUsernameRepeated(false);
			}

			if (emailTest === it.email) {
				setEmailRepeated(true);
			} else {
				setEmailRepeated(false);
			}
		});
	});

	return (
		<>
			<div>
				<form method='POST' action='http://localhost:4000/usersRegister'>
					<div className='input-wrapper'>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' name='name' />
					</div>
					<div className='input-wrapper'>
						<label htmlFor='surname'>Surname</label>
						<input type='text' id='surname' name='surname' />
					</div>
					<div className='input-wrapper'>
						<label htmlFor='age'>Age</label>
						<input type='number' id='age' name='age' />
					</div>
					<div className='input-wrapper'>
						<label htmlFor='gender'>Gender</label>
						<select name='gender' id='gender'>
							<option value='' disabled>
								...
							</option>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
						</select>
					</div>
					<div className='input-wrapper'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							onChange={(e) => setEmailTest(e.target.value)}
						/>
					</div>
					{isEmailRepeated && <div>This email address was already used</div>}
					<div className='input-wrapper'>
						<label htmlFor='phone'>Phone Number</label>
						<input type='tel' id='phone' name='phone' />
					</div>
					<div className='input-wrapper'>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							id='username'
							name='username'
							onChange={(e) => setUsernameTest(e.target.value)}
						/>
						{isUsernameRepeated && <div>This username was already used</div>}
					</div>
					<div className='input-wrapper'>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' name='password' />
					</div>
					{!isEmailRepeated && !isUsernameRepeated && (
						<div className='input-wrapper'>
							<input type='submit' value='Sign up' />
						</div>
					)}
				</form>
			</div>
		</>
	);
}
