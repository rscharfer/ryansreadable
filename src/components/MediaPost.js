import React from 'react'



class MediaPost extends React.Component{





	render(){

		return (

		
			<div className="columns is-centered">
			<div className="column is-8">
				<article className="media">
  <figure className="media-left">
    <p className="image is-64x64">
      <img src={"http://bulma.io/images/placeholders/128x128.png"}/>
    </p>
  </figure>
  <div className="media-content">
    <div className="content">
      <p>
        <strong>John Smith</strong> <small>Jan 5th, 2014 06:23pm</small>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav className="level is-mobile">
      <div className="level-left">
        <a className="level-item">
          <span className="icon is-small"><i className="fa fa-reply"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fa fa-retweet"></i></span>
        </a>
        <a className="level-item">
          <span className="icon is-small"><i className="fa fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div className="media-right">
    <button className="delete"></button>
  </div>
</article>
</div>
</div>

			
			


		
		)
	}
}



export default MediaPost