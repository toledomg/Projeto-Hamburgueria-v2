import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { CartContext } from '../../../../providers/CartContext';
import { IProductCart } from '../../../../providers/@types';
import { StyledTitle } from '../../../../styles/typography';

interface ICartProductCardProps {
  name: string;
  img: string;
  product: IProductCart;
}

const CartProductCard = ({ product, name, img }: ICartProductCardProps) => {
  const { removeItemToCart } = useContext(CartContext);
  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => removeItemToCart(product)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
