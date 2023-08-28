import { GraphQLClient, gql } from 'graphql-request';
import { NextResponse } from 'next/server';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export async function POST(req, res ) {
  const { name, email, comment } = await req.json()
  console.log('hello',{ name, email, comment})
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!,  {
      createComment(data: {name: $name, email: $email, comment: $comment,  
    }
  `;

  const result = await graphQLClient.request(query, {
    name, email, comment
  });
 
  console.log('result::',{result})
 
 
  
  return new NextResponse({result})
}