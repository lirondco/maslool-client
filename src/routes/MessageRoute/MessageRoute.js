import React, { Component } from "react";
import { Link } from "react-router-dom";
import MessageContent from "../../components/MessageContent/MessageContent";
import PendingApiService from "../../services/pending-api-service";
import "./MessageRoute.css";

export default class MessageRoute extends Component {
  state = {
    pending: null,
    error: null
  };

  static defaultProps = {
    match: { params: {} },
  };

  componentDidMount = () => {
    this.setState({ error: 'Loading message ...', pending: null });
    const { pendingId } = this.props.match.params;
    PendingApiService.getPending(pendingId)
      .then((pending) => this.setState({ pending, error: null }))
      .catch((e) => this.setState({ e }));
  };

  handleDeleteMessage = () => {
    this.setState({ error: null });
    const { pendingId } = this.props.match.params;
    PendingApiService.deletePending(pendingId)
      .then(() => this.props.history.goBack())
      .catch((e) => this.setState({ e }));
  };

  renderMessage = () => {
    const { pending } = this.state;
      return <MessageContent pending={pending} onDeleteClick={this.handleDeleteMessage} />;
  };

  render() {
      const { error, pending } = this.state
      console.log(this.state, ' state ahihihihi')
    return (
      <section className="MessageRoute">
        {(!pending) ? <h2>Loading message...</h2> : <h2>Message from {pending.user.username}</h2>}
        <hr />
        <Link to='/messages'>
          <h3>{"<"} Back to Messages</h3>
        </Link> 
        <div role="alert">{error && <p className="error">{error}</p>}</div>
        {this.renderMessage()}
      </section>
    );
  }
}
