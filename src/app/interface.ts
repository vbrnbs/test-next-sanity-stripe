export interface simplifiedProduct {
    _id: string;
    price: number;
    name: string;
    slug: string;
    categoryName: string;
    imageUrl: string;
}

export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    price_id: string;
    name: string;
    description: string;
    slug: string;
    categoryName: string;
}