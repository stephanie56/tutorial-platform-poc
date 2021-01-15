import { createClient } from 'contentful';

import {
  CONTENTFUL_SPACE,
  CONTENTFUL_ACCESS_TOKEN,
} from '../config/ContentfulConfig';

export const contentfulClient = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});