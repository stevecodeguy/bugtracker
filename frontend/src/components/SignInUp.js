import React, { useState } from 'react';

import '../css/signInUp.css';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function SignInUp() {
  const [signInOrUp, setSignInOrUp] = useState('');

  return (
    <div className='sign-in-up'>
      <div>
        {
          signInOrUp === '' ?
            <>
              <div>
                <p>Already have an account?</p>
                <button onClick={() => setSignInOrUp('in')}>Sign In</button>
              </div>
              <div>
                <p>Create a new account</p>
                <button onClick={() => setSignInOrUp('up')}>Sign Up</button>
              </div>
            </>
            :
            <div>

              {
                signInOrUp === 'in' ?
                  <>
                    <SignInForm />
                    <p
                      className='clickable'
                      onClick={() => setSignInOrUp('up')}
                    >No account? Sign up</p>
                  </>
                  :
                  signInOrUp === 'up' ?
                    <>
                      <SignUpForm />
                      <p
                        className='clickable'
                        onClick={() => setSignInOrUp('in')}
                      >Already have an account?<br />Sign in</p>
                    </>
                    : null
              }
            </div>
        }
      </div>
    </div>
  );
}