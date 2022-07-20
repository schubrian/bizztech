import Carousel from 'react-bootstrap/Carousel';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const TryCarousel = () => {
  const [techNews, setTechNews] = useState([])  
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?category=business&pageSize=3&language=en&apiKey=8bae802e8a7a4725873c57ce4b74f37d')
            .then(res=>res.json())
            .then(json=> setTechNews(json.articles)
            ).catch(e => {
                console.log(e);
            })
  }, [])

  return (
    <Container >
        <Row>
        {techNews.length === 0 ? <p>Page is loading</p> : techNews.map((data, index) => 
        <Carousel>
            <Carousel.Item>
                    <img className="w-10" src={data.urlToImage} alt="First slide"/>
                <Carousel.Caption>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> )}
        </Row>
    </Container>
  );
}

export default TryCarousel;