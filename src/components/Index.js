import { useEffect } from 'react';
import axios from 'axios';
import a01 from '../img/수영장.jpg'
import a02 from '../img/캠핑장.png'
import b02 from '../img/캠핑장2.jpg'
import a03 from '../img/온천.png'
import c01 from '../img/bx_car1.png'
import c02 from '../img/bx_car2.png'
import c03 from '../img/bx_car3.png'

import cookies from 'react-cookies';

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
const expires = new Date();
    // 년도 설정, 현재의 년도를 가져와 +10을 해서 2032가 됨
    expires.setFullYear(expires.getFullYear() + 10);
    cookies.save('userid', 'coadingHospital',   
    {
        path: '/',        // 쿠키 값을 저장하는 서버 경로
        expires,          // 유효 시간
        //secure: true,   // 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키 저장
        //httpOnly: true  // document.cookie라는 자바스크립트 코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션
    }
)

const myid = getCookie('userid');
console.log(myid)
var test = {"content":"content"}

axios.get('http://localhost:8080/board/list',test).then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})

const mydata = {username:"eee",password:"password"}

const Index = () => {
    useEffect(()=>{
        axios.post("http://localhost:8080/member/join", mydata)
    },[]);
    return ( <div>
    <div id="root">
        <div className="container">
            <div className="subcontainer">
                <div className="content">
                    <p><br/>나르샤에서 <br/>막힘없이 캠핑가자</p>
                    <div className="searchbtn">
                        <input style={{height: '43px', paddingLeft: '20px', display: 'inline !important', boxSizing: 'border-box'}} className="www" type="text" placeholder="캠핑장 검색"/>
                    </div>
                    <a href="search" className="rrr" type="submit">캠핑장 검색</a>
                    <div className="slider">
                        <div><img src={c01} alt="c01"/></div>
                        <div><img src={c02} alt="c02"/></div>
                        <div><img src={c03} alt="c03"/></div>
                    </div>
                            <a href="menu2">공유하기</a>
                        <h2>캠핑 BEST PHOTO <a href="#">{'>>>'}</a></h2><br/>
                        <p>캠핑 다녀오셨나요? 추억을 남겨보세요!</p>
                        <div className="aa">
                            <div>
                                <a href="menu.jsp">
                                    <img src={a02} alt="a02"/>
                                </a>
                            </div>
                            <div>
                                <a href="menu3.jsp">
                                    <img src={a01} alt="a01"/>
                                </a>
                            </div>
                            <div> <a href="menu4.jsp">
                                <img src={a03} alt="a03"/>
                            </a></div>
                        <h2>캠핑 Magazine <a href="#">{'>>'}</a></h2>
                        <div className="bb">
                            <div><img src={b02} alt="b02" /></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div> );
}

export default Index;


