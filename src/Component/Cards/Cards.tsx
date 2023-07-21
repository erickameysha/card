import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {CardType} from "../../store/Card-Reducer";
import {Grid} from "@mantine/core";
import CardItem from "./Card/Card";

type PropsType ={
  card:  CardType[]
    removeCard : (id: string) => void
}
const Cards = (props: PropsType) => {

    return (
        <Grid>
            {
               props.card.map(el => {

                    return <Grid.Col key={el.id}>
                       <CardItem removeCard={props.removeCard} id={el.id}title={el.title}/>
                    </Grid.Col>
                })
            }
        </Grid>

    );
};

export default Cards;