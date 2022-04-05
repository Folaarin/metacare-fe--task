import React from "react";
import './homepage.styles.css';
import  { AiOutlineBell,  AiOutlineDown, AiOutlineSearch,  }  from 'react-icons/ai';

import TabsHome from "../../components/tabs/tabs.component";
import Sidebar from "../../components/sidebar/sidebar.component";


  
   

const Homepage = () => {
    return (
        <div className="container-fluid home-wrapper">
            <Sidebar />
            <div className="main-content">
                <div className="main-header">
                     <div className="header-form">
                         <label htmlFor="headerInput"></label>
                         <input class="header-input" type="text" placeholder="Ask us any question" id="header-input" />
                         <AiOutlineSearch className="search-icon" />
                     </div>
                     <div>
                         <div className="right-container">
                             <div className="d-flex align-items-center">
                                 <AiOutlineBell size="0.9em" />
                                 <div className="number-container">
                                     3
                                 </div>
                             </div>
                             <div className="demarcation"></div>
                             <div className="d-flex align-items-center">
                                 <div className="image-container">
    
                                 </div>
                                 <AiOutlineDown size="0.6em" class="ml-2" />
                             </div>
                         </div>
                     </div>
                </div>
                <hr />
                <TabsHome />
            </div>
            
            
        </div>
    )
    
}



export default Homepage