const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const { MONGODB } = require("./config");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
// const Post = require("./models/Post");

// const resolvers = {
//   Query: {
//     async getPosts() {
//       try {
//         const posts = await Post.find();
//         return posts;
//       } catch (err) {
//         throw new Error(err);
//       }
//     },
//   },
// };

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("mongoDb connected");
  return server.listen(4001);
});
