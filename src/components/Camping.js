const Camping = () => {
    return (
        <div className="container">
            <div className="content">
                <p className="aa">Camping Guide<br/>캠핑장 등록</p>
                <p className="aaa" id="aaa">캠핑장을 등록하세요!</p>
                <p className="bbb"> 캠핑장 이름 </p><input  id="aaa" className="asd" type="text" name="username"></input>
                <p className="bbb"> 캠핑장 주소 </p><input  id="aaa" className="asd" type="text" name="username"></input>
                <p className="bbb"> 캠핑장 최대 수용인원 </p><input  id="aaa" className="asd" type="text" name="username"></input>
                <p className="aaa"> 캠핑장 소개 </p><textarea rows={5} cols={60}></textarea>
                <p className="bbb">캠핑장 사진</p>
                <input type="file" className='p50'></input>
            </div>
        </div>
);
}
export default Camping;