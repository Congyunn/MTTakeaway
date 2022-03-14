import React,{useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import RightBox from './Components/RightBox/RightBox';
import HeaderImg from "./Components/HeaderImg/HeaderImg";
import ServiceIntro from "./Components/ServiceIntro/ServiceIntro";
import Case from "./Components/Case/Case";
import News from "./Components/News/News";
import Footer from "./Components/Footer/Footer";

function App() {
  const [HeadColor, setHeadColor] = useState(false);

  const [ServiceIntroShow, setServiceIntroShow] = useState(false);
  const [ServiceText, setServiceText] = useState(false);
  const [CaseInrtoshow, setCaseInrtoshow] = useState(false);
  const [CaseText, setCaseText] = useState(false);
  const [NewsIntroshow, setNewsIntroshow] = useState(false);
  const [NewsText, setNewsText] = useState(false);

  window.onscroll = document.onscroll = handleScroll;

  function handleScroll() { 
    let heightTop = document.documentElement.scrollTop;
     if(heightTop > 2337){
      setNewsText(true)
      setNewsIntroshow(true)
      setCaseText(true)
      setCaseInrtoshow(true)
      setServiceText(true)
      setServiceIntroShow(true)
      setHeadColor(true)
      return
     }else if(heightTop > 2142){
      setNewsText(false)
      setNewsIntroshow(true)
      setCaseText(true)
      setCaseInrtoshow(true)
      setServiceText(true)
      setServiceIntroShow(true)
      setHeadColor(true)
      return
     }else if(heightTop > 1495){
      setNewsText(false)
      setNewsIntroshow(false)
      setCaseText(true)
      setCaseInrtoshow(true)
      setServiceText(true)
      setServiceIntroShow(true)
      setHeadColor(true)
      return
     }else if(heightTop > 1245){
      setNewsText(false)
      setNewsIntroshow(false)
      setCaseText(false)
      setCaseInrtoshow(true)
      setServiceText(true)
      setServiceIntroShow(true)
      setHeadColor(true)
      return
     }else if(heightTop > 543){
      setNewsText(false)
      setNewsIntroshow(false)
      setCaseText(false)
      setCaseInrtoshow(false)
      setServiceText(true)
      setServiceIntroShow(true)
      setHeadColor(true)
      return
     }else if(heightTop > 345){
      setNewsText(false)
      setNewsIntroshow(false)
      setCaseText(false)
      setCaseInrtoshow(false)
      setServiceText(false)
      setServiceIntroShow(true)
      setHeadColor(true)
      return
     }else if(heightTop > 99){
      setNewsText(false)
      setNewsIntroshow(false)
      setCaseText(false)
      setCaseInrtoshow(false)
      setServiceText(false)
      setServiceIntroShow(false)
      setHeadColor(true)
      return
     }else{
      setNewsText(false)
      setNewsIntroshow(false)
      setCaseText(false)
      setCaseInrtoshow(false)
      setServiceText(false)
      setServiceIntroShow(false)
      setHeadColor(false)
      return
     }
     //console.log(ServiceText);
   }
  return (
    <div>
      <Header HeadColor={HeadColor} />
      <RightBox />
      <HeaderImg />
      <ServiceIntro 
        ServiceIntroShow={ServiceIntroShow} 
        ServiceText = {ServiceText} />
      <Case
        CaseInrtoshow={CaseInrtoshow}
        CaseText={CaseText} />
      <News 
        setNewsIntroshow={NewsIntroshow}
        NewsText={NewsText} />
      <Footer />
    </div>
  );
}

export default App;
