type Category = 
    'House' | 'Car' | 'Human';


export interface IProduct {
    id: string;
    price: number;
    title: string;
    description: string;
    image: string;
    shortDescription: string;
    category: Category;
}