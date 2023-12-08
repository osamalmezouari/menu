import Plate from "./plate.jsx";
import "./menu.css"
import menu from "./data.js";
import {createContext, useState} from "react";
export const MenuContext = createContext();
const Menu = () =>{
    const [MenuData,setMenuData] = useState(menu)
    const handlerClick = (e) => {
        const targetCategory = e.target.value
        if(targetCategory === "all") {
            setMenuData(menu)
        }
        else {
            setMenuData(menu.filter((plate) => plate.category === targetCategory))
        }
    }
    return (
        <section className={"menu"}>
            <h1>Our Menu</h1>
            <div className={"buttons"}>
                <button value={"all"} onClick={(e)=>handlerClick(e)}>All</button>
                <button value={"breakfast"} onClick={(e)=>handlerClick(e)}>Breakfast</button>
                <button value={"lunch"} onClick={(e)=>handlerClick(e)}>Lunch</button>
                <button value={"shakes"} onClick={(e)=>handlerClick(e)}>Shakes</button>
            </div>
            <div className={"plates"}>
            {
                MenuData.map((plate,i)=>{
                    return <MenuContext.Provider value={{plate,setMenuData}} key={i}>
                        <Plate />
                    </MenuContext.Provider>
                })
            }
            </div>
        </section>
    )
}
export default Menu