import {FiMenu} from "react-icons/fi"

export default function Header(props){
    return(
        <header>
            <button onClick={()=>props.setMenuSwitch(!props.menuSwitch)}>
                <FiMenu />
            </button>
            HEADER
        </header>
    )
}