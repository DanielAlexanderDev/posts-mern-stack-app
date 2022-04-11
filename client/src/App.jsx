import { Route, Routes } from "react-router-dom";
import { Home, NotFound, PostForm } from "./pages";
import { PostProvider } from "./context/postsContext";

function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<PostForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
