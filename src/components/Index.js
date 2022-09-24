import axios  from 'axios';

import a01 from '../img/수영장.jpg'
import a02 from '../img/캠핑장.png'
import b02 from '../img/캠핑장2.jpg'
import a03 from '../img/온천.png'
import a11 from '../img/111.jpg'
import a22 from '../img/222.jpg'
import a33 from '../img/333.jpg'

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

axios.get('http://localhost:8080/camp/list',test).then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})

const Index = () => {
   
    return (
        <div className="container">
                <div className="content">
                    <p className="aa">Camping Guide<br/>홈 화면</p>
                    <input type ="text" className="asd" ></input>
                    <a href="search" style={{marginLeft: '1rem'}} className="btn" type="submit">캠핑장 검색</a>
                    <p className="aaa">추천 캠핑장 [광고]</p><br />
                    <img src={a33} />
                    <p className="bbb">캠핑장 설명 1</p><br />
                    <p className="ccc">캠핑장1: OO군</p>
                    
                        <a className="btn" href="menu2">캠핑 다녀오셨나요? 추억을 남겨보세요!</a>
                        <p className="aaa">캠핑 BEST PHOTO <a className="aaa" href="#" style={{color: '#0f8'}}>{'>>>'}</a></p><br />
                                <a href="menu2">
                                    <img src={a02} alt="a02"/>
                                </a>
                                <a href="menu2">
                                    <img src={a01} alt="a01"/>
                                </a>
                            <a href="menu2">
                                <img src={a03} alt="a03"/>
                            </a>
                        </div>
                    </div>

);
}

export default Index;


