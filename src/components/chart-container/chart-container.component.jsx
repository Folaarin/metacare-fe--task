import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import ChartPage from "../chart/chart.component";
import SideData from "../side-data/side-data.component";
import './chart-container.styles.css';


const ChartContainer = ({title, color, sidebar1Title, sidebar1Value, sidebar2Title, sidebar2Value}) => {

    return (
        <div className="chart-wrapper mt-4">
                      <div className="chart-container pt-4 px-4 pb-2">
                        <div className="chart-header d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                              <div className="chart-title">
                                {title}
                              </div>
                              <div className="percentage-cont">
                                +4.14%
                              </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="priority-box" style={{height:'10px', width:'10px', borderRadius:'2px', background:color}}></div>
                            <div className="ml-3 priority-text" >High Priority</div>
                            <div className="divider mx-3"></div>
                            <div className="date mt-1 d-flex align-items-center">
                              <label class="date-label" htmlFor="custom-date">
                                <div>This month</div>
                                <div>
                                  <AiOutlineCalendar />
                                </div>
                              </label>
                              <input type="date" name="" id="custom-date" />
                            </div>
                          </div>
                        </div>
                        <div className="chart-body w-100">
                         
                            <ChartPage  color={color} />
                          
                        </div>
                      </div>
                      <div className="chart-side">
                        <SideData title={sidebar1Title} value={sidebar1Value} />
                        <SideData title={sidebar2Title} value={sidebar2Value} />
                      </div>
                    </div>
    )
}

export default ChartContainer