import { Fragment,useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import {Container,Row,Col} from 'react-bootstrap'
import './NewsContent.css'

function TechNews(props){

    const [techNews, setTechNews] = useState([])
    const [moreTechNews, setMoreTechNews] = useState([])    
    const [showMore, setShowmore] = useState(false);
    const [toRead, setToRead] = useState([])

    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=5&apiKey=8bae802e8a7a4725873c57ce4b74f37d')
        .then(res=>res.json())
        .then(json=>{
            setTechNews(json.articles);
        })
        
        fetch('https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=20&apiKey=8bae802e8a7a4725873c57ce4b74f37d')
        .then(res=>res.json())
        .then(json=>{
            let data = json.articles
            setMoreTechNews(data)})
    },[])

    const addToReadLater = (pos) =>{
        console.log(pos,":", "is clicked")

        const selectedArticle = {
            user: props.user,
            title: techNews[pos].title,
            url: techNews[pos].url,
            publishedAt: techNews[pos].publishedAt,
            urlToImage: techNews[pos].urlToImage
        }
        setToRead((latestData) => {
            return[...latestData,selectedArticle]
        })
        let axios = require('axios')
        let data = JSON.stringify({selectedArticle});
        let config = {
            method: 'POST',
            url: 'http://localhost:1090/add-bookmarks',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('user')
            },
            data:data
        }
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    const addToReadLater2 = (pos) =>{
        console.log(pos,":", "is clicked")

        const selectedArticle = {
            user: props.user,
            title: moreTechNews[pos].title,
            url: moreTechNews[pos].url,
            publishedAt: moreTechNews[pos].publishedAt,
            urlToImage: moreTechNews[pos].urlToImage
        }
        setToRead((latestData) => {
            return[...latestData,selectedArticle]
        })
        let axios = require('axios')
        let data = JSON.stringify({selectedArticle});
        let config = {
            method: 'POST',
            url: 'http://localhost:1090/add-bookmarks',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('user')
            },
            data:data
        }
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return(
        <Fragment>
            <Container className="newsList">
                <Container>
                    <h4 className="newsSection-header">Technology</h4>
                </Container>


                
                {showMore? moreTechNews.map((data, index)=>
                    <NewsItem key ={index}
                    index = {index}
                    link = {data.url}
                    title = {data.title}
                    publishedDate = {data.publishedAt}
                    img = {data.urlToImage}
                    markSave={addToReadLater2}
                    user={props.user}
                    />
                ): 
                    techNews.map((data, index)=>
                        <NewsItem key ={index}
                        index = {index}
                        link = {data.url}
                        title = {data.title}
                        publishedDate = {data.publishedAt}
                        img = {data.urlToImage}
                        markSave={addToReadLater}
                        user={props.user}
                        />
                    )
                }

                <Container className="forMore">
                    <Row>
                        <Col>
                        <p className="showMore"><a onClick={()=> setShowmore(!showMore)} > {showMore ? "show less": "MORE FROM TECHNOLOGY..."} </a></p>
                        </Col>
                    </Row>
                    
                </Container>

            </Container>
            
            

        </Fragment>

    )
}

export default TechNews