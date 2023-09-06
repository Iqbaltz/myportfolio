import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-03-26",
};

export const client = sanityClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
