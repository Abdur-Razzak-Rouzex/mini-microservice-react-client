import React from "react";
import PostCreateComponent from "./components/post/post-create.component";
import PostListComponent from "./components/post/post-list.component";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreateComponent />
      <hr />
      <h1>Posts</h1>
      <PostListComponent />
    </div>
  );
};

export default App;
