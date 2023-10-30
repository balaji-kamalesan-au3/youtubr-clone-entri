import renderChips from "./Chips";
import { useState } from 'react'
import Search from "./Search";
function VideoCard({ cardObj }) {
  return <div className="videoCard my-[5%] mx-[20px]">
    {/* Image Thumbnail */}
    <div className="imageThumbnail relative w-[400px]">
      <img src={cardObj.thumbnaliUrl} className="h-[230px] w-[400px] rounded-[10px] " alt="Image Thumbanail" />
      <div className="absolute bottom-[5px] right-[5px] bg-black text-white px-[5px] py-[1px] rounded-[6px] text-[12px] font-[500]">{cardObj.duration}</div>
    </div>
    {/* Video Data */}
    <div className="dataContainer flex w-[400px] my-[10px]">
      <div className="leftContainer  w-[15%]">
        <img src={cardObj.userImage} className="rounded-[50%] object-cover w-[40px] h-[40px]" />

      </div>
      <div className="rightContainer  w-[85%]">
        <div className="text-[#0f0f0f] font-[500] contrast text-[1.2rem]">{cardObj.title}</div>
        <div className="text-[#606060] text-[14px]">{cardObj.userName}</div>
        <div className="text-[#606060] text-[14px]">{cardObj.views} • {cardObj.datePosted} </div>
      </div>
    </div>
  </div>
}

export default function Main() {
  var cardArr = [
    {
      thumbnaliUrl: "https://static-cse.canva.com/blob/1197699/1600w-wK95f3XNRaM.jpg",
      userImage: "https://www.meme-arsenal.com/memes/5e4cb74fabffb386e50f8187656469af.jpg",
      title: "Great Time to Buy these beaten down stocks",
      duration: "27:16",
      userName: "Akshay Srivatsav",
      views: "199K",
      datePosted: "1 day ago"
    },
    {
      thumbnaliUrl: "https://static-cse.canva.com/blob/1197699/1600w-wK95f3XNRaM.jpg",
      userImage: "https://www.meme-arsenal.com/memes/5e4cb74fabffb386e50f8187656469af.jpg",
      title: "Great Time to Buy these beaten down stocks",
      duration: "27:16",
      userName: "Akshay Srivatsav",
      views: "199K",
      datePosted: "1 day ago"
    },
    {
      thumbnaliUrl: "https://static-cse.canva.com/blob/1197699/1600w-wK95f3XNRaM.jpg",
      userImage: "https://www.meme-arsenal.com/memes/5e4cb74fabffb386e50f8187656469af.jpg",
      title: "Great Time to Buy these beaten down stocks",
      duration: "27:16",
      userName: "Akshay Srivatsav",
      views: "199K",
      datePosted: "1 day ago"
    },
    {
      thumbnaliUrl: "https://static-cse.canva.com/blob/1197699/1600w-wK95f3XNRaM.jpg",
      userImage: "https://www.meme-arsenal.com/memes/5e4cb74fabffb386e50f8187656469af.jpg",
      title: "Great Time to Buy these beaten down stocks",
      duration: "27:16",
      userName: "Akshay Srivatsav",
      views: "199K",
      datePosted: "1 day ago"
    },
    {
      thumbnaliUrl: "https://static-cse.canva.com/blob/1197699/1600w-wK95f3XNRaM.jpg",
      userImage: "https://www.meme-arsenal.com/memes/5e4cb74fabffb386e50f8187656469af.jpg",
      title: "Great Time to Buy these beaten down stocks",
      duration: "27:16",
      userName: "Akshay Srivatsav",
      views: "199K",
      datePosted: "1 day ago"
    },
    {
      thumbnaliUrl: "https://static-cse.canva.com/blob/1197699/1600w-wK95f3XNRaM.jpg",
      userImage: "https://www.meme-arsenal.com/memes/5e4cb74fabffb386e50f8187656469af.jpg",
      title: "Great Time to Buy these beaten down stocks",
      duration: "27:16",
      userName: "Akshay Srivatsav",
      views: "199K",
      datePosted: "1 day ago"
    },
    {
      thumbnaliUrl: "https://static-cse.canva.com/blob/1197699/1600w-wK95f3XNRaM.jpg",
      userImage: "https://www.meme-arsenal.com/memes/5e4cb74fabffb386e50f8187656469af.jpg",
      title: "Great Time to Buy these beaten down stocks",
      duration: "27:16",
      userName: "Akshay Srivatsav",
      views: "199K",
      datePosted: "1 day ago"
    },
    {
      thumbnaliUrl: "https://static-cse.canva.com/blob/1197699/1600w-wK95f3XNRaM.jpg",
      userImage: "https://www.meme-arsenal.com/memes/5e4cb74fabffb386e50f8187656469af.jpg",
      title: "Great Time to Buy these beaten down stocks",
      duration: "27:16",
      userName: "Akshay Srivatsav",
      views: "199K",
      datePosted: "1 day ago"
    },
  ]
  var cardArr2 = [{
    thumbnaliUrl: "https://i.ytimg.com/vi/udAlOSn4yFo/hq720.jpg",
    userImage: "	https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
    title: "Dhruva Natchathiram - Official Trailer | Chiyaan Vikram, Harris Jayaraj, Gautham Vasudev Menon",
    duration: "27:16",
    userName: "Sony Music South",
    views: "199K",
    datePosted: "1 day ago"
  },]
  const [globalData, setGlobalData] = useState([...cardArr])
  return <div>
    {renderChips()}
    <Search />

    <div className="flex flex-wrap w-[100%]">
      {globalData.map((obj) => <VideoCard cardObj={obj} />)}
    </div>

  </div>
}


