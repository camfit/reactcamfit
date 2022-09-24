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
                    <p className="aa">Camping Guide<br />커뮤니티</p>
                    <input className="asd" type="text" placeholder="게시물 찾기" /><br />
                    <a href="#" className="btn" type="submit">게시물 검색</a>
                    <p className="aaa">커뮤니티 제목</p><br />
                    <img src={a33} />
                    <p className="bbb">커뮤니티 내용.</p><br />
                    <p className="ccc">캠핑장1: OO군</p>
                    <p className="aaa">커뮤니티 제목2</p><br />
                    <img src={a22}/>
                    <p className="bbb">커뮤니티 내용2</p><br />
                    <p className="ccc">캠핑장2: OO군</p>
                    <p className="aaa">커뮤니티 제목3</p><br />
                    <img src={a11} />
                    <p className="bbb">커뮤니티 내용3</p><br />
                    <p className="ccc">캠핑장3: OO군</p>
                    <a href="community" className="btn" type="submit">커뮤니티 글 작성하기</a>
                </div>
                </div>
    );
}
export default Menu2;