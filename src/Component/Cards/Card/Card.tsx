import React from 'react';
import {Card, Title} from '@mantine/core'


type PropsType ={
    id: string,
    title: string
    removeCard : (id: string) => void

}
const CardItem = (props: PropsType) => {

    const highlightTags = (text:any) => {
        const tagRegex = /#(\p{L}+)/gu;
        const highlightedText = text.replace(tagRegex, '<span style="color: blue;">$&</span>');
        return { __html: highlightedText };
    };
    return (
        <Card radius={'md'} shadow="sm" padding="lg" withBorder>
            <Card.Section>
                <button onClick={()=> props.removeCard(props.id)}>z</button>
                <Title dangerouslySetInnerHTML={ highlightTags(props.title)}></Title>
            </Card.Section>
        </Card>
    );
};

export default CardItem;