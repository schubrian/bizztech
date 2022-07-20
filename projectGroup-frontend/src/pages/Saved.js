import React,{Fragment, useState, useEffect} from "react"
import {Button, Container} from 'react-bootstrap'
import NewsItem from "../components/NewsContent/NewsItem"
import './Saved.css'


function Saved(props){

    const [saved, setSaved] = useState([])
    const delMarked = true

    useEffect(()=>{
        console.log('UseEffect Saved');
        fetch(`http://localhost:1090/view-bookmarks`, {
            method: 'GET',
            headers:{ 
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('user')
            }
        })
        .then(res=>res.json())
        .then(json=>{
            setSaved(json);
        })
        
    },[props.user])

    const toDelete = (position) =>{
        var axios = require('axios');
        var deleteSave = saved[position]
        var data = JSON.stringify({ 
            "_id": deleteSave._id
        })
        var config = {
        method: 'delete',
        url: 'http://localhost:1090/delete-showing',
        headers: { 
            'Content-Type': 'application/json' ,
            'Authorization' : 'Bearer ' + localStorage.getItem('user')
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        const newSaveList = [...saved];
        newSaveList.splice(position, 1);
        console.log(newSaveList, position);
        setSaved(newSaveList)
        })
        .catch(function (error) {
        console.log(error);
        });
    }



    

    return(
        <Fragment>
            <Container className="newsList">
                <Container>
                    <h4 className="newsSection-header">Your saved article</h4>
                    
                </Container>

                {saved.length === 0 ? <p className="loading" >You do not have any saved articles, start browsing and add one</p> : saved.map((data, index)=>
                    <NewsItem key={index}
                    index={index}
                    link = {data.url}
                    title = {data.title}
                    publishedDate = {data.publishedAt}
                    img = {data.urlToImage}
                    marker={delMarked}
                    markDelete={toDelete}
                    />
                )}


            </Container>
        </Fragment>
    )
}

export default Saved