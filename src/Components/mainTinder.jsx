import React, { useEffect, useState, useRef } from 'react';
import { FaSms } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import './mainTinder.css';
import img1 from '../img/swiper-img/11111111111111.png';
import img2 from '../img/swiper-img/2222222222222222.png';
import img3 from '../img/swiper-img/Group8.png';
import img4 from '../img/swiper-img/Group89.png';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
const TinderCards = () => {
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(null);
  const [startAngle, setStartAngle] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [imageVisible, setImageVisible] = useState(true);
  const [showIcon, setShowIcon] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgRef = useRef(null);


 function getimage() {
    axios.get(`https://jsonplaceholder.typicode.com/users`) //Замените своим url
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
// Вставьте свой axios даные вместо initialGirls или просто переименуйте
  const initialGirls = [
    {
      id: 1,
      name: 'Ника',
      img: img1,
      age: 36,
      city: 'Москва',
      status: 'Свободная',
      height: 166,
      nationality: 'Русский',
    },
    {
      id: 2,
      name: 'Алиса',
      img: img1,
      age: 24,
      city: 'Санкт-Петербург',
      status: 'Свободная',
      height: 170,
      nationality: 'Русский',
    },
    {
      id: 3,
      name: 'Мария',
      img: img2,
      age: 27,
      city: 'Казань',
      status: 'Свободная',
      height: 165,
      nationality: 'Русский',
    },
    {
      id: 4,
      name: 'София',
      img: img1,
      age: 22,
      city: 'Екатеринбург',
      status: 'Свободная',
      height: 173,
      nationality: 'Русский',
    },
    {
      id: 5,
      name: 'Анна',
      img: img1,
      age: 29,
      city: 'Новосибирск',
      status: 'Свободная',
      height: 168,
      nationality: 'Русский',
    },
    {
      id: 6,
      name: 'Виктория',
      img: img1,
      age: 25,
      city: 'Краснодар',
      status: 'Свободная',
      height: 175,
      nationality: 'Русский',
    },
    {
      id: 7,
      name: 'Дарья',
      img: img1,
      age: 23,
      city: 'Нижний Новгород',
      status: 'Свободная',
      height: 162,
      nationality: 'Русский',
    },
    {
      id: 8,
      name: 'Полина',
      img: img1,
      age: 28,
      city: 'Ростов-на-Дону',
      status: 'Свободная',
      height: 167,
      nationality: 'Русский',
    },
    {
      id: 9,
      name: 'Елена',
      img: img1,
      age: 26,
      city: 'Сочи',
      status: 'Свободная',
      height: 171,
      nationality: 'Русский',
    },
    {
      id: 10,
      name: 'Ксения',
      img: img2,
      age: 24,
      city: 'Владивосток',
      status: 'Свободная',
      height: 169,
      nationality: 'Русский',
    },
  ];

  const a = 0;
  const [newgirl, setNewgirl] = useState([initialGirls[a]]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
    setStartAngle(angle);
    setSwipeDirection(null);
    setShowIcon(null);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPosition;
    const newAngle = Math.min(Math.max(startAngle + (deltaX / window.innerWidth) * 130, -130), 130);
    setAngle(newAngle);

    if (deltaX > 0) {
      setSwipeDirection('right');
      if (newAngle > 45) setShowIcon('heart');
      else setShowIcon(null);
    } else if (deltaX < 0) {
      setSwipeDirection('left');
      if (newAngle < -45) setShowIcon('cross');
      else setShowIcon(null);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartPosition(null);
    setStartAngle(0);

    if (Math.abs(angle) > 45) {
      setImageVisible(false);
     
      setTimeout(() => {
        if(currentIndex == initialGirls.length-1 ){
          setCurrentIndex(0)
          setNewgirl([initialGirls[currentIndex]]);
        }
        else{
         
          setCurrentIndex(currentIndex+1)
        setNewgirl([initialGirls[currentIndex]]);
        }
        setAngle(0);
        setImageVisible(true);
        setShowIcon(null);
      }, 500);
    } else {
      setAngle(0);
      setShowIcon(null);
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
    setStartAngle(angle);
    setSwipeDirection(null);
    setShowIcon(null);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startPosition;
    const newAngle = Math.min(Math.max(startAngle + (deltaX / window.innerWidth) * 130, -130), 130);
    setAngle(newAngle);

    if (deltaX > 0) {
      setSwipeDirection('right');
      if (newAngle > 15)
         setShowIcon('heart');
      else setShowIcon(null);
    } else if (deltaX < 0) {
      setSwipeDirection('left');
      if (newAngle < -15) setShowIcon('cross');
      else setShowIcon(null);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setStartPosition(null);
    setStartAngle(0);

    if (Math.abs(angle) > 45) {
      setImageVisible(false);
      
      setTimeout(() => {
        if(currentIndex == initialGirls.length-1 ){
          setCurrentIndex(0)
          setNewgirl([initialGirls[currentIndex]]);
        }
        else{
         
          setCurrentIndex(currentIndex+1)
        setNewgirl([initialGirls[currentIndex]]);
        }
        setAngle(0);
        setImageVisible(true);
        setShowIcon(null);
      }, 500);
    } else {
      setAngle(0);
      setShowIcon(null);
    }
  };

  const handleSwipeLeft = () => {
    setSwipeDirection('left');
    setAngle(-70);
    setShowIcon('cross');
   
    
    
    setTimeout(() => {
      setImageVisible(false);

      if(currentIndex == initialGirls.length-1 ){
        setCurrentIndex(0)
        setNewgirl([initialGirls[currentIndex]]);
      }
      else{
       
        setCurrentIndex(currentIndex+1)
      setNewgirl([initialGirls[currentIndex]]);
      }
      
      
      setShowIcon(null);
    }, 200);
    setTimeout(() => {
      setAngle(0);
      setImageVisible(true);
    }, 500);
  };

  const handleSwipeRight = () => {
    setAngle(70);
    setShowIcon('heart');

    setTimeout(() => {
      setImageVisible(false);
      if(currentIndex == initialGirls.length-1 ){
        setCurrentIndex(0)
        setNewgirl([initialGirls[currentIndex]]);
      }
      else{
       
        setCurrentIndex(currentIndex+1)
      setNewgirl([initialGirls[currentIndex]]);
      }
      setShowIcon(null);
    }, 200);
    setTimeout(() => {
      setAngle(0);
      setImageVisible(true);
    }, 500);
  };

  return (
    <div className="tinder-container">
      <Header />
      <div
        className="container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {imageVisible && (
          <div className="d">
            {newgirl.map((item) => (
              <div
                className="image-container"
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: swipeDirection === 'left' ? 'left bottom' : 'right bottom',
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out, opacity 1s ease-out',
                  opacity: imageVisible ? 1 : 0,
                  position: 'absolute',
                  bottom: imageVisible ? '0' : '-100%',
                  backgroundImage: `url(${item.img})`,
                }}
              >
                {showIcon === 'heart' && <div className="heart-icon">    <img src={img3} alt="" /></div>}
                {showIcon === 'cross' && <div className="cross-icon">    <img src={img4} alt="" /></div>}

                <div className="text_sli">
                  <span className='sp1'>{item.name + ' , ' + item.age}</span>
                  <span>{item.city}</span>
                  <span>{item.status}</span>
                  <span>{item.height}</span>
                  <span>{item.nationality}</span>
                </div>
                <div className="btn-swip">
<button className="swipe-leftt" onClick={handleSwipeLeft}>
        <img src={img4} alt="" />
        </button>
        <button className="swipe-rightt" onClick={handleSwipeRight}>
        <img src={img3} alt="" />
        </button>
</div>
              </div>
              
            ))}
            
          </div>
        )}

        
      </div>
      <Footer />
    </div>
  );
};

export default TinderCards;
