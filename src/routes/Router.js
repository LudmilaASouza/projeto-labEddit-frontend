import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import PostsPage from "../pages/PostsPages/PostsPages";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PostsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                {/* <Route path="/posts/:id" element={} /> */}
                {/* <Route path="*" element={} /> */}
            </Routes>
        </BrowserRouter>
    )
}