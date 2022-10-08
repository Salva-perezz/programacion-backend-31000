import React, { useEffect, useState } from "react"
import axios from '../lib/axios.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Noticias = () => {
    const [noticias, setNoticias] = useState([])

    const fetchData = async () => {
        const data = await axios.get('/api/news')
        setNoticias(data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
        {noticias.length && noticias.map(noticia => (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={noticia.image} />
                <Card.Body>
                    <Card.Title>{noticia.title}</Card.Title>
                    <Card.Text>
                    {noticia.body}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Autor: {noticia.author}</ListGroup.Item>
                    <ListGroup.Item>Email del Autor: {noticia.email}</ListGroup.Item>
                </ListGroup>
            </Card>
        ))}
    </>
    )
}

export default Noticias