import React, { useEffect, useState } from "react";
import Posts from "./components/admin/posts";
import PostLoadingComponent from "./components/posts/postLoading";
import axiosInstance from "./axios";

function Admin() {
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: true,
    posts: null,
  });

  useEffect(() => {
    axiosInstance.get().then((res) => {
      const allPosts = res.data;
      setAppState({ loading: false, posts: allPosts });
      console.log(res.data);
    });
  }, [setAppState]);

  return (
    <div>
      <h1>latest posts..::</h1>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
}

export default Admin;
