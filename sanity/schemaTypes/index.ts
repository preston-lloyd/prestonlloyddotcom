import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { homePage } from './homePage'
import { project } from './project'
import { contactPage } from './contactPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, project, contactPage],
}
