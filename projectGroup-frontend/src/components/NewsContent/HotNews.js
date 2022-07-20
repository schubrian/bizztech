import { Fragment, useState, useEffect } from "react"
import Carousel  from 'react-bootstrap/Carousel'
import HotNewsItem from "./HotNewsItem"
import './NewsContent.css'

const HotNews = (props) =>{

    return(
        <Fragment>

            <Carousel>

                {
                    props.hotNews.map((data,index)=>(

                    <Carousel.Item>
                        <HotNewsItem key={index}
                        index={index}
                        link={data.url}
                        title={data.title}
                        img={data.urlToImage}
                        />
                    </Carousel.Item>
                    ))

                }
                 
            </Carousel>
           
            
        </Fragment>

    )
}

export default HotNews