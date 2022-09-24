import a33 from '../img/123.png'
const Community = () => {
    return (
        <div className="container">
        <div className="content">
            <p className="aaa" id="aaa">커뮤니티 글 작성하기!</p>
            <textarea rows={5} cols={60}></textarea>
            <div>
                <input type="submit" value="저장하기" className="asd p50"></input>
            </div>
            <div>
                <input type="file" className='p50'></input>
            </div>
            <img src={a33} alt="배경화면"></img>
        </div>
    </div>
);
}
export default Community;