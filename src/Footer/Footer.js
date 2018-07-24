import React from "react";

require('./Footer.css');

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className='Footer'>
        <p>&copy; 2018 Блог крутого разработчика</p>
        <p>Другие способы связи:</p>
        <p><a href="https://www.facebook.com/">Facebook</a></p>
        <p><a href="https://www.twitter.com/">Twitter</a></p>
      </div>
    )
  }
}