import a11 from '../img/111.jpg'
import a33 from '../img/123.png'
const Search = () => {
    return (
        <div class="container">
            <div class="content">
                <p className="aa" style={{ color: "blue", }}>캠핑장 예약
                    <br />화면</p>
                <p className="aaa">구지 캠핑장</p>
                <img src={a11} alt="a11" />
                <p className="bbb">캠핑장 설명 3</p>
                <p className="ccc">캠핑장3: OO군</p>
                <p className="aaa">캠핑장 인원 선택</p> <input className="asd p50" type="number" name="favnum" min="1" max="10" />
                <p className="aaa qqq" style={{ marginTop: "50px", }}>날짜</p>
                <input type="date" className='asd'
                    style={{ padding: '0.5rem' }}
                ></input><br />
                <a href="/" className="btn" type="submit">저장하기</a>
            </div>
        </div>

    );
}
export default Search;