
export interface IBurgerApi {
    isLoading: boolean
    hasError: boolean;
    burgers: IBurger[]
}

export interface IBurgerList {
    length: number
    data: IBurger[]
}

export type BurgerArray = IBurger[];

export interface IBurger {
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    calories: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number
}