import FetchAPI from "./FetchAPI";
import Axios from "./Axios";
import AxiosV2 from "./AxiosV2";
import PostsAxiosV2 from "./PostsAxiosV2";
import PostsAxiosV3AsyncAwait from "./PostsAxiosV3AsyncAwait";
import { Route, Routes } from "react-router-dom";
import AddUserForm from "./pages/AddUserForm";
import { Link } from "react-router-dom"

const App = () => {
  return (
    <div>

      <div>
      <Link to="new">Add new user</Link>
      </div>
      
      <FetchAPI />
      <br />
      <br />
      <Axios />
      <br />
      <br />
      <AxiosV2 />
      <br />
      <br />
      <PostsAxiosV2 />
      <br />
      <br />
      <PostsAxiosV3AsyncAwait />

      <Routes>
        <Route path="/new" element={<AddUserForm />} />
      </Routes>
    </div>
  )
}

export default App
