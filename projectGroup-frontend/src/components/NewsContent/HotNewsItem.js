import { Fragment} from "react"
import Carousel  from 'react-bootstrap/Carousel'
import './NewsContent.css'


const HotNewsItem = (props) =>{

    return(
        <Fragment>
                <div className="hotNews-img">
                    <div className="layer">
                        <img className="d-block w-100" src={props.img} alt="First slide" href={props.link} target="_blank"/>
                    
                    </div>                
                </div>
                <Carousel.Caption>
                    <div className="hotNews-desc">
                        <h3><a href={props.link} target="_blank">{props.title}</a></h3>
                    </div>
                </Carousel.Caption>
           
            

        </Fragment>
    )
}

export default HotNewsItem