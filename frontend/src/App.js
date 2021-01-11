import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3300/user/signup')
      .then(res => console.log(res))
      .catch(() => console.error('Failed'));

  }, []);

  return (
    <h1>App active</h1>
  );
}

export default App;
