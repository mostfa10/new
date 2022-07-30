import './App.css';
import './assets/styleSheets/styles.css';
import './assets/styleSheets/grid.css';
import './assets/styleSheets/colors.css';

import NavBar from './Core/Navbar'
import Footer from './Core/Footer'
import {BannerBlock} from './BannerBlock'
import MainContentBlock from './MainContentBlock'

import React, { useEffect, useState } from 'react';


function Spinner() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      loading ...
    </div>
  );
}

function App() {
  const [jokes, setJokes] = useState([]);
  const [jokesToShow, setJokesToShow] = useState([]);
  const [ResultSearchJokes, setResultSearchJokes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);

  const [likedJokes, setLikedJokes] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  const [searchInput, setSearchInput] = useState('all');

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetchAndSetJokes();
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(async (res) => await res.json())
      .then((res) => {
        setCategories(res);
        setFilterCategories(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchJokesSearchResults = () => {
    fetch(
      `https://api.chucknorris.io/jokes/search?query=${searchInput}`
    )
      .then(async (res) => await res.json())
      .then((res) => {
        setResultSearchJokes(res.result);
      })
      .catch((err) => console.log(err));
  }

  const fetchAndSetJokes = () => {
    fetch(
      `https://api.chucknorris.io/jokes/search?query=${searchInput}`
    )
      .then((res) => res.json())
      .then((res) => {
        setJokes(res.result);
        setJokesToShow(res.result.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addMoreJokes = () => {
    setLoading(true);
    setTimeout(() => {
      setJokesToShow(jokes.slice(0, jokesToShow.length + 10));
      setLoading(false);
    }, 400);
  };

  const observeElement = (bottomJoke) => {
    if (!bottomJoke) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          addMoreJokes();
          observer.unobserve(bottomJoke);
        }
      },
      {
        threshold: 1,
      }
    );

    observer.observe(bottomJoke);
  };

  useEffect(() => {
    const bottomJokeEl = document.getElementById(
      `joke-${jokesToShow.length - 1}`
    );
    if(jokesToShow.length > 6){
      observeElement(bottomJokeEl);
    }
  }, [jokesToShow]);

  const categoryMatch = (jokeCategories) => {
    for (let i = 0; i < jokeCategories.length; i++) {
      if (filterCategories.includes(jokeCategories[i])) return true;
    }
    return false;
  };

  const getSearchResults = () => {
    return ResultSearchJokes
  }

  return (
    
    <div className="App">
      <section className="layout">
      <div className="header">
        <NavBar />
      </div>
      <div className="main">
        <BannerBlock ResultSearchJokes={ResultSearchJokes} searchInput={searchInput} fetchJokesSearchResults={fetchJokesSearchResults} setSearchInput={setSearchInput} getSearchResults={getSearchResults}/>
        <MainContentBlock jokesToShow={jokesToShow} loading={loading} Spinner={Spinner} categoryMatch={categoryMatch} setSearchInput={setSearchInput} fetchAndSetJokes={fetchAndSetJokes}/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
    </div>
  );
}

export default App;
