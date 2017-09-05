import React from 'react';



function AreYouSureYouWantToDelete(){



	return (

		<div className="modal">
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Delete</p>
      <button className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
      Are you sure you want to delete this post / comment?
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success">Save changes</button>
      <button className="button">Cancel</button>
    </footer>
  </div>
</div>


		)
}



export default AreYouSureYouWantToDelete