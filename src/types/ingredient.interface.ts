export interface IIngredient {
    text: string;
    thumbnail: string;
    price: number;
    type?: 'top' | 'bottom';
    isLocked?: boolean;
    extraClass?: string;
    handleClose?: () => void;
}
