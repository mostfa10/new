import path from './assets/assets_Homework_Front-End_01/path-copy.png'
import AdultIcon from './assets/assets_Homework_Front-End_02/red-light.png'
import DadIcon from './assets/assets_Homework_Front-End_02/orange-light.png'
import ChristmassIcon from './assets/assets_Homework_Front-End_02/green-light.png'
import JobIcon from './assets/assets_Homework_Front-End_02/green-light.png'
import BirthdayIcon from './assets/assets_Homework_Front-End_02/blue-light.png'
import SocialIcon from './assets/assets_Homework_Front-End_02/blue-light.png'
import PunsIcon from './assets/assets_Homework_Front-End_02/blue-light@3x.png'
import AllIcon from './assets/assets_Homework_Front-End_01/green-light-copy-2.png'
import thumbUp from './assets/assets_Homework_Front-End_02/hand.png'
import thumbDown from './assets/assets_Homework_Front-End_02/hand-copy.png'
import ArrowRightIcon from './assets/assets_Homework_Front-End_02/arrow-left-copy.png'
import ArrowLeftIcon from './assets/assets_Homework_Front-End_02/arrow-left.png'
import arrowDown from './assets/assets_Homework_Front-End_01/path-copy-7.png'
import BackBtn from './assets/assets_Homework_Front-End_02/back-btn.png'


import React, { useState } from 'react';


const MainContentBlock = ({jokesToShow,loading,Spinner,categoryMatch,setSearchInput,fetchAndSetJokes,GridDisplay,setGridDisplay,currentJokeIndex,setCurrentJokeIndex,jokes}) => {
    var [icon,setIcon] = useState(AllIcon);
    var [currentCat,setCat] = useState( "All");
    var [LabelClass,setLabel] = useState('bg-primary');

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    let random_num_1 = randomNumberInRange(currentJokeIndex, jokes.length)
    let random_num_2 = randomNumberInRange(currentJokeIndex, jokes.length)
    var [likes,setLikes] = useState(random_num_1)
    var [dislikes,setDislikes] = useState(random_num_2)
    
    return ( 
        <div className="container">
            { GridDisplay ? (
            <div className="row d-flex" id='gridList'>
                <button className="ml-2 mt-2 col-xl-2 col-md-auto col-sm-2  btn-md red-btn" onClick={(e)=>{
                     setSearchInput('adult');
                     setIcon(AdultIcon);
                     setCat('Adult Jokes');
                     setLabel('bg-red');
                     fetchAndSetJokes();
                }}>Adult Jokes </button>
                <button className="ml-2 mt-2 col-xl-2 col-md-auto col-sm-2  btn-md orange-btn" onClick={(e)=>{
                     setSearchInput('dad');
                     icon = DadIcon
                     setCat('Dad Jokes');
                     setLabel('bg-orange');
                     fetchAndSetJokes();
                }}> Dad Jokes </button>
                <button className="ml-2 mt-2 col-xl-2 col-md-auto col-sm-2  btn-md warning-btn" onClick={(e)=>{
                     setSearchInput('christmas');
                     icon = ChristmassIcon
                     setCat('Christmas Jokes');
                     setLabel('bg-warning');
                     fetchAndSetJokes();
                }}> Christmas Jokes </button>
                <button className="ml-2 mt-2 col-xl-2 col-md-auto col-sm-2  btn-md gold-btn" onClick={(e)=>{
                     setSearchInput('job');
                     icon = JobIcon
                     setCat('Job Jokes');
                     setLabel('bg-gold');
                     fetchAndSetJokes();
                }}> Job Jokes </button>
                <button className="ml-2 mt-2 col-xl-2 col-md-auto col-sm-2  btn-md green-kiwi-btn" onClick={(e)=>{
                     setSearchInput('birthday');
                     icon = BirthdayIcon
                     setCat('Birthday Jokes');
                     setLabel('bg-green-kiwi');
                     fetchAndSetJokes();
                }}> Birthday Jokes </button>
                <button className="ml-2 mt-2 col-xl-2 col-md-auto col-sm-2  btn-md green-btn" onClick={(e)=>{
                     setSearchInput('social');
                     icon = SocialIcon
                     setCat('Social Jokes');
                     setLabel('bg-green');
                     fetchAndSetJokes();
                }}> Social Jokes </button>
                <button className="ml-2 mt-2 col-xl-2 col-md-auto col-sm-2  btn-md blue-btn" onClick={(e)=>{
                     setSearchInput('puns');
                     icon = PunsIcon
                     setCat('Puns Jokes');
                     setLabel('bg-blue');
                     fetchAndSetJokes();
                }}> Puns </button>
                <button className="ml-2 mt-2 col-xl-2 col-md-auto col-sm-2  btn-md normal-btn" onClick={(e)=>{
                     setSearchInput('all');
                     icon = AllIcon
                     setCat('All');
                     setLabel('bg-primary');
                     fetchAndSetJokes();
                }}> View all 
                <img src={arrowDown} alt='' className='ml-2 float-right'/>
                </button>
            </div> ) : (<span></span>) 
            }
            { GridDisplay ? (
                <div className="row">
                    <div className={LabelClass+' label'}  key='label'>
                        <label className="label" >{currentCat}</label>
                    </div>
                </div>
                ):(<br></br>)
            }
            { GridDisplay ? (
                <div className="row">
                {jokesToShow.map((joke, index) => {
                    return (
                        joke.categories.length === 0 ||
                        categoryMatch(joke.categories)
                        ) ?  (
                            <div className="col-lg-3 col-md-10 col-sm-12 px-1" id={`joke-${index}`} key={index.toString()}>
                                <div className="card">
                                    <div className="card-header float-left">
                                        <img src={icon} height='20px' className="px-1" alt="header icon"></img>
                                        {joke.value.substring(0, 15) + '...'}
                                    </div>
                                    <div className="card-body">
                                        {joke.value}
                                    </div>
                                    <div className="card-footer">
                                        <span className="upper secondary-text float-right cursor-pointer" onClick={(e)=> {
                                            setGridDisplay(false)
                                            setCurrentJokeIndex(index) 
                                        }}> 
                                            See stats
                                            <img src={path} height='10px' className="pl-1" alt="arrow right"></img>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                        : (<div></div>)
                    }
                    )}
                    {loading && <Spinner />}
                    </div>
            ) 
            : (
                <div className='row d-flex'>
                    <span className='col-12 text-align-left'>
                        <a href='#' onClick={(fn)=>{
                            setGridDisplay(true)
                            setCurrentJokeIndex(0) 
                        }}>
                            <img src={BackBtn} alt='' height="50px"/>

                        </a>
                    </span>
                    <div className='xl:col-6 md:col-12'>
                        <div className="card ">
                            <div className="card-header">
                                <div className="row w-full">
                                    <div className='col-2'>
                                        <div className={LabelClass+' label'}  key='label'>
                                            <label className="label" >{jokes[currentJokeIndex]?.categories.length !== 0 ? jokes[currentJokeIndex].categories[0] : 'Uncategorized'}</label>
                                        </div>
                                    </div>
                                    <div className='col-8'></div>
                                    {likes <= 50 ? (
                                        <div className='col-2 text-info uppercase'>. Popular</div>
                                    ) :  likes <= 100 ? (
                                        <div className='col-2 text-warning uppercase'>. Trending</div>
                                    ) : (
                                        <div className='col-2 text-danger uppercase'>. Epic</div>
                                    ) }
                                    <div className='col-12 text-align-left mt-2 d-inline-flex'>
                                       <span className='single-card-title'>{jokes[currentJokeIndex].value.substring(0, 20) + '...'} </span>
                                       <hr className='hr-card-single xs:hidden md:hidden'></hr>
                                       <span className='idx-class'>NO #{currentJokeIndex + 1}</span>
                                    </div>
                                </div>
                                       
                                    </div>
                                    <div className="card-body mx-1 py-0">
                                        {jokes[currentJokeIndex].value}
                                    </div>
                                </div>
                                <div className='row text-align-left'>
                                    <span className='d-grid  mr-3'>
                                        <button className='btn-like' onClick={()=>{
                                            setLikes(likes + 1) 
                                        }}>
                                            <img src={thumbUp} alt=''/>
                                        </button>
                                        <span className='count-likes'> {likes}</span>
                                    </span>
                                    <span className='d-grid'>
                                        <button className='btn-dislike ml-1'onClick={()=>{
                                            setDislikes(dislikes + 1)
                                        }}>
                                            <img src={thumbDown} alt=''/>
                                        </button>
                                        <span className='count-dislikes'> {dislikes}</span>
                                    </span>
                                <div className='row w-full text-align-right'>
                                    <div className='col flex-end'>
                                        <button className='btn-sm btn card-btn mr-1'
                                                onClick={(fn)=>{
                                                    setDislikes(randomNumberInRange(currentJokeIndex - 1, jokes.length))
                                                    currentJokeIndex >= 1 ? 
                                                        setCurrentJokeIndex(currentJokeIndex - 1)
                                                        : fn.preventDefault();
                                                }}>
                                            <img src={ArrowLeftIcon} height='10px' className='pr-2' alt=''/>
                                            PREV.JOKE
                                        </button>
                                        <button className='btn-sm btn card-btn'
                                                onClick={(fn)=>{
                                                    setLikes(randomNumberInRange(currentJokeIndex * 1, jokes.length))
                                                    currentJokeIndex <= jokes.length ? 
                                                    setCurrentJokeIndex(currentJokeIndex + 1) 
                                                    : fn.preventDefault();
                                                }}>
                                            NEXT.JOKE
                                            <img src={ArrowRightIcon} height='10px' className='pl-2' alt=''/>
                                        </button>
                                    </div>
                                </div>
                                </div>
                    </div>
                    <div className='col-3'>
                    <div className="card ml-4 h-full">
                            <div className="card-header">
                                <span className='upper font-semibold'> THE TOP 10 jokes this week </span>
                                 </div>
                                    <div className="card-body w-full py-0 px-0">
                                        <ul className='px-2'>
                                            <li className='underline'>Smoking jokes</li>
                                            <li className='underline'>My boss jokes</li>
                                            <li className='underline'>Dirty Millionaire jokes</li>
                                            <li className='underline'>The annoying neighbour  </li>
                                            <li className='underline'>Knock Knock</li>
                                            <li className='underline'>Why Tyson lisps </li>
                                            <li className='underline'>The drunk Police officer</li>
                                            <li className='underline'>My hip dad (Dad joke)</li>
                                            <li className='underline'>What not say in an elevator</li>

                                        </ul>
                                    </div>
                                </div>
                    </div>
                </div>
                
                
                )
            }
            <br></br>
                    
                
        </div>
     );
}
 
export default MainContentBlock;