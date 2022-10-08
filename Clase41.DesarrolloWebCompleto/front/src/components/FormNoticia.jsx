import React, { useState } from 'react';
import axios from '../lib/axios.js'

function FormNoticia() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [view, setView] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const submitHandler = async () => {
        try {
            setError('')
            setLoading(true)
            await axios.post('/api/news', { title, author, body, image, email, viewed: true })
            setLoading(false)
        } catch(err) {
            setError('Se produjo un error al cargar la noticia')
        }
    }

  return (
    <form onSubmit={submitHandler}>
        <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder='Titulo' /> <br />
        <input type="text" onChange={e => setAuthor(e.target.value)} value={author} placeholder='Autor' /> <br />
        <input type="text" onChange={e => setBody(e.target.value)} value={body} placeholder='Cuerpo' /> <br />
        <input type="text" onChange={e => setImage(e.target.value)} value={image} placeholder='Imagen' /> <br />
        <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder='Email' /> <br />
        <input type="text" onChange={e => setView(e.target.value)} value={view} placeholder='Vista' /> <br />
        <input type="submit" disabled={loading} /> <br />
        {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  );
}

export default FormNoticia;