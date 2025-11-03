import { createClient } from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: 'sv781j8g',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});

export async function getPortfolioData() {
  return client.fetch(`{
    "aboutMe": *[_type == "aboutMe"][0],
    "experience": *[_type == "experience"] | order(_createdAt desc),
    "education": *[_type == "education"] | order(_createdAt desc),
    "projects": *[_type == "projects"] | order(priority asc, _createdAt desc),
    "skills": *[_type == "mySkills"] | order(priority asc, _createdAt desc),
    "socialLinks": *[_type == "socialLinks"] | order(_createdAt desc),
    "home": *[_type == "home"][0]
  }`);
}

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
