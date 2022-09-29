import a33 from '../img/123.png'
const Manager = () => {
    return (
        <div className="container">
            <div className="content">
                <p className="aa">Camping Guide<br />관리자</p>
                <p className="aaa">캠핑장 등록 승인하기</p>
                <p className="bbb" id="aaa">캠핑장 등록을 승인하시겠습니까?</p>
                <a className="btn"href="signin">예</a>
                <a className="btn" style={{ marginLeft: '0.8rem', }} href="signup">아니요</a>
                <img src={a33} alt="배경화면"></img>
            </div>
        </div>
    );
}
export default Manager;