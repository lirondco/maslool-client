import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import "./Welcome.css";

export default class Welcome extends Component {
  static contextType = UserContext;

  renderUserRules = (user) => {
    return (
      <>
        <h2>Welcome, {user.username}! Please read before proceeding:</h2>
        <hr />
        <p>
          1. Be respectful! Remember that online communities have real people
          behind the screens, and sometimes the anonimity gets us carried away
          with our words. We expect basic decency from all of our users and any
          violator will be given one warning before a permanent ban.
        </p>
        <br />
        <p>
          2. To prevent spam and keep the quality of our listings, we currently
          do not have any functionality for users to submit their own hikes.
          Please use the 'contact admin' feature to send us detailed suggestions
          and we will take your request into consideration.{" "}
        </p>
        <br />
        <p>
          3. If you see something, say something. Currently, the only
          interaction with other users that you will have here is in our comment
          sections. If you see a comment that is offensive or inappropriate,
          please flag the comment and it will automatically be reported to an
          admin.
        </p>
        <br />
        <p>
          4. We try to keep our rating system democratic and you can only rate
          once. Once you've entered your rating, you can only change it from
          there. If you think a group of users are abusing this feature, please
          contact an admin and we will look into it promptly.
        </p>
        <br />
        <p>
          5. Currently we only have trails in the US and its territories. If you
          want to send us trails in other countries, please make sure that the
          information you're providing us are either in English or in Hebrew.
        </p>
        <br />
        <p>
          6. The information provided by Maslool is for general information only
          and, as with many places, each trail is not guaranteed to be up to
          date at all times. Please contact us if you think a trail information
          needs to be updated. Visit the places at your own risk, and always
          check local advisories before going on your trip. We are not
          responsible for any injury or bodily harm that a member may experience
          in a location outlined in our website. <br />
          <br />{" "}
          <em>
            Under no circumstance shall we have any liability to you for any
            loss or damage of any kind incurred as a result of the use of the
            site or reliance on any information provided on the site. Your use
            of the site and your reliance on any information on the site is
            solely at your own risk.
          </em>
        </p>
        <br />
        <p>
          7. The site may contain links to other website or content belonging to
          or originating from third parties or links to websites and features in
          banners or other advertising. Though we do our best to keep our
          information up to date, such external links are not constantly
          investigated, monitored, or checked for accuracy, adequacy, validity,
          reliability, availability, or completeness by us.
        </p>
        <br />
        <p>
          8. Your continued use of the site will mean that you accept and agree
          to the terms and conditions of Maslool. Our moderators reserve the
          right to restrict access to any user we deem a threat to our staff and
          other members.
        </p>
        <br />
        <p>Welcome to Maslool and have a great adventure!</p>
      </>
    );
  };

  renderStaffRules = (user) => {
    return (
      <>
        <h2>Hello, {user.username}! Please read our staff guidelines: </h2>
        <hr />
        <p>
          1. Being chosen as a moderator means that the webmaster trusts you to
          take care of our forum as if it is your own.
        </p>
        <br />
        <p>
          2. As a member of this community, do not hesitate to join in the
          discussions!
        </p>
        <br />
        <p>
          3. Though we have rules in place, please make sure that we are keeping
          a friendly environment in our community. We do not want to drive users
          away!
        </p>
        <br />
        <p>
          4. Always review the 'Alert' tab for flagged comments and 'Messages'
          for messages from our users every time you log in.
        </p>
        <br />
        <p>
          5. Staff communication will be done in our emails. If there's
          uncertainty, feel free to ask!
        </p>
        <br />
        <p>
          6. Abuse of power is not tolerated. The webmaster reserves her right
          to remove your admin privileges and restrict your access to the
          website permanently.
        </p>
        <br />
        <p>
          7. If a user is seen violating a rule, please give them their first
          and last warning and if they do not comply, ban.
        </p>
        <br />
        <p>
          8. Though there is a functionality to ban straight from the list of
          flagged comments, always go to the source first to see any context and
          any other violating users before taking action.
        </p>
        <br />
        <p>9. If you have any more question, please contact the webmaster. </p>
        <br />
        <p>Thank you for keeping our community safe and friendly!</p>
      </>
    );
  };

  render() {
    const { user } = this.context;

    return (
      <section className="welcome">
        {user.admin ? this.renderStaffRules(user) : this.renderUserRules(user)}
      </section>
    );
  }
}
