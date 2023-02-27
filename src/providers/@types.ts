export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValues {
  email: string;
  password: string;
  name: string;
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
  autoLogin: () => Promise<void>;
}
