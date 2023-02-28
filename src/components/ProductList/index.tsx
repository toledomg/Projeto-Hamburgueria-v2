import { useContext } from 'react';
import { StyledProductList } from './style';
import ProductCard from './ProductCard/index';
import { UserContext } from '../../providers/UserContext';

const ProductList = () => {
  const { productsList } = useContext(UserContext);

  return (
    <StyledProductList>
      {productsList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          img={product.img}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
