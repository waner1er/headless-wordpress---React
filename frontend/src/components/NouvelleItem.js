import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'



export class NouvelleItems extends Component {
   state = {
       isLoaded: false
   }
   static propTypes = {
       nouvelle: PropTypes.object.isRequired
   }
   
 
   render() {
       const { id, title, excerpt } = this.props.nouvelle;
       return (
           <div class="row my-4">
              <h2 className="mx-auto text-uppercase ty-2">{title.rendered}</h2>
              <div className="px-2" dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
                <button className="btn btn-primary ml-3 text-white ">
                    <Link to={`/nouvelle/${id}`}>Lire la Nouvelle</Link>
                </button>
                <hr />
           </div>
       )
   }
}
export default NouvelleItems 