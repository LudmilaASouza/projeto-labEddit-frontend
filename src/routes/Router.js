import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={} /> */}
                <Route path="/login" element={<LoginPage />} />
                {/* <Route path="/signup" element={} /> */}
                {/* <Route path="/posts/:id" element={} /> */}
                {/* <Route path="*" element={} /> */}
            </Routes>
        </BrowserRouter>
    )
}