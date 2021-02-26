import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      # createdAt
      username
      comments {
        id
        body
      }
      likeCount
      commentCount
    }
  }
`;

function Home() {
  const { data, loading } = useQuery(FETCH_POST_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading Posts..</h1>
        ) : (
          data &&
          data.getPosts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
