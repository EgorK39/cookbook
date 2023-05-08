import React from "react";
import "../styles/CategoryList.css";
import axios from "axios";
import {Link} from "react-router-dom";

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: []
        };
    }

    componentDidMount() {
        let data;
        axios.get('http://127.0.0.1:8000/api/v1/catlist/')
            .then(res => {
                console.log('res:', res)
                data = res.data;

                this.setState({
                    detail: data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className={'font-cormorant'}>
                {this.state.detail.map(res =>
                    <h3 key={res.title}><Link to={`/${res.title}`}>
                        {res.title}</Link></h3>
                )}
            </div>
        );
    }
}

export default CategoryList;