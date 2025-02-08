import { defineType,defineField } from "sanity";

export default defineType({
    name: 'ref',
    type: 'document',
    title: 'Reference',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Description',
        }),
        defineField({
            name: 'products',
            title: 'Product',
            type: 'reference',
            to: [{ type: 'products' }],
        }),
    ],
})





























