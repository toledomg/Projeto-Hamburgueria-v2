import { useState, useRef, useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { CartContext } from '../../providers/CartContext';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

const CartModal = () => {
  const { modalShow } = useContext(CartContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button type='button' aria-label='Fechar' onClick={() => modalShow()}>
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          <CartProductList />

          <div className='emptyBox'>
            <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
              Sua sacola está vazia
            </StyledTitle>
            <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
          </div>
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
