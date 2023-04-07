import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'podium',

  projectId: 'x0vlzmax',
  dataset: 'circuits',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
