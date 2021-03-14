import React from 'react'
import gif from './loading.gif'
import './Loading.css'

export default function Loading() {
    return (
        <section className = 'loadings'>
        <h2>Loading ...</h2>
        <hr />
        <p>
            <img src={gif} alt='loading art' />
        </p>
        </section>
    )
}