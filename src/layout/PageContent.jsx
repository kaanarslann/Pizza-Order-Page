import Home from "../pages/Home";
import { Routes, Route } from "react-router";
import Order from "../pages/Order";
import Success from "../pages/Success";

export default function PageContent() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/order" element={<Order />}/>
                <Route path="/success" element={<Success />}/>
            </Routes>
        </main>
    )
}