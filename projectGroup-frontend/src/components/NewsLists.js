import React, { useEffect, useState } from 'react';
import './NewsList.css'

const NewsLists = () => {

  const [newsList, setNewsList] = useState([])  
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?category=business&pageSize=30&language=en&apiKey=8bae802e8a7a4725873c57ce4b74f37d')
            .then(res=>res.json())
            .then(json=> setNewsList(json.articles)
            ).catch(e => {
                console.log(e);
            })
  }, [])

  const addToBookmark = () => {
    
  }
  return (
    <div>
      <h3>BUSINESS</h3>
    <div className='cards'>
        {newsList.length === 0 ? <div className='loader'></div> : newsList.map((data, index)=> 
        
        <div>
            <br/>
            <img src={data.urlToImage} alt="stuffs"/>
            <p><a href={data.url} target="_blank">{data.title}</a></p>
            <p>{data.description}</p>
            <p className='source'>Source: {data.source.name}</p>
            <button onClick={addToBookmark()}>Bookmark</button>
            {/* <button onClick={() => addCart(index)} >Add Cart</button> */}
        </div>)}
    </div>
    </div>
  )
}

export default NewsLists