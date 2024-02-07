import category from "./category"
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name of Product',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description of the Product',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{ type: 'image' }],
        },
        { 
            name: 'slug',
            title: 'Prodcut Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
        }, 
    ],
}