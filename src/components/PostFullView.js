import React from 'react'



class PostFullView extends React.Component{





	render(){

		return (

		

			
				<article className="tile column is-child box">
              		<p className="title">Main column</p>
              		<p className="subtitle">With some content</p>
          			<div className="content">
                		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              		</div>
              		<nav className="level">
  						<div className="level-left">
    						<p className="level-item">
      							<small>Date</small>
    						</p>
    						<p className="level-item">
      							<small>232 Votes</small>
    						</p>
  						</div>
  						<div className="level-right">
						   <p className="level-item">
						      <a> Edit</a>
						    </p>
							<p className="level-item">
  								<a>Delete</a>
							</p>
						</div>
					</nav>
              </article>

			
			


		
		)
	}
}



export default PostFullView