import {
  createContext,
  useEffect,
  useState,
  useContext,
  SetStateAction,
} from 'react';
import Swal from 'sweetalert2';
import {
  ICartContext,
  IDefaultProviderProps,
  IProduct,
  IProductCart,
} from './@types';
import { UserContext } from './UserContext';
import { toastAlert, toastConfirm } from '../styles/toast';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const { navigate } = useContext(UserContext);

  const localCart = localStorage.getItem('@HamburgerKenzie');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [cartList, setCartList] = useState([] as IProductCart[]);
  const [search, setSearch] = useState<IProduct[]>([]);

  const [showModal, setShowModal] = useState(false);
  const modalShow = () => {
    if (showModal === false) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const addToCart = (currentProduct: IProductCart) => {
    const productAdd = cartList.findIndex(
      (product) => product.id === currentProduct.id
    );

    if (productAdd === -1) {
      setCartList([...cartList, { ...currentProduct, units: 1 }]);
      console.log(cartList);
    } else {
      const productRemove = cartList.splice(productAdd, 1);
      productRemove[0].units! += 1;
      setCartList([...cartList, productRemove[0]]);
    }
  };

  const removeItemToCart = (currentProduct: IProductCart) => {
    Swal.fire({
      title: 'Deseja excluir o item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        const newCart = cartList.filter(
          (product) => product.id !== currentProduct.id
        );
        setCartList(newCart);

        Swal.fire('Excluído!', 'Item Excluído com sucesso.', 'success');
      }
    });
  };

  const soma = cartList.reduce(
    (valorAnterior, valorAtual) =>
      valorAtual.price
        ? valorAnterior + Number(valorAtual.price)
        : valorAnterior - Number(valorAtual.price),
    0
  );

  const removeAllToCart = () => {
    const emptySale: SetStateAction<IProductCart[]> = [];
    Swal.fire({
      title: 'Deseja limpar todo seu carrinho?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        setCartList(emptySale);
        Swal.fire('Excluído!', 'Carrinho limpo', 'success');
      } else {
        toastAlert('error', 'Algo deu errado!');
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        showModal,
        setShowModal,
        localCart,
        cartList,
        setCartList,
        search,
        setSearch,
        modalShow,
        addToCart,
        removeItemToCart,
        removeAllToCart,
        soma,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
