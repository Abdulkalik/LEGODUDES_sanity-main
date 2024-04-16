import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "nl1sxoxx",
    dataset: "production",
    useCdn : true,
    apiVersion: "2022-03-07"
})
// skjek543thglnJ5LT1GuqAbVcGUm1IE1Sf8c2lD3PB92KiNTfuZHZK6QiJvqzMmQm5CpQFDVvw9cOTpEuYaKpuBBFD7OVZeBNm0UM8xGVEShjwMH3XcaJfUe2ojlfCmjnuFGrfZdgcckMKs82JWzShVklex3eX1dlJ2l3daCqwkzoTRLmWJT

export const writeClient = createClient({
    projectId: "nl1sxoxx",
    dataset: "production",
    useCdn : false,
    apiVersion: "2022-03-07",
    token :"skjek543thglnJ5LT1GuqAbVcGUm1IE1Sf8c2lD3PB92KiNTfuZHZK6QiJvqzMmQm5CpQFDVvw9cOTpEuYaKpuBBFD7OVZeBNm0UM8xGVEShjwMH3XcaJfUe2ojlfCmjnuFGrfZdgcckMKs82JWzShVklex3eX1dlJ2l3daCqwkzoTRLmWJT"
})