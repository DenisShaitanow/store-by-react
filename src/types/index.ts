type Category = 
    't-shirts' | 'shoes' | 'trousers' | 'jackets' | 'hats' | 'underwear' | 'accessories';


export interface IProduct {
    id: string;
    price: number;
    title: string;
    description: string;
    image: string;
    shortDescription: string;
    category: Category;
    sex: 'man' | 'woman';
}

export interface RegistrationData {
    email?: string;
    password: string;
    name: string;
    surname: string;
    avatar: File | null;
    gender: string;
    location: string;
    birthdayDate: string;
}