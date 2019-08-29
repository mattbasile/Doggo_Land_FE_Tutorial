import React from 'react'
import Card from './Card'

export default function CardSection(props) {
    return (
        <section>
            {props.dogs.map(dog=>{
                return <Card key={dog.id} dog={dog}/>
            })}
        </section>
    )
}
