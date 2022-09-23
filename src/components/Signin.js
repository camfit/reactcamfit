import a33 from '../img/123.png'
const Signin = () => {
    return (
<div className="container">
<div className="content">
    <p className="aaa" id="aaa">로그인해서 많은 기능을 누려보세요!</p>
    <p className="bbb"> 아이디 </p><input id="aaa" className="asd" name="username" type="text"/>
    <p className="bbb"> 비밀번호 </p><input id="aaa" className="asd" name="password" type="password"/><br/>
    <input class="btn" type="submit" value="로그인"/>
    <img src={a33}></img>
</div>
</div>
);
}
export default Signin;