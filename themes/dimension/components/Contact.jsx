import React from 'react';
import classNames from 'classnames';

export class Contact extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var contactClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });


    return (
      <article id="contact" className={contactClass}>
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </form>
        <div onClick={() => this.props.endTransitionHandler('contact')} className="close">Close</div>
      </article>
    );
  }
}
