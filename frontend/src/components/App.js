import React from "react";
import "../styles/App.css";
import CategoryList from "./CategoryList";
import Recipes from "./Recipes";
import Category from "./Category";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div className={'font-cormorant'}>
                hello
                <nav>
                    <ul>
                        <li><Link to="/recipes">ALL Recipes</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/recipes" element={<Recipes/>}/>
                    <Route path="/" element={<CategoryList/>}/>
                    <Route path="/:id" element={<Category/>}/>

                </Routes>

            </div>
        );
    }
}

export default App;