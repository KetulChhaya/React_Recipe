import React, { Component, useEffect, useState } from 'react'
import './App.css'
import Recipe from './components/Recipe'

const App = () => {

    const APP_ID = '4f7028ae'
    const APP_KEY = 'd31cdd515f7f626c1ca1f45829ca5e83'

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('Indian')

    useEffect(async () => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        console.log(data.hits)
        setRecipes(data.hits)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        // console.log(search)
    }

    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return(
        <div className="App">
        <form className="search-form" onSubmit={getSearch}>
            <input type ="text" className="search-bar" value={search} onChange={handleSearch}/>
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="container">
            {recipes.map((recipe, index) => <Recipe key={index} title={recipe.recipe.label} cuisine={recipe.recipe.cuisineType} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>)}
        </div>
        </div>
    )
}

export default App
