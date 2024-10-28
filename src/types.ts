export interface IAction {
  dialogTitle: string;
  dialogActionTitle: string;
  action:
    | ((product: IProduct) => Promise<void>)
    | ((product: INewProduct) => Promise<void>);
}

export interface INewProduct {
  title: string;
  price: number;
  image: string;
  description: string;
}

export interface IProduct extends INewProduct {
  id: string;
}
