export default {
    name: 'featured',
    title: 'Featured Menu Categories',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Featured Category Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'string',
      },
      {
        name: 'restaurant',
        type: 'array',
        title: 'Restaurant',
        of: [{type: 'reference', to: [{type: 'restaurants'}]}]
      }
    ],
  }
  