import React from 'react';
import {CardType} from "../../store/Card-Reducer";
import {Grid} from "@mantine/core";
import CardItem from "./Card/Card";

type PropsType = {
    card: CardType[]
    removeCard: (id: string) => void
    changeTitle:  (id: string, title: string) =>void
}




const Cards = (props: PropsType) => {

    return (
        <Grid>
            {
                props.card.map(el => {

                    return <Grid.Col span={4} key={el.id}>
                        <CardItem changeTitle={props.changeTitle}  removeCard={props.removeCard} id={el.id} title={el.title}/>
                    </Grid.Col>
                })
            }
        </Grid>

    );
};

export default Cards;