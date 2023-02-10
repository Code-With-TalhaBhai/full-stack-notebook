import React from 'react';

function Contactform() {
    return (
<div>
     <div className='container my-5'>
 <h2 className='my-5'> 
            ADDING A NOTE
  </h2>
<form>
<div className="form-group mb-3">
    <label htmlFor="exampleFormControlInput1">Title</label>
    <input type="text" className="form-control border-info" id="exampleFormControlInput1" placeholder="My Title"/>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleFormControlSelect1">Example select</label>
    <select className="form-control border-info" id="exampleFormControlSelect1">
      <option>General</option>
      <option>Wordpress</option>
      <option>M.E.R.N</option>
      <option>Coding</option>
      <option>Freelancing</option>
      <option>Remainder</option>
      <option>Extra Activity</option>
      <option>Entertainment</option>
    </select>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control border-info" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>  
  
  <button type="button" className="btn btn-primary">Submit</button>
</form>
        </div>
        </div>
    )
}

export default Contactform
