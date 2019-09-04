import React from 'react'
import Card from './Card'

export default function CardSection(props) {
    return (
        <section className="flex flex-wrap justify-center">
            {props.items.map(item=>{
                return <Card key={item.id} item={item} dogMode={props.dogMode}/>
            })}
        </section>
    )
}
