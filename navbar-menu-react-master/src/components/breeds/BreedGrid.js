import React from 'react'
import BreedItem from './BreedItem'
import Spinner from '../ui/Spinner'

const BreedGrid = ({ items, isLoading }) => {
    return isLoading ? (
    
    <Spinner />  
        ) : (
    
    <section className="cards">

        {items.map((item) => (
            <BreedItem key={item.name} item={item}></BreedItem>

        ))}

    </section>
        )

}

export default BreedGrid
