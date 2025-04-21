import { createClient } from "@sanity/client"
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,
    apiVersion: "2024-01-01",
    useCdn: false,
})
