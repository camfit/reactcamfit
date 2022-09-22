const Signin = () => {
    return (
<div className="container">
<div className="content">
    <p className="aaa">로그인해서 많은 기능을 누려보세요!</p><br/>
    아이디 <input name="username" type="text"/><br/><br/>
    비밀번호 <input name="password" type="password"/><br/>
    <input class="btn" type="submit" value="로그인"/>
</div>
</div>
);
}
export default Signin;