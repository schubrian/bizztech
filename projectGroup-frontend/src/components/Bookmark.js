import React, { useState, useEffect } from 'react'

const Bookmark = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        // console.log("added Stuffs in UseEffect");
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'))

        let requestOptions = {
            method: 'GET',
            headers: myHeaders
        }
        fetch('http://localhost:1090/view-bookmarks', requestOptions)
        .then(res=>res.json())
        .then(json=> setBookmarks(json)
        ).catch(e => {
            console.log(e);
        })
                
      },[])
      
    const deleteBookmark = () => {

    }  
      
    return (
    <div>
        <h3>BOOKMARKS</h3>
        <div>
        <div className='cards'>
        {bookmarks.length === 0 ? <div className='loader'></div> : bookmarks.map((data, index)=> 
        
        <div>
            <br/>
            <img src={data.urlToImage} alt='Stuffs'/>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <button onClick={deleteBookmark()}>Delete</button>
            {/* <button onClick={() => addCart(index)} >Add Cart</button> */}
        </div>)}
    </div>
        </div>
    </div>
  )
}

export default Bookmark