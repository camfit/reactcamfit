import a01 from '../img/수영장.jpg'
import a02 from '../img/캠핑장.png'
import b02 from '../img/캠핑장2.jpg'
import a03 from '../img/온천.png'
import c01 from '../img/bx_car1.png'
import c02 from '../img/bx_car2.png'
import c03 from '../img/bx_car3.png'

const Index = () => {
    return ( <div>
    <div id="root">
        <div class="container">
            <div class="sub_container">
                <div class="content">
                    <p><br/>나르샤에서 <br/>막힘없이 캠핑가자</p>
                    <div class="searchbtn">
                        <input style={{height: '43px', paddingLeft: '20px', display: 'inline !important',                boxSizing: 'border-box'}} className="www" type="text" placeholder="캠핑장 검색"/>
                    </div>
                    <a href="search" class="rrr" type="submit">캠핑장 검색</a>
                    <div class="slider">
                        <div><img src={c01}/></div>
                        <div><img src={c02}/></div>
                        <div><img src={c03} alt=""/></div>
                    </div>
                            <a href="menu2">공유하기</a>
                        <h2>캠핑 BEST PHOTO <a href="#">{'>>>'}</a></h2><br/>
                        <p>캠핑 다녀오셨나요? 추억을 남겨보세요!</p>
                        <div class="aa">
                            <div>
                                <a href="menu.jsp">
                                    <img src={a02} />
                                </a>
                            </div>
                            <div>
                                <a href="menu3.jsp">
                                    <img src={a01}/>
                                </a>
                            </div>
                            <div> <a href="menu4.jsp">
                                <img src={a03} />
                            </a></div>
                        <h2>캠핑 Magazine <a href="#">{'>>'}</a></h2>
                        <div class="bb">
                            <div><img src={b02} /></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div> );
}

export default Index;


