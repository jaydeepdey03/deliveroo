import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import restaurants from './restaurants'
import dish from './dish'
import category from './category'
import featured from './featured'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([restaurants,dish, category, featured, ])
})
