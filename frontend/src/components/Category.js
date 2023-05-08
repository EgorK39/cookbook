import React from "react";
import "../styles/Category.css";
import axios from "axios";
import {useParams} from "react-router-dom";

function Category() {
    const cat = {
        "Рецепты первых блюд": 1,
        "Рецепты вторых блюд": 2,
        "Рецепты напитков": 3,
        "Рецепты сладостей": 4,

    }
    const params = useParams();
    console.log(params.id, params);
    let [parList, setParList] = React.useState([]);

    function eventForRendering() {
        axios.get('http://localhost:8000/api/v1/recipes/')
            .then(res => {
                setParList(res.data)
                console.log(parList);

            });
    }

    console.log(parList);
    console.log("cat:", cat[params.id]);
    return (
        <>
            <h3>Hello from Cat</h3>
            <button onClick={eventForRendering}>
                <h3>{params.id}</h3>
            </button>
            {parList ?
                <table>
                    <tbody>
                    {parList.map((res, index) =>
                        <tr key={res.timeCreated}>
                            <td><h2>{res.title}</h2></td>
                            <td><img src={res.picture} alt={'picture'}/></td>
                            <td><span>{res.description}</span></td>
                            <td><span>{res.timeUpdated}</span></td>


                        </tr>
                    )}
                    </tbody>
                </table> : ''
            }
        </>
    );
}

export default Category;