const postsResolvers = require("./posts");
const usersResolver = require("./users");
const commentsResolver = require("./comments");

module.exports = {
  Post: {
    likeCount(parent) {
      console.log(parent);
      return parent.likes.length;
    },
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolver.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolver.Mutation,
  },
};
