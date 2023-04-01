import React from 'react';
import './Sidebar.css'

const Sidebar = ({readTime, titles, count}) => {    
    return ( 
        <div className="sidebar-wrapper"> 
            <h2 className='spent-title'>Spent time on read : <span>{readTime}</span> min</h2>
            <div className='sidebar'>  
                <h3>Bookmarked Blogs : <span>{count}</span></h3>
                <ul className='list-item'> 
                    {
                        titles.map((title, index) => <li key={index}>  
                            {title}  
                            </li> )
                    }
                    
                </ul>
            </div>  
        </div>
        
    );
};

export default Sidebar;