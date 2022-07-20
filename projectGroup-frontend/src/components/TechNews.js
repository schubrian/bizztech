import React, { useEffect, useState } from 'react';
import './NewsList.css'


const TechNews = () => {

  const [techNews, setTechNews] = useState([])  
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?category=technology&pageSize=30&language=en&apiKey=8bae802e8a7a4725873c57ce4b74f37d')
            .then(res=>res.json())
            .then(json=> setTechNews(json.articles)
            ).catch(e => {
                console.log(e);
            })
  }, [])
  return (
    <div>
    <h3>TECH NEWS</h3>
    <div className='cards'>
        {techNews.length === 0 ? <p>PAGE IS LOADING... </p> : techNews.map((data, index)=> 
        <div>
        <div >
            <img src={data.urlToImage} alt="stuffs"/>
            <p><a href={data.url} target="_blank">{data.title}</a></p>
            <p>{data.description}</p>
            {/* <button onClick={() => addCart(index)} >Add Cart</button> */}
        </div>
        </div>)}
    </div>
    </div>
  )
}

export default TechNews