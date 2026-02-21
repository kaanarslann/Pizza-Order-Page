import Home from "../pages/Home";
import { Routes, Route } from "react-router";
import Order from "../pages/Order";

export default function PageContent() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/order" element={<Order />}/>
            </Routes>
        </>
    )
}