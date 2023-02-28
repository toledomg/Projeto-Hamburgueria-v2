import { CartProvider } from './providers/CartContext';
import { UserProvider } from './providers/UserContext';
import { Router } from './routes';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <>
          <GlobalStyles />
          <Router />
        </>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
