import { Fragment, useState, useEffect} from "react"
import './LandingPage.css'
import NewsList from "../components/NewsContent/NewsList";
import HotNews from "../components/NewsContent/HotNews";
import {Container, Row, Col} from 'react-bootstrap'
import News from "../components/NewsContent/News";
import TechNews from "../components/NewsContent/TechNews";

const LandingPage = (props) =>{

    const [hotNews, setHotNews] = useState([])

    useEffect(()=>{
        const apikey = '8bae802e8a7a4725873c57ce4b74f37d'
        fetch(`https://newsapi.org/v2/top-headlines?country=my&apiKey=${apikey}`)
        .then(res=>res.json())
        .then(json=>{
            let data = json.articles
            setHotNews(data.slice(0,4));
        
        })
    },[])


    return(
        <Fragment>
            <Container className="main">
                
                <Row>
                    <HotNews hotNews={hotNews}/>
                </Row>
                <Row>
                    <Col>
                        <News user={props.user}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TechNews user={props.user}/>
                    </Col>
                </Row>
            </Container>

            
        </Fragment>

    )
}

export default LandingPage