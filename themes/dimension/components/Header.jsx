import React from 'react';
import classNames from 'classnames';

export class Header extends React.Component{

  constructor(props) {
    super(props);
  }


  render() {
    var headerClass = classNames({
      'dimensions-hide': !this.props.class,
      'header-center': true,
    });

    var headerId = classNames({
      'header': this.props.class,
    });

    return (
      <header id={headerId} className={headerClass}>
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
          <div className="inner">
            <h1>Tami Mitchell</h1>
            <h3>Full Stack Web Developer</h3>
            <p>I specialize in writing high quality web applications using Ruby on Rails, JavaScript, and responsive web development.</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#about" onClick={() => this.props.transitionHandler('about')}>About</a></li>
            <li><a href="https://github.com/tamimitchell"><span class="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/tameramitchell/"><span className="label">LinkedIn</span></a></li>
            <li><a href="#contact" onClick={() => this.props.transitionHandler('contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }


}
