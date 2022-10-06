import a33 from '../img/123.png'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const Community = () => {
    let navigate = useNavigate();

    const [mydata, setMydata] = useState({
        title:"qwerqwer", 
        content:"contentntnentnent",
        memberId:"12",
        attachmentFiles:"",
    });

    const useSavefn=()=>{
        axios.post("http://localhost:8080/board/post", mydata)
        .then( 
            (result)=>{
                navigate("/");
            }
        )
        .catch( (e)=>{ 
            console.log(e.response.data)
        });
    }

    return (
        <div className="container">
        <div className="content">
        <p className="aa">커뮤니티 게시물<br/>작성하기!</p>
        <p className="aaa" id="aaa">제목</p>
        <textarea rows={2} cols={30}
                    ></textarea>
            <p className="aaa" id="aaa">내용</p>
            <textarea rows={5} cols={60} onChange={ (e)=>{
                            mydata.content=e.target.value;
                            setMydata(mydata);
                        }
                    }></textarea>
            <div>
                <input type="submit" value="저장하기" className="asd p50" onClick={useSavefn}></input>
            </div>
            <div>
                <input type="file" className='p50' ></input>
            </div>
            <img src={a33} alt="배경화면"></img>
        </div>
    </div>
);
}
export default Community;