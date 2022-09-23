import a33 from '../img/123.png'
const Menu3 = () => {
    return (
        <div className="container">
        <div className="content">
        <p className="aa">Camping Guide<br />마이페이지</p>
        <p className="aaa">회원 정보 확인하기</p>
                    <p className="bbb" id="aaa">회원가입을 하면 많은 기능을 사용할 수 있습니다.</p>
                    <a className="btn"href="signin">로그인</a>
                    <a className="btn" style={{ marginLeft: '0.8rem', }} href="signup">회원가입</a>
                    <img src={a33}></img>
        </div>
        </div>
    );
}
export default Menu3;