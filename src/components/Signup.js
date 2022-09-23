import a33 from '../img/123.png'
const Signup = () => {
    return (
        <div className="container">
            <div className="content">
            <p className="aa">회원가입</p>
            <form>
            <p className="bbb"> 아이디 </p><input  id="aaa" className="asd" type="text" name="username"/>
            <p className="bbb"> 비밀번호 </p><input  id="aaa" className="asd" type="password" name="password"/>
            <p className="bbb"> 비밀번호 확인 </p><input  id="aaa"className="asd" type="password" name="password"/>
                <p className="bbb" id="aaa" >성별: 남<input type="radio" name="gender" value="남"/>
                여<input type="radio" name="gender" value="여"/></p>
                <p className='bbb' >생년월일</p>
                <input className="asd" id="aaa" type="date" value="2000-01-01" style = {{padding: '0.5rem',}}/>
                <p className="bbb" >전화번호</p><input className="asd" id="aaa" type="text"/><br/>
                <input className="btn" type="submit" value="회원가입"/>
            </form>
            <img style={{paddingBottom: '5rem'}} src={a33}></img>
        </div>
    </div>
    );
}
export default Signup;