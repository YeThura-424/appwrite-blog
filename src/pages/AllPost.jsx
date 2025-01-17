import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";
const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    databaseService.getPosts([]).then((posts) => {
      if (posts) {
        // console.log(posts , 'response')
        setPosts(posts.documents); // return ka documents nat lar loh
      }
    });
  }, []);

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

export default AllPost;
