import React from 'react';
import'../css/Home.css';
import'../css/reset.css';

const Head = () => {
var menua = 'color: white, font-size: 2.5rem,';
var reresera ='color: white, font-size: 1.5rem, margin-right: 1.5rem,';
    return ( <div className="up_header">
    <div className="header">
        <div className="header_left">
            <a style={{menua}} href="/">NARSHA</a>
        </div>
        <div className="header_right">
            <a href="search" style={{reresera}}>예약조회</a>
        </div>
    </div>
</div> );
};

export default Head;