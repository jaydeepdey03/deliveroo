import ImageUrlBuilder from "@sanity/image-url";
import SanityClient from "@sanity/client";

const client = SanityClient({
    projectId: "ba5jz21k",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25",
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)

export default client