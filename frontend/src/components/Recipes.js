import React from "react";
import "../styles/Recipes.css";
import axios from "axios";

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        let data;
        axios.get('http://localhost:8000/api/v1/recipes/')
            .then(response => {
                console.log(response);
                data = response.data;

                this.setState({
                    recipes: data
                });
            })
            .catch(error => {
                console.log(error);
            })

    }

    render() {
        return (
            <>
                <div>Hello from Recipes</div>
                <div>
                    {this.state.recipes.map(res =>
                        <div key={res.timeCreated}>
                            <h2>{res.title}</h2>
                            <img src={res.picture} alt={'picture'}/>
                            <span>{res.description}</span>
                            <span>{res.timeUpdated}</span>
                        </div>
                    )}
                </div>
            </>

        );
    }
}

export default Recipes;