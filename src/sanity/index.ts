import { SanityImageSource, createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'oh9urekb',
    dataset: 'production',
    apiVersion: "2024-01-01",
    useCdn: false,
});

export function urlFor(source: SanityImageSource) {
    return createImageUrlBuilder(client).image(source);
}
