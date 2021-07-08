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
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookId: String!): User
        deleteBook(bookId: String!): User
    }
    
`;

module.exports = typeDefs;