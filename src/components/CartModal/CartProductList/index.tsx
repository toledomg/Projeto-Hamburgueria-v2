import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { CartContext } from '../../../providers/CartContext';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';

const CartProductList = () => {
  const { cartList } = useContext(CartContext);
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
        <StyledParagraph className='total'>R$ 14,00</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
