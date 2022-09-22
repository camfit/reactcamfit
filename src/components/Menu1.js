import a11 from '../img/111.jpg'
import a22 from '../img/222.jpg'
import a33 from '../img/333.jpg'

const Menu1 = () => {
    return (
            <div className="container">
                    <div className="content">
                        <p className="aa">Camping Guide<br />실시간예약</p>
                        <form>
                            <label>날짜 </label>
                            <p><input type="date" class="asd"value="2022-5-26" /></p>
                            <label><br /><br />지역</label>
                            <br /><br />
                            <input type="checkbox" id="vehicle1" />
                            <label for="vehicle1">서울</label>
                            <input type="checkbox" id="vehicle2" />
                            <label for="vehicle2">경기도</label><br /><br />
                            <input type="checkbox" id="vehicle3" />
                            <label for="vehicle3">강원도</label>
                            <input type="checkbox" id="vehicle4" />
                            <label for="vehicle4">충청도</label><br /><br />
                            <input type="checkbox" id="vehicle5" />
                            <label for="vehicle5">전라남도</label>
                            <input type="checkbox" id="vehicle6" />
                            <label for="vehicle6">전라북도</label><br /><br />
                            <input type="checkbox" id="vehicle7" />
                            <label for="vehicle7">경상남도</label>
                            <input type="checkbox" id="vehicle8" />
                            <label for="vehicle8">경상북도</label><br /><br />
                            <input  class="asd" type="text" placeholder="캠핑장 검색" /><br />
                            <a href="search" class="btn" type="submit">실시간 검색</a>
                        </form>
                        <p className="aaa">추천 캠핑장 1</p><br />
                    <img src={a33} />
                    <p className="bbb">캠핑장 설명 1</p><br />
                    <p className="ccc">캠핑장1: OO군</p>
                    <p className="aaa">추천 캠핑장 2</p><br />
                    <img src={a22}/>
                    <p className="bbb">캠핑장 설명 2</p><br />
                    <p className="ccc">캠핑장2: OO군</p>
                    <p className="aaa">추천 캠핑장 3</p><br />
                    <img src={a11} />
                    <p>캠핑장 설명 3</p><br />
                    <p className="ccc">캠핑장3: OO군</p>
                        </div>
                    </div>
    );
}
export default Menu1;