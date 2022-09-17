import React from 'react';
import'../css/Home.css';
import'../css/reset.css';

const Head = () => { 
    return ( <div className="up_header">
    <div className="header">
        <div className="header_left">
            <a style={{color: 'white', fontSize: '2.0rem',}} href="/">NARSHA</a>
        </div>
        <div className="header_right">
            <a href="search" style={{color: 'white',fontSize:'1.5rem', marginRight: '1.5rem',}}>예약조회</a>
        </div>
    </div>
</div> );
};

export default Head;