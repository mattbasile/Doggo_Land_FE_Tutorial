import React from 'react'
import Card from './Card'

export default function CardSection(props) {
    return (
        <section>
            {props.items.map(item=>{
                return <Card key={item.id} item={item} dogMode={props.dogMode}/>
            })}
        </section>
    )
}
