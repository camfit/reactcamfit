import a33 from '../img/123.png'
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Signin = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
    const onClickLogin = () => {
        console.log('click login')
        console.log('ID : ', inputId)
        console.log('PW : ', inputPw)
        axios.post('/user_inform/onLogin', null, {
            params: {
            'username': inputId,
            'password': inputPw
            }
        })
        .then(res => {
            console.log(res)
            console.log('res.data.userId :: ', res.data.userId)
            console.log('res.data.msg :: ', res.data.msg)
            if(res.data.userId === undefined){
                // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                console.log('======================',res.data.msg)
                alert('입력하신 id 가 일치하지 않습니다.')
            } else if(res.data.userId === null){
                // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
                console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
                alert('입력하신 비밀번호 가 일치하지 않습니다.')
            } else if(res.data.userId === inputId) {
                // id, pw 모두 일치 userId = userId1, msg = undefined
                console.log('======================','로그인 성공')
                sessionStorage.setItem('user_id', inputId)
            }
            // 작업 완료 되면 페이지 이동(새로고침)
            document.location.href = '/'
        })
        .catch()
    }
 
     useEffect(() => {
         axios.get('/user_inform/login')
         .then(res => console.log(res))
         .catch()
     },[])

    return (
    <div className="container">
        <div className="content">
            <p className="aaa" id="aaa">로그인해서 많은 기능을 누려보세요!</p>
            <p className="bbb"> 아이디 </p><input id="aaa" className="asd" value={inputId} onChange={handleInputId} name="username" type="text"/>
            <p className="bbb"> 비밀번호 </p><input id="aaa" className="asd" value={inputPw} onChange={handleInputPw} name="password" type="password"/><br/>
            <input class="btn" type="submit" onClick={onClickLogin} value="로그인"/>
            <img src={a33} alt="배경화면"></img>
        </div>
    </div>
);
}
export default Signin;