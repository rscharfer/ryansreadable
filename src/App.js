import React, { Component } from 'react';
import PostFullView from './components/PostFullView.js'

class App extends Component {
  render() {
    return (
      <div>
          <section className="section">
            <div className="container">        
               
<nav className="level is-mobile">
  <div className="level-left">
    <p className="level-item">
      <a>All</a>
    </p>
    <p className="level-item">
      <a>Cat 1</a>
    </p>
    <p className="level-item">
      <a>Cat 2</a>
    </p>
    <p className="level-item">
      <a>Cat 3</a>
    </p>
  </div>

   <p className="level-item">
    <span className="is-size-1">Read</span>
  </p>
  <div className="level-right">
   <p className="level-item">
      <strong>Order By:</strong>
    </p>
   <p className="level-item">
      <a>Votes</a>
    </p>
    <p className="level-item">
      <a>Date</a>
    </p>
    <p className="level-item">
      <a className="button is-success">Create New Post</a>
    </p></div>
</nav>
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
         </div>
         <div className="columns is-centered">
  <div className="tile is-parent is-8">
         <PostFullView/>
         </div></div>
          </section>
      </div>
  
    );
  }
}

export default App;
