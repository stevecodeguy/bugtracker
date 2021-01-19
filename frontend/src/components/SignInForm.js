import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import '../css/signInUp.css';

import { SessionContext } from '../context/Session';

export default function SignInForm() {
    const { setToken } = useContext(SessionContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:3300/user/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(async data => {
                const jsonData = await data.json();
                const token = jsonData.token;
                localStorage.setItem('token', token);
                setToken(token);
            })
            .catch(err => console.error('Error:', err));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign In</h2>
            <label name='username'>Username:</label>
            <input name='username' ref={register({ required: true })} />
            <label name='password'>Password:</label>
            <input name='password' type='password' ref={register({ required: true })} />
            <input type='submit' value='Sign In' />
        </form>
    );
}