import { defineType,defineField } from "sanity";

export default defineType({
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        defineField({
            name: 'id',
            type: 'string',
            title: 'Car id',
        }),
        defineField({
            name: 'name',
            type: 'string',
            title: 'Car Name',
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Description',
        }),
        defineField({
            name: 'available',
            type: 'boolean',
            title: 'Is car available',
        }),
        defineField({
            name: 'islike',
            type: 'boolean',
            title: 'Is Like Product',
            initialValue: false,
        }),
        defineField({
            name: 'brand',
            type: 'string',
            title: 'Brand',
            description: 'Brand of the car (e.g., Nissan, Tesla, etc.)',
        }),
        defineField({
            name: 'type',
            type: 'string',
            title: 'Car Type',
            description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
        }),
        defineField({
            name: 'fuelCapacity',
            type: 'string',
            title: 'Fuel Capacity',
            description: 'Fuel capacity or battery capacity (e.g., 90L, 100kWh)',
        }),
        defineField({
            name: 'transmission',
            type: 'string',
            title: 'Transmission',
            description: 'Transmission type (e.g., Automatic, Manual, Semi-Automatic)',
        }),
        defineField({
            name: 'seatingCapacity',
            type: 'string',
            title: 'Seating Capacity',
            description: 'Number of seats (e.g., 5)',
        }),
        defineField({
            name: 'pricePerDay',
            title: 'Price Per Day',
            type: 'number',
            description: 'Rental price per day',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            },           
            description: 'Image of the car',
        }),
        defineField({
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
               layout: 'tags',
            },
            description: 'Tags for categorization (e.g., popular, recommended)',
        }),
    ],
})





























