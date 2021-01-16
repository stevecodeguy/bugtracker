import { useContext } from 'react';

import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import SignOutButton from './components/SignOutButton';

import { SessionContext } from './context/Session';

function App() {
  const { token } = useContext(SessionContext);

  return (
    <>
      {token ? <SignOutButton /> : null}
      <h1>Sign In</h1>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={() => {
        fetch('http://localhost:3300/user/test', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      })
          .then(data => console.log('Success:', data))
          .catch(err => console.error('Error:', err));
      }}>Do Thing</button> */}
    </>
  );
}

export default App;
