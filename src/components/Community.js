const Community = () => {
    return (
<div id="root">
    <div class="container">
        <div class="content">
            <p><br/>커뮤니티 글 작성하기</p>
            <textarea rows="15" cols="15" style={{width: '100%', fontSize: '1.5rem', padding: '0.3rem', boxSizing: 'borderbox',
                fontFamily: 'jua, sanserif',}} placeholder='캠핑장의 후기를 적어보세요!'></textarea>
            <input type="sublit" class="rrr" value="저장"/>
            <input type="file" />
        </div>
    </div>
</div>
);
}
export default Community;