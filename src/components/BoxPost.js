import React from 'react'


class BoxPost extends React.Component {





  render(){

    return (      

      <div className="columns is-centered">
      <div className="tile is-parent is-8">
            <article className="tile column is-child box">
              <p className="title">Main column</p>
              <p className="subtitle">With some content</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-home"></i></span><span>Date</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-book"></i></span><span>Comments</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-puzzle-piece"></i></span><span>Vote Up</span></a></li>
                  <li><a href="#"><span className="icon is-small"><i className="fa fa-puzzle-piece"></i></span><span>Vote Down</span></a></li>
                  <li className="is-active"><a href="#" aria-current="page"><span className="icon is-small"><i className="fa fa-thumbs-up" aria-hidden="true"></i></span><span>Total Votes</span></a></li>
              </ul>
            </nav>
            </article>
          </div>
          </div>
          )
  }
}


export default BoxPost





    