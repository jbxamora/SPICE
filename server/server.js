// ApolloServer setup
// Import the ApolloServer class
const { ApolloServer } = require("apollo-server-express");
// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require("./schemas");
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//Express setup
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    // DB Setup
    const db = require("./config/connection");

    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(
                `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
            );
        });
    });
};

// Call the async function to start the server
startApolloServer();