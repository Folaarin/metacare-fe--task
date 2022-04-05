
import React from "react";
import './efficiency-analytics.styles.css'
import { DropdownButton, Dropdown } from "react-bootstrap";
import {  AiOutlineSearch } from "react-icons/ai";

import ChartContainer from "../../components/chart-container/chart-container.component";


const EfficiencyAnalytics = () => {

    const chartContainerValues = [
        {
            title:"Average Response Time",
            color:"#F05D23",
            sidebar1Title:"Average Response Time",
            sidebar1Value:"30 Mins",
            sidebar2Title: "Response Time",
            sidebar2Value: "1 Hour 30 Mins"
        },
        {
            title:"Replies per resolution",
            color:"#3E68FF",
            sidebar1Title:"Average Replies",
            sidebar1Value:"30 Mins",
            sidebar2Title: "Response Time",
            sidebar2Value: "1 Hour 30 Mins"
        },
        {
            title:"Average resolution time",
            color:"#FB6491",
            sidebar1Title:"Average Response Rate",
            sidebar1Value:"30 Mins",
            sidebar2Title: "Response Time",
            sidebar2Value: "1 Hour 30 Mins"
        },
        {
            title:"First contact resolution rate",
            color:"#07C9E2",
            sidebar1Title:"Average Contact Rate",
            sidebar1Value:"30 Mins",
            sidebar2Title: "Response Time",
            sidebar2Value: "1 Hour 30 Mins"
        }
    ]

    return (
        <>
            <div className="analytics my-3 d-flex align-items-center justify-content-between">
                        <div className="header-text">
                            Efficiency Analytics
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="form-container mr-3">
                                <AiOutlineSearch className="search-icons" />
                                <label htmlFor="textInput"></label>
                                <input type="text" className="search-text" placeholder="Search" id="textInput"  />
                                
                            </div>
                            <div className="mx-4"> 
                              
                                <DropdownButton  variant="white" title="Filter Options">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div>
                                <button className="export">Export</button>
                            </div>
                        </div>
                    </div>
                 
                    {
                        chartContainerValues.map((container) => (
                            <ChartContainer
                            key={container.color}
                            title={container.title}
                            color={container.color}
                            sidebar1Title={container.sidebar1Title}
                            sidebar1Value = {container.sidebar1Value}
                            sidebar2Title=  {container.sidebar2Title}
                            sidebar2Value = {container.sidebar2Value}
                     
                     />
                        ))
                    }
        </>
    )
}

export default EfficiencyAnalytics