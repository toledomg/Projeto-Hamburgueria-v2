import { MdSearch } from 'react-icons/md';
import { useContext, useState } from 'react';
import { StyledSearchForm } from './style';
import { CartContext } from '../../../providers/CartContext';
import { StyledButton } from '../../../styles/button';

const SearchForm = () => {
  const { search, setSearch, cartList } = useContext(CartContext);
  const [searchValue, setSearchValue] = useState([]);

  const searchProducts = () => {
    if (searchValue) {
      setSearchValue();
    }
  };

  return (
    <StyledSearchForm>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
