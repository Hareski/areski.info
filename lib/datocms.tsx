import { GraphQLClient } from "graphql-request";

export function request({ query }) {
    const endpoint = `https://graphql.datocms.com/`;
    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer f4d7f9edea11c56955f38e4debf65b`
        }
    });
    const requestOutput = client.request(query);
    console.log(requestOutput);
    return requestOutput;
}