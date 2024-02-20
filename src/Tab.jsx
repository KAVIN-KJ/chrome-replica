import React from "react";
import './Styles/Tab.css'
function Tab(props){
    function closeTab(){
        console.log("tab closed")
    }
    return(
        <>
            <div onClick={props.onClick} id="Tab" className={props.active ? "TabActive" : "Tab"}>
                <div className="tabcontainer">
                    <div>
                    <i class="fa-solid fa-bolt"></i>                    
                    </div>
                    <div className="Title" >{props.title}</div>
                    <i onClick={closeTab} id="close" class="fa-solid fa-circle-xmark"/>
                </div>
            </div>
        </>
    )
}
Tab.defaultProps = {
    title : "New Tab",
    active: (false)
}
export default Tab