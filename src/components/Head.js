import React from 'react';
import'../css/Home.css';
import'../css/reset.css';

const Head = () => { 
    return ( <div className="head">
        <div className="head_L">
            <a href="/">Narsha</a>
        </div>
        <div className="head_R">
            <a href="search">예약조회</a>
        </div>
    </div>);
};

export default Head;