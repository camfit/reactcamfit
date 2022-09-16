import a01 from '../img/수영장.jpg'
import a02 from '../img/캠핑장.png'
import b02 from '../img/캠핑장2.jpg'
import a03 from '../img/온천.png'
import c01 from '../img/bx_car1.png'
import c02 from '../img/bx_car2.png'
import c03 from '../img/bx_car3.png'

const Index = () => {
    return (<div>
        <div id="root">
            <div className="container">
                <div className="sub_container">
                    <div className="content">
                        <p><br />나르샤에서 <br />막힘없이 캠핑가자</p>
                        <div className="searchbtn">
                            <input style={{ height: '43px', paddingLeft: '20px', display: 'inline !important', boxSizing: 'border-box' }} className="www" type="text" placeholder="캠핑장 검색" />
                        </div>
                        <a href="search" class="rrr" type="submit">캠핑장 검색</a>
                        <div className="slider">
                        </div>
                        <a style={{color: 'black', backgroundColor: 'wh', fontSize: '2.0rem', padding: '5px 20px', borderRadius: '15px',border: '3px solid #000000',}} href="menu3">공유하기</a>
                        <p>캠핑 BEST PHOTO <a href="#" style={{color: '#0f8'}}>{'>>>'}</a></p><br />
                        <p>캠핑 다녀오셨나요? 추억을 남겨보세요!</p>
                        <div className="aa">
                            <div>
                                <a href="menu.jsp">
                                    <img src={a02} />
                                </a>
                            </div>
                            <div>
                                <a href="menu3.jsp">
                                    <img src={a01} />
                                </a>
                            </div>
                            <div> <a href="menu4.jsp">
                                <img src={a03} />
                            </a></div>
                            <p>캠핑 Magazine <a href="#">{'>>'}</a></p>
                            <div className="bb">
                                <div><img src={b02} /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>);
}

export default Index;


