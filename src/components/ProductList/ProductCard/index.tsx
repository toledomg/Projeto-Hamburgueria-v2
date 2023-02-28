import { useContext } from 'react';
import { StyledProductCard } from './style';
import { CartContext } from '../../../providers/CartContext';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { UserContext } from '../../../providers/UserContext';
import { IProduct, IProductCart } from '../../../providers/@types';

const ProductCard = ({ id, name, category, price, img }: IProductCart) => {
  const { addToCart } = useContext(CartContext);
  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>
          {price.toFixed(2).replace('.', ',')}
        </StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          // onClick={() => addToCart(id)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
