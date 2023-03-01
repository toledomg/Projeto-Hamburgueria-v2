import { useContext, useEffect, useState } from 'react';
import { StyledShopPage } from './style';
import { CartContext } from '../../providers/CartContext';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../providers/UserContext';

const ShopPage = () => {
  const { cartList } = useContext(CartContext);
  const { getAllProduct, filteredProducts } = useContext(UserContext);

  useEffect(() => {
    (() => {
      getAllProduct();
    })();
  }, [filteredProducts]);

  useEffect(() => {
    localStorage.setItem('@HamburgerKenzie', JSON.stringify(cartList));
  }, [cartList]);

  return (
    <StyledShopPage>
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
