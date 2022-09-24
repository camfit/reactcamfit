import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import cookies from 'react-cookies';
import a33 from '../img/123.png'

const Signup = () => {
    const [alert,setAlert] = useState('');
    const [mydata, setMydata] = useState({
        username:"qwerqwer", 
        password:"password",
        confirmpassword:"password",
        phoneNumber:"",
        dateOfBirth:"2022-09-21",
        gender:"남"});
    let navigate = useNavigate();

    const useSavefn=()=>{
        axios.post("http://localhost:8080/member/join", mydata)
        .then( 
            // 22020917 pmh 해야함
            (result)=>{
                console.log(result);
                const expires = new Date();
                    // 년도 설정, 현재의 년도를 가져와 +10을 해서 2032가 됨
                    expires.setFullYear(expires.getFullYear() + 10);
                    cookies.save('memberId', '11',   
                    {
                        path: '/',        // 쿠키 값을 저장하는 서버 경로
                        expires,          // 유효 시간
                        //secure: true,   // 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키 저장
                        //httpOnly: true  // document.cookie라는 자바스크립트 코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션
                    }
                )
                navigate("/");
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
        <div className="container">
            <div className="content">
            <p className="aa">회원가입</p>
            <form>
            <p className="bbb"> 아이디 </p><input  id="aaa" className="asd" type="text" name="username"
                        onChange={ 
                            (e)=>{  mydata.username = e.target.value; setMydata(mydata); }
                        }/>{alert}
                <p className="bbb"> 비밀번호 </p><input  id="aaa" className="asd" type="password" name="password" onChange={ 
                            (e)=>{  mydata.password = e.target.value; setMydata(mydata); }
                        }/>
                <p className="bbb"> 비밀번호 확인 </p><input  id="aaa"className="asd" type="password" name="password" onChange={ 
                            (e)=>{  mydata.confirmpassword = e.target.value; setMydata(mydata); }
                        } />
                <p className="bbb" id="aaa" >성별: 남<input type="radio" name="gender" value="남"checked onChange={ (e)=>{
                            mydata.gender="남";
                            setMydata(mydata);
                        }
                    } />
                여<input type="radio" name="gender" value="여" onChange={ (e)=>{ 
                            mydata.gender="여";
                            setMydata(mydata);
                        }
                    } /></p>
                <p className='bbb' >생년월일</p>
                <p><input className="asd" id="aaa" type="date" value={mydata.dateOfBirth} style = {{padding: '0.5rem',}} 
                name="dateOfBirth" onChange={ (e)=>{ 
                    setMydata( { username:mydata.username, 
                            password:mydata.password, 
                            confirmpassword:e.target.confirmpassword,
                            phoneNumber:mydata.phoneNumber,
                            dateOfBirth:e.target.value,
                            gender:mydata.gender} );
                    }  
                } /><br/><br/></p>
                <p className="bbb" >전화번호</p><input className="asd" id="aaa" type="text" onChange={ 
                            (e)=>{  mydata.phoneNumber = e.target.value; setMydata(mydata); }
                        }/><br/>
                <input className="btn" type="button" value="회원가입" onClick={useSavefn}/>
            </form>
            <img style={{paddingBottom: '5rem'}} src={a33} alt="배경화면"></img>
        </div>
    </div>
    );
}
export default Signup;