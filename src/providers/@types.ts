export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IToast {
  timeInterval: number;
  html: string | HTMLElement | JQuery | undefined;
  timer?: number | undefined;
  timerProgressBar?: boolean | undefined;
  willClose: HTMLElement;
  clearInterval: number | undefined;
}

export interface IProductCart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  units?: number;
}

export interface IShopProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  product: IProductCart;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  getAllProduct: () => Promise<void>;
  userLogout: () => void;
  navigate: (to: string) => void;
  productsList: IProduct[];
  setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  filteredProducts: IProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface ICartContext {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  localCart: string | null;
  cartList: IProductCart[];
  setCartList: React.Dispatch<React.SetStateAction<IProductCart[]>>;
  search: IProduct[];
  setSearch: React.Dispatch<React.SetStateAction<IProduct[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalShow: () => void;
  addToCart: (currentProduct: IProductCart) => void;
  removeItemToCart: (currentId: IProductCart) => void;
  soma: number;
  removeAllToCart: () => void;
}
export interface ISearchForm {
  setSearchValue: (value: React.SetStateAction<never[]>) => void;
}
