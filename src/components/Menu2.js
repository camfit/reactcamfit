import axios  from 'axios';

import a11 from '../img/111.jpg'
import a22 from '../img/222.jpg'
import a33 from '../img/333.jpg'

axios.get('http://localhost:8080/board/list').then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
});

const Menu2 = () => {
    return (
        <div className="container">
            <div className="content">
                <p><br/>나르샤 프로젝트<br/>커뮤니티</p><br/><br/>
                <input style={{height: '43px', paddingleft: '20px', display: 'inline !important',
            boxsizing: 'border-box',}} className="www" type="text" placeholder="게시물 찾기"/><br/>
                <a href="javascript:void(0);" className="rrr" type="submit">게시물 검색</a><br/><br/><br/><br/><br/>
                <h1 style={{fontSize: '24px',}}>커뮤니티 제목</h1><br/>
                <img className="www" src={a33} alt="구봉산오토캠핑장 나인힐스"/>
                <h1>커뮤니티 내용.</h1><br/>
                <h1 style={{textAlign: 'right',}}>캠핑장1: OO군</h1><br/><br/><br/>
                <h1 style={{fontSize: '24px',}}>커뮤니티 제목2</h1><br/>
                <img className="www" src={a22} alt="구봉산오토캠핑장 나인힐스"/>
                <h1>커뮤니티 내용2</h1><br/>
                <h1 style={{textAlign: 'right',}}>캠핑장2: OO군</h1><br/><br/><br/>
                <h1 style={{fontSize: '24px',}}>커뮤니티 제목3</h1><br/>
                <img className="www" src={a11}/>
                <h1>커뮤니티 내용3</h1><br/>
                <h1 style={{textAlign: 'right',}}>캠핑장3: OO군</h1><br/><br/><br/>
                <a href="community" className="rrr" type="submit">커뮤니티 글 작성하기</a>
            </div>
        </div>
    );
}
export default Menu2;