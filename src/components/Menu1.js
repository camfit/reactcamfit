import a11 from '../img/111.jpg'
import a22 from '../img/222.jpg'
import a33 from '../img/333.jpg'

const Menu1 = () => {
    return (<div>
        <div id="root">
            <div class="container">
                <div class="sub_container">
                    <div class="content">
                        <p><br />나르샤 프로젝트<br />실시간예약</p>
                        <form>
                            <label>날짜 </label>
                            <p><input type="date" style={{padding: '0.5rem'}} value="2022-5-26" /></p>
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
                            <input style={{height: '43px', paddingLeft: '20px', display: 'inline',
                boxSizing: 'border-box',}} class="www" type="text" placeholder="캠핑장 검색" /><br />
                            <a href="search" class="rrr" type="submit">실시간 검색</a>
                        </form>
                        <p>추천 캠핑장</p>
                        <div>
                            <img class="www" src={a11} alt="제천워터파크캠핑랜드(구.제천캠핑랜드)" />
                            <p>구봉산오토캠핑장 나인힐스 4만원</p>
                            <p>경기 용인시</p><br /><br /><br />
                            <img class="www" src={a22} alt="제천워터파크캠핑랜드(구.제천캠핑랜드)" />
                            <p>제천워터파크캠핑랜드(구.제천캠핑랜드) 13만원 </p>
                            <p>충북 제천시</p><br /><br /><br /><br />
                        </div>
                        <p>최근 본 캠핑장<br /></p>
                        <img class="www" src={a33} alt="구봉산오토캠핑장 나인힐스" />
                        <h1>구봉산오토캠핑장 나인힐스 4만원</h1>
                        <h1>경기 용인시</h1><br /><br /><br />
                        <button class="rrr" type="submit">최근 본 캠핑장 기록 삭제</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Menu1;