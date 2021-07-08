// import gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    type User {
       _id: ID
       username: String
       email: String
       password: String
       savedBooks: [Book]
       bookCount: Int
    }
 
    type Book {
        _id: ID
    }

    type Query {
        users: [User]
        user(username: String!): User
    }
    
`;

module.exports = typeDefs;