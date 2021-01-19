import { useContext } from 'react';

import SignInUp from './components/SignInUp';
import SignOutButton from './components/SignOutButton';

import { SessionContext } from './context/Session';

function App() {
  const { token } = useContext(SessionContext);

  return (
    <>
      {
        token ?
          <SignOutButton />
          :
          <SignInUp />
      }
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
