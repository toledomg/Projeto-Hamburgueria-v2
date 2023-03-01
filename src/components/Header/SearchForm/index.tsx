/* eslint-disable no-console */
import { MdRestoreFromTrash, MdSearch } from 'react-icons/md';
import { useState, useContext } from 'react';
import { StyledSearchForm } from './style';
import { UserContext } from '../../../providers/UserContext';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../providers/CartContext';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { cartList } = useContext(CartContext);
  const { productsList, setFilteredProducts, filteredProducts } =
    useContext(UserContext);

  const searchProducts = () => {
    if (inputValue) {
      setFilteredProducts(
        productsList.filter((product) => {
          const searchCategory = product.category
            .toLowerCase()
            .includes(inputValue.toLowerCase());
          const searchName = product.name
            .toLowerCase()
            .includes(inputValue.toLowerCase());

          return searchCategory || searchName;
        })
      );
    }
  };

  return (
    <StyledSearchForm>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        onChange={(event) => {
          // eslint-disable-next-line no-unused-expressions
          event.target.value
            ? setInputValue(event.target.value)
            : setFilteredProducts([]);
        }}
        onKeyUp={(event) => {
          // eslint-disable-next-line no-unused-expressions
          event.key === 'Enter' && searchProducts();
        }}
      />
      <StyledButton type='button' $buttonSize='medium' $buttonStyle='green'>
        {filteredProducts.length !== 0 ? (
          <MdRestoreFromTrash
            className='trash'
            onClick={() => setFilteredProducts([])}
          />
        ) : (
          <MdSearch onClick={searchProducts} />
        )}
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
