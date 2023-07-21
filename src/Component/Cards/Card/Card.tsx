import React from 'react';
import {Card, Title} from '@mantine/core'


type PropsType ={
    id: string,
    title: string
    removeCard : (id: string) => void

}
const CardItem = (props: PropsType) => {


    return (
        <Card radius={'md'} shadow="sm" padding="lg" withBorder>
            <Card.Section>
                <button onClick={()=> props.removeCard(props.id)}>z</button>
                <Title>{props.title}</Title>
            </Card.Section>
        </Card>
    );
};

export default CardItem;