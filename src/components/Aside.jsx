import {NavLink} from "react-router-dom"

export default function Aside(){
    return(
        <aside>
            <nav>
                <NavLink to="*">HOME</NavLink>
                <NavLink to="second">SECOND</NavLink>
            </nav>
        </aside>
    )
}