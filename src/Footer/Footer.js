import React from "react";
// Importing svg inline
import fbSvg from '!svg-inline-loader!./icons/fb.svg';
import twitterSvg from '!svg-inline-loader!./icons/twitter.svg';

require('./Footer.css');

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className='Footer'>
        <p>&copy; 2018 Блог крутого разработчика</p>
        <p>Другие способы связи:</p>
        <p><a href="https://www.facebook.com/"><span dangerouslySetInnerHTML={{ __html: fbSvg }} className='Footer__icon' /> Facebook</a></p>
        <p><a href="https://www.twitter.com/"><span dangerouslySetInnerHTML={{ __html: twitterSvg }} className='Footer__icon' /> Twitter</a></p>
      </div>
    )
  }
}