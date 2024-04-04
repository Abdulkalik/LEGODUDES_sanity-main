import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "nl1sxoxx",
    dataset: "production",
    useCdn : true,
    apiVersion: "2022-03-07"
})