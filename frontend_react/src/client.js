import { createClient } from "@sanity/client";
import imgUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-08-04",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});
const builder = imgUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
