import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { StyledRegisterPage } from './style';
import RegisterForm from '../../components/Form/RegisterForm';
import IllustrationBox from '../../components/IllustrationBox';

import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import { UserContext } from '../../providers/UserContext';

const RegisterPage = () => {
  const { navigate } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('@token');
    //
    if (token) {
      navigate('/shop');
    }
  }, []);
  return (
    <StyledRegisterPage>
      <StyledContainer>
        <div className='flexGrid'>
          <div className='left'>
            <IllustrationBox />
          </div>
          <div className='right'>
            <StyledGridBox className='formBox'>
              <header>
                <StyledTitle tag='h1' $fontSize='three'>
                  Cadastro
                </StyledTitle>
                <Link to='/'>Retornar para o login</Link>
              </header>

              <RegisterForm />
            </StyledGridBox>
          </div>
        </div>
      </StyledContainer>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
