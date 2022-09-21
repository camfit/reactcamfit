import React from 'react';
import'../css/Home.css';
import'../css/reset.css';

const Head = () => { 
    return ( <div className="head">
    <div className="header">
        <div className="header_left">
            <a style={{color: 'black', fontSize: '2.0rem',}} href="/">NARSHA</a>
        </div>
        <div className="header_right">
            <a href="search" style={{color: 'black',fontSize:'1.5rem', marginRight: '1.5rem',}}>예약조회</a>
        </div>
    </div>
</div> );
};

export default Head;