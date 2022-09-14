import axios from 'axios';

axios.get('https://localhost:8080/board/list').then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})

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
                        <div><img src="img/bx_car1.png"/></div>
                        <div><img src="img/bx_car2.png"/></div>
                        <div><img src="img/bx_car3.png" alt=""/></div>
                    </div>
                    <div class="img_upload">
                        <div class="share">
                            <a href="menu2">공유하기</a>
                        </div>
                        <h2>캠핑 BEST PHOTO <a href="#">{'>>>'}</a></h2><br/>
                        <p>캠핑 다녀오셨나요? 추억을 남겨보세요!</p>
                        <div class="aa">
                            <div>
                                <a href="menu.jsp">
                                    <img src="img/캠핑장.png" />
                                </a>
                            </div>
                            <div>
                                <a href="menu3.jsp">
                                    <img src="img/수영장.jpg"/>
                                </a>
                            </div>
                            <div> <a href="menu4.jsp">
                                <img src="img/온천.png" />
                            </a></div>

                        </div>
                        <h2>캠핑 Magazine <a href="#">{'>>'}</a></h2>
                        <div class="bb">
                            <div><img src="img/캠핑장2.jpg" /></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div> );
}

export default Index;


