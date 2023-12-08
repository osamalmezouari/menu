import "./menu.jsx"
import {MenuContext} from "./menu.jsx";
import {useContext} from "react";

const Plate = () =>{
    const {plate,setMenuData} = useContext(MenuContext)
    const {title,price,img,desc} =plate

    return (
        <>
            <article className={"plate"}>
                <div className={"img"} style={{backgroundImage :`url(${img})`}}></div>
                <div className={"info"}>
                    <p className={"title"}>{title}</p>
                    <p className={"price"}>{price} $</p>
                </div>
                <div className={"desc"}>{desc}</div>
            </article>
        </>
    )
}
export default Plate