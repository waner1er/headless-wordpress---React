import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export class NouvellePage extends Component {
    state = {
        nouvelle:{},
        isLoaded: false
    }

    componentDidMount(){
        axios.get(`http://testmatierenoire/wp-json/wp/v2/news/${this.props.match.params.id}`)
            .then(res => this.setState({
                nouvelle: res.data,
                isLoaded:true
            }))
            .catch(err =>console.log(err));
    }
    render() {
        const { nouvelle, isLoaded} = this.state;
        if(isLoaded){
            return (
                <Fragment>
                    <h1 className='text-center text-success border my-5 p-3 bg-white text-uppercase'>{nouvelle.title.rendered}</h1>

                    
                    <div dangerouslySetInnerHTML={{ __html:nouvelle.content.rendered }}></div>
                    <button className="btn btn-primary text-white mb-5">
                        <Link to='/'>Retour</Link>
                    </button>
                </Fragment>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default NouvellePage
