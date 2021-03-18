import React, { Component } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import './ContactAdmin.css'

export default class ContactAdmin extends Component {
    render() {
        return (
            <section className='ContactAdmin'>
                <h2>Contact Admins</h2>
                <hr />
                <h4>Send us your suggestions, comments, or general inquiries! If you want to suggest a new trail to be included, please include as much details as you can including a name, address, and a website.</h4>
                <ContactForm />
            </section>
        )
    }
}