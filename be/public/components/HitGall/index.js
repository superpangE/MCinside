import { getContainer, getimgElment, getInputElement, getButton, getLabel, getSpan, getLink } from "../common.js";

const getHitContent = (Board) => {
    const HitContent = getSpan(null, "hitgall_hitcontent");
    const ContentImg = getimgElment(Board.imgUrl);
    const ContentTitle = getLabel("hitgall_title", Board.title);
    const contentAuthor = getLabel("hitgall_title", Board.gallName);
    HitContent.insertAdjacentElement("beforeend", ContentImg);
    HitContent.insertAdjacentElement("beforeend", ContentTitle);
    HitContent.insertAdjacentElement("beforeend", contentAuthor);
    return HitContent;
}

const HitGall = async () => {
    const Container = getContainer(null, "hitgall_container");
    const TitleWrap =  getContainer(null, "hitgall_titlewrap");
    const ContentWrap = getContainer(null, "hitgall_contentwrap");

    const HitLabel = getLabel("hitgall_title_labe", "Hit 갤러리");
    TitleWrap.insertAdjacentElement("beforeend", HitLabel);
    
    const URL = "http://localhost:3000/board";
    const response = await fetch(URL, {
        method: "get",
    });
    const boardData = await response.json();

    for(let i = 0;i < 3 ;i++){
        ContentWrap.insertAdjacentElement("beforeend", getHitContent(boardData.board[i]));
    }

    Container.insertAdjacentElement("beforeend", TitleWrap);
    Container.insertAdjacentElement("beforeend", ContentWrap);

    return Container;
};

export default HitGall;