const Signup = () => {
    return (
        <div id="root">
        <div className="container">
            <div className="content">
            <p><br/>회원가입</p>
            <form>
                아이디 <input type="text" name="username"/><br/><br/>
                비밀번호 <input type="password" name="password"/><br/><br/>
                비밀번호 확인 <input type="password" name="password"/><br/><br/>
                성별: 남 <input type="radio" name="gender" value="남"/>
                여 <input type="radio" name="gender" value="여"/><br/>
                <h1><br/>생년월일<br/></h1>
                <p><input type="date" value="2000-01-01" style = {{padding: '0.5rem',}}/><br/><br/></p>
                전화번호 <input type="text"/><br/>
                <input classsName="rrr" type="submit" value="회원가입"/>
            </form>
        </div>
    </div>
    </div>
    );
}
export default Signup;