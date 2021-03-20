import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <h2>Welcome to Maslool</h2>
        <hr />
        <h4>Who we are:</h4>
        <p>
          Maslool is the Hebrew word for 'path', like the path we take when
          exploring the nature in places that are new to us. We strive to be the
          home of a close-knit community of adventure seekers who want to
          experience more out of our own natural environment. Currently, we have
          a list of some trails that our developer and her friends have
          personally visited, and we plan to add more as we grow. Currently, you
          can search through our list of trails and write a comment, add a
          rating, and submit suggestions to our staff. We plan to add more
          features in the future as we grow, so please feel free to contact us
          once you're logged in with your ideas and suggestions!
        </p>
        <br />
        <p>
          Register now, or if you're already registered, log in to experience
          what we have to offer. If you're a new user, you will be redirected to
          a page explaining our house rules and we appreciate if you'd abide by
          them in order to keep a warm and respectful community. Thank you and
          have a great adventure!
        </p>
        <p>
          Thinkful staff: I am going to submit a separate gist containing two different types of
          users that you can use to test our functionality: an admin, and a banned user.
          Feel free to register a new user using test credentials to experience what new users would
          normally experience. 
        </p>
      </section>
    );
  }
}
