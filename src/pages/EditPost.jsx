import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import databaseService from "../appwrite/database";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm";

const EditPost = () => {
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    databaseService.getPost(slug).then((post) => {
      if (post) {
        setPost(post);
      } else {
        navigate("/");
      }
    });
  }, [slug, navigate]);

  return (
    <div className="py-6">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
};

export default EditPost;
