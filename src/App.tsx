import { UserProvider } from './providers/UserContext';
import { Router } from './routes';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <UserProvider>
      <>
        <GlobalStyles />
        <Router />
      </>
    </UserProvider>
  );
}

export default App;
