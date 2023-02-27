import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { UserContext } from '../../../providers/UserContext';
import { IProduct } from '../../../providers/@types';

interface IProductCard {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  product: IProduct;
}

const ProductCard = ({
  id,
  name,
  category,
  price,
  img,
  product,
}: IProductCard) => {
  const { loading } = useContext(UserContext);

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
        <StyledButton $buttonSize='medium' $buttonStyle='green'>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
