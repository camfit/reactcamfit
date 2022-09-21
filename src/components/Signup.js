import axios from 'axios';
import { useState } from 'react';
// import { useNavigate   } from 'react-router-dom';

const Signup = () => {
    const [alert,setAlert] = useState('');
    const [mydata, setMydata] = useState({
        username:"qwerqwer", 
        password:"password",
        confirmpassword:"password"});

    const savefn=()=>{
        // const navigate = useNavigate();
        axios.post("http://localhost:8080/member/join", mydata)
        .then( 
            // 22020917 pmh 해야함
            (result)=>{
                console.log(result);
                // navigate('/');
            }
        )
        .catch( (e)=>{ 
            console.log(e.response.data)
            if(e.response.data ==='이미 존재하는 이름입니다.'){
                setAlert('이미 존재하는 회원 이름입니다.');
            }
            else{
               
            }
        });
    };

    return (
        <div id="root">
        <div className="container">
            <div className="content">
            <p><br/>회원가입</p>
            <form>
                아이디 <input type="text" name="username"
                        value={mydata.username} 
                        onChange={ 
                            (e)=>{ setMydata( { username:e.target.value, password:mydata.password, confirmpassword:mydata.confirmpassword } )}
                        }/>{alert}<br/><br/>
                비밀번호 <input type="password" name="password" onChange={ 
                            (e)=>{ setMydata( { username:mydata.username, password:e.target.value, confirmpassword:mydata.confirmpassword } )}
                        }/><br/><br/>
                비밀번호 확인 <input type="password" name="password" onChange={ 
                            (e)=>{ setMydata( { username:mydata.username, password:mydata.password, confirmpassword:e.target.confirmpassword} )}
                        } /><br/><br/>
                성별: 남 <input type="radio" name="gender" value="남"  onChange={ (e)=>{ console.log(e.target.value)}} />
                여 <input type="radio" name="gender" value="여"  onChange={ (e)=>{ console.log(e.target.value)}} /><br/>
                <h1><br/>생년월일<br/></h1>
                <p><input type="date" value="2000-01-01" style = {{padding: '0.5rem',}}  onChange={ (e)=>{ console.log(e.target.value)}} /><br/><br/></p>
                전화번호 <input type="text"/><br/>
                <input className="rrr" type="button" value="회원가입" onClick={savefn}/>
            </form>
        </div>
    </div>
    </div>
    );
}
export default Signup;