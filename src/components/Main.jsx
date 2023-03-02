import {Routes,Route} from "react-router-dom"
import Home from "../routes/Home"
import Component from "../routes/Component"

export default function Main(){
    return(
        <main>
            <Routes>
                <Route path="*" element={<Home/>} />
                <Route path="second" element={<Component/>} />
            </Routes>
        </main>
    )
}