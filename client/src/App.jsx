import { Route, Routes } from "react-router-dom";
import { Home, NotFound, PostForm } from "./pages";
import { PostProvider } from "./context/postsContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-red-50 min-h-screen flex items-center">
      <div className="px-10 container m-auto py-4">
        <PostProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
