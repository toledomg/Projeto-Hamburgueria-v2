import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { CartContext } from '../../../providers/CartContext';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';

const CartProductList = () => {
  const { cartList, removeAllToCart, soma } = useContext(CartContext);
  return (
    <StyledCartProductList>
      <ul>
        {cartList.map((product) => (
          <CartProductCard
            key={product.id}
            name={product.name}
            img={product.img}
            product={product}
          />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          {' '}
          R$
          {soma.toFixed(2).replace('.', ',')}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => removeAllToCart()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
