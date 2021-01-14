import React from 'react';

import { useForm } from 'react-hook-form';

export default function SignUpForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:3300/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            // .then(res => res.json())
            .then(data => console.log('Success:', data))
            .catch(err => console.error('Error:', err));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label name='username'>Username:</label>
            <input name='username' ref={register({ required: true, min: 4 })} />
            <label name='email'>Email:</label>
            <input name='email' ref={register({ required: true })} />
            <label name='password'>Password:</label>
            <input name='password' type='password' ref={register({ required: true, min: 6 })} />
            <input type='submit' value='Sign Up' />
        </form>
    );
}