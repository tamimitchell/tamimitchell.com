import React from 'react';
import classNames from 'classnames';

export class About extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var aboutClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });

    return (
      <article id="about" className={aboutClass}>
        <h2>Hello! I'm Tami Mitchell</h2>
        <span className="image right"><img src="../images/pic01.jpg" alt="" /></span>
        <p>
          I'm a programmer. I've worked as a remote Ruby on Rails and front end developer for 6 years.
        </p>

        <p>
          I strive to build well crafted software, because I believe that having a mindful, craftsman-like mentality produces fulfilling results for clients and my own life. I also believe in the importance of shipping usable products and continually improving them over time - the prettiest code does nothing for the world if it never goes live.
        </p>

        <p>
          I love to learn and be constantly growing into the best version of myself. I chose this career in large part because of the many opportunities to learn technical skills as well as the other vital skills for a remote programmer - empathy, design, communication and self motivation.
        </p>

        <p>
          I believe being a good programmer also depends on having a healthy work-life balance. When I’m not coding I travel, hike, read, do yoga, go off-roading, spend quality time with friends and family, and practice my pizza-making-and-eating skills. I write about my &nbsp;
          <a href="https://tamievergreen.com">travels and personal life here.</a>
        </p>
        <div onClick={() => this.props.endTransitionHandler('about')} className="close">Close</div>
      </article>
    );
  }
}
