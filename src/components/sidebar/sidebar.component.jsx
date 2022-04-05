import React, { useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineMessage, AiOutlineRight, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiCheckSquare } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import './sidebar.styles.css'


const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('analytics')
    return (
        <div className="sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-title text">Metacare</div>
                    <span className="sidebar-subtitle">adeyinka@metacare.app</span>
                </div>
                <div>
                    <IconContext.Provider value={{size:"1.3em", color:"#696d8c"}} >
                        <ul className="nav nav-pills nav-stacked flex-column">
                            <li className="sidenav-item pt-5">
                                <AiOutlineUsergroupAdd />
                                <span className="px-3 item-text">Admin</span>
                                <AiOutlineRight className="item-dropdown" />
                            </li>
                            <li className="sidenav-item pt-5">
                                <BiCheckSquare />
                                <span className="px-3 item-text">Knowledge Base</span>
                                <AiOutlineRight className="item-dropdown" />
                            </li>
                            <li className="sidenav-item pt-5">
                                <BiCheckSquare />
                                <span className="px-3 item-text">Train SAM</span>
                                <AiOutlineRight className="item-dropdown" />
                            </li>
                            <li className="sidenav-item pt-5">
                                <AiOutlineCalendar />
                                <span className="px-3 item-text">Agent Inbox</span>
                                <AiOutlineRight className="item-dropdown" />
                            </li>
                            <li className="sidenav-item pt-5">
                                <AiOutlineClockCircle />
                                <span className="px-3 item-text">Help Center</span>
                                <AiOutlineRight className="item-dropdown" />
                            </li>
                            <li className="sidenav-item pt-5">
                                <AiOutlineMessage className={(activeTab === 'analytics' ? 'active' : '') }  />
                                <span className={(activeTab === 'analytics' ? 'active' : '') + ' item-text px-3'}>Analytics</span>
                                <AiOutlineRight className="item-dropdown" />

                                
                            </li>
                            <ul className="nav nav-pills nav-stacked flex-column pl-5 submenu">
                                    <li className="py-2 active">Teams</li>
                                    <li className="py-2">Knowledge Base</li>
                                    <li className="py-2">Training Sam</li>
                                    <li className="py-2">Help Center</li>
                            </ul>
    
                        </ul>
                    </IconContext.Provider>
                    
                </div>
            </div>
    )
}


export default Sidebar