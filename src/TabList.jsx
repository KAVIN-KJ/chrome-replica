import React, { useState } from "react";
import Tab from './Tab'
import './Styles/TabList.css'

function TabList(props){
    const [act,setAct] = useState(true)
    const [tablist,setTabList] = useState(props.list)

    function createNewTab(){
        setTabList([...tablist,tablist])
    }
    function closeTab(){

    }
function handleInput(){
    setAct(!act)
}
    return(
        <>
            <div className="tabs">
                <div className="closedTabs" title="closedTabs">
                <i class="fa-solid fa-circle-chevron-down"/>
                </div>
                <div className="openTabs">
                   { tablist.map((tablist,index) =><div id="Tab"> 
                            <Tab onClick={handleInput} active={act} title={tablist.title}/>
                              
                    </div>
                    )
                }
                <i onClick={createNewTab} id="addTab" class="fa-solid fa-square-plus"/>
                </div>
            </div>
        </>
    )
}
TabList.defaultProps = {
    list: [{text:"New Tab",active:false},{text:"New Tab 2",active:true}],
}

export default TabList;