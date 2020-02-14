import React, { Component } from 'react'
import axios from 'axios';
import NouvelleItems from './NouvelleItem';


export class Nouvelles extends Component {
   state = {
       nouvelles: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('http://testmatierenoire/wp-json/wp/v2/news?per_page=100')
       .then(res => this.setState({
           nouvelles: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }

   render() {
    const {nouvelles} = this.state;
    return (
        <div>
            <h2 class="title text-center text-success border m-5 p-3 bg-light">Home</h2>

            {nouvelles.map(nouvelle =>
            <NouvelleItems key={nouvelle.id} nouvelle={nouvelle}/>
            )}
        </div>
    );
}
}
export default Nouvelles;


