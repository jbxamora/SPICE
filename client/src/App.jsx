import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { dummyPosts } from "./constants/constants";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from "./components/NavBar";
import CreatePost from "./pages/CreatePost";
import Auth from "./pages/Auth";
import PostsList from "./components/PostList";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList posts={dummyPosts} />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
    </ApolloProvider>
  );
};

export default App;
