import { type SchemaTypeDefinition } from 'sanity'
// import car from './car'
import carss from './carss'
import products from './products'
import ref from './ref'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carss,products ,ref ],
}
