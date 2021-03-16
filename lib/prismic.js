import { Client } from '../primic-config'

export async function request({ query, variables, preview }) {
    
    const client = Client();
    const { body } = await client({
        data: {
            query,
            variables,
        },
    });

    if (body.errors) {
        console.error("Ouch! The query has some errors!");
        throw body.errors;
    }

    return body.data;
}