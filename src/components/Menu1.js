import { useEffect, useState } from 'react'
import a11 from '../img/111.jpg'
import a22 from '../img/222.jpg'
import a33 from '../img/333.jpg'

import axios from 'axios';

const Menu1 = () => {

    const [camps,setCamps] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/camp/list')
        .then((result)=>{
            setCamps(result.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    },[]);

    const [mdate,setMdate] = useState("2022-05-26");
    return (
        <div className="container">
            <div className="content">
                <p className="aa">Camping Guide<br />캠핑장 예약</p>
                <form>
                    <label className="bbb qqq">날짜 </label>
                    <p id="aaa"><input type="date"  className='asd'
                            style={{padding: '0.5rem'}} 
                            value={mdate}
                            onChange={ (e)=>{ 
                                setMdate(e.target.value);
                            }} 
                            /></p>
                    <label id="aaa">지역<br/></label>
                    <input type="checkbox" id="vehicle1" />
                    <label htmlFor="vehicle1">서울</label>
                    <input type="checkbox" id="vehicle2" />
                    <label htmlFor="vehicle2">경기도</label><br /><br />
                    <input type="checkbox" id="vehicle3" />
                    <label htmlFor="vehicle3">강원도</label>
                    <input type="checkbox" id="vehicle4" />
                    <label htmlFor="vehicle4">충청도</label><br /><br />
                    <input type="checkbox" id="vehicle5" />
                    <label htmlFor="vehicle5">전라남도</label>
                    <input type="checkbox" id="vehicle6" />
                    <label htmlFor="vehicle6">전라북도</label><br /><br />
                    <input type="checkbox" id="vehicle7" />
                    <label htmlFor="vehicle7">경상남도</label>
                    <input type="checkbox" id="vehicle8" />
                    <label htmlFor="vehicle8">경상북도</label><br /><br />
                    <input style={{height: '43px', paddingLeft: '20px', display: 'inline',
        boxSizing: 'border-box',}} className="asd" type="text" placeholder="캠핑장 검색" /><br />
                    <a href="search" className="btn" type="submit">실시간 검색</a>
                </form>
                
            {
                 camps.map((row)=>{
                    return (
                        <div key={row.id}>
                        <p className='aaa'>{row.name}</p>
                        <img src={a33} alt="a33"/>
                        <p className="bbb">{row.explanation}</p>
                        <p className="ccc">{row.area}</p>
                        </div>
                    )
                 })             
            }

            <p className="bbb">캠핑장 설명 2</p>
            <p className="ccc">캠핑장2: OO군</p>
            <p className="aaa">추천 캠핑장 3</p>


            <img src={a11} alt="a11" />
            <p className="bbb">캠핑장 설명 3</p>
            <p className="ccc">캠핑장3: OO군</p>
            </div>
        </div>          
    );
}
export default Menu1;