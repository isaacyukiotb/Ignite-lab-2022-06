import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4okstou0jq001w77pnb583k/master',
    cache: new InMemoryCache()
})