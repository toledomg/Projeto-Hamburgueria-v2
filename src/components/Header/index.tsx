import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext, useState } from 'react';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';

import CartModal from '../CartModal/index';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../providers/UserContext';

const Header = () => {
  const { userLogout } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const modalShow = () => {
    if (showModal === false) {
      setShowModal(true);
      console.log('sim');
    } else {
      setShowModal(false);
      console.log('não');
    }
  };

  return (
    <>
      <CartModal />;
      <StyledHeader>
        <StyledContainer containerWidth={1300}>
          <div className='flexGrid'>
            <img
              src={LogoKenzieBurguer}
              alt='Kenzie Burguer Logo'
              className='logo'
            />
            <nav className='nav' role='navigation'>
              <SearchForm />
              <div className='buttons'>
                <button type='button'>
                  <MdShoppingCart size={28} />
                </button>
                <button type='button'>
                  <MdLogout size={28} onClick={() => userLogout()} />
                </button>
              </div>
            </nav>
          </div>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
