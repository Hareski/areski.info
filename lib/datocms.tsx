import { GraphQLClient } from "graphql-request";

export function request({ query }) {
    const endpoint = `https://graphql.datocms.com/`;
    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
        }
    });
    const requestOutput = client.request(query);
    console.log(requestOutput);
    return requestOutput;
}
