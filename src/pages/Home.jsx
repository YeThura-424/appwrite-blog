import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import Container from "../components/container/Container";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    databaseService.getPosts([]).then((posts) => {
      if (posts) {
        // console.log(posts , 'response')
        setPosts(posts.documents); // return ka documents nat lar loh
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <h1>Login to read posts</h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
