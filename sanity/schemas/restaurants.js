export default {
    name: 'restaurants',
    title: 'Restaurants',
    type: 'document',
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'string',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the restaurant',
        },
        {
            name: 'lat',
            type: 'number',
            title: 'Latitude of the Restaurant',
        },
        {
            name: 'long',
            type: 'number',
            title: 'Longitude of the Restaurant',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address of the Restaurant',
            validation: Rule => Rule.required()
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Rating of the Restaurant',
            validation: Rule => Rule.required().min(1).max(5).error("Rating must be between 1 and 5")
        },
        {
            name: 'type',
            type: 'string',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }]
        },
        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            of: [{ type: 'reference', to: [{ type: 'dish' }] }]
        }
    ],
}
