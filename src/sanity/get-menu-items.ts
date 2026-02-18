import { client } from ".";
import { SanityDocument } from "next-sanity";

export async function getMenuItems(name: string) {
    const query = `*[
        _type == "${name}"]{
        name,
        description,
        images,
        sizes_and_price[] {
            size,
            price
        }
    }`;

    return await client.fetch<SanityDocument[]>(
        query,
        {},
        {
            next: {
                revalidate: 1
            }
        }
    );
}
