import { Fragment } from "react"
import News from "./News"
import {Container} from 'react-bootstrap'
import './NewsContent.css'

function NewsList(){
    return(
        <Fragment>
            <Container className="newsList">
                <News/>
            </Container>

            
        </Fragment>
    )
}

export default NewsList