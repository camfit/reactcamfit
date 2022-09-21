
import a11 from '../img/111.jpg'
import a22 from '../img/222.jpg'
import a33 from '../img/333.jpg'
const Menu2 = () => {
    return (
        <div id="root">
            <div className="container">
                <div className="content">
                    <p className="aa"><br />나르샤 프로젝트<br />커뮤니티</p><br /><br />
                    <input className="asd" type="text" placeholder="게시물 찾기" /><br />
                    <a href="#" className="rrr" type="submit">게시물 검색</a>
                    <p className="aaa">커뮤니티 제목</p><br />
                    <img src={a33} />
                    <p className="bbb">커뮤니티 내용.</p><br />
                    <p className="ccc">캠핑장1: OO군</p>
                    <p className="aaa">커뮤니티 제목2</p><br />
                    <img src={a22}/>
                    <h1>커뮤니티 내용2</h1><br />
                    <h1 style={{ textAlign: 'right', }}>캠핑장2: OO군</h1>
                    <p className="aaa">커뮤니티 제목3</p><br />
                    <img src={a11} />
                    <p>커뮤니티 내용3</p><br />
                    <p className="ccc">캠핑장3: OO군</p>
                    <a href="community" className="rrr" type="submit">커뮤니티 글 작성하기</a>
                </div>
            </div>
        </div>
    );
}
export default Menu2;