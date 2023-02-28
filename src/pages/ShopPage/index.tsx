import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledShopPage } from './style';
import { CartContext } from '../../providers/CartContext';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../providers/UserContext';

const ShopPage = () => {
  const { cartList } = useContext(CartContext);
  const { getAllProduct, productsList, autoLogin, navigate } =
    useContext(UserContext);

  useEffect(() => {
    (() => {
      getAllProduct();
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem('@HamburgerKenzie', JSON.stringify(cartList));
  }, [cartList]);

  useEffect(() => {
    const token = localStorage.getItem('@token');
    if (token) {
      navigate('/shop');
    } else {
      navigate('/');
    }
  }, []);

  return (
    <StyledShopPage>
      <CartModal />
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
