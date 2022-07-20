import { Fragment, useEffect, useState} from "react"
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import {Bookmark} from 'react-bootstrap-icons'



const NewsItem = (props) =>{
    TimeAgo.addLocale(en);

    const [datePost, setDatePost] = useState('');
    const timeAgo = new TimeAgo('en-US');
    let date = new Date(props.publishedDate)

    useEffect(() => {
        let time = timeAgo.format(date);
        setDatePost(time)
    }, [])

    let marker = props.marker;

    return(
        <Fragment>
            
            <Card className="eachNews">
               
                <Card.Link href={props.link} target="_blank">
                    <Card.Img className="eachNews-img" variant="top" src={props.img} href={props.link} target="_blank"/>
                </Card.Link>
                <Card.Body className="eachNews-body">
                    <Card.Link href={props.link} target="_blank">{props.title}</Card.Link>
                    
                </Card.Body>
                <Card.Footer className="eachNews-footer">
                    <small className="text-muted">
                        {datePost}
                    </small>
                    {marker && <Button size="sm" onClick={()=>{props.markDelete(props.index)}}> <Bookmark/>
                    Remove
                    </Button>}
                    {props.user && <Button size="sm"  onClick={()=>{props.markSave(props.index)}}> <Bookmark/>
                    </Button>}
                </Card.Footer>
                
                
            </Card>
            
            
        </Fragment>
    )
}

export default NewsItem