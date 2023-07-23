import React from 'react';

import UnInput from "./Component/UnComonent/UnInput";

import Cards from "./Component/Cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {CardType, createCardAC, deleteCardAC} from "./store/Card-Reducer";
import {Container} from "@mantine/core";
import {addTagsAC} from "./store/TagsReducer";

const App = () => {
    const card = useSelector<AppRootStateType, CardType[]>(state => state.card);
    const tags = useSelector<AppRootStateType, string[]>(state => state.tags);
    const dispatch = useDispatch();

    const addCard = (title: string) => {
        dispatch(createCardAC(title))
        const tagsFinds = /#(\p{L}+)/gu;
        const tagsMatches = title.match(tagsFinds)
        if (tagsMatches) {
            return dispatch(addTagsAC(tagsMatches))
        }else {
            return
        }

    };

    const removeCard = (id: string) => {
        dispatch(deleteCardAC(id))
    };



    return (
        <Container>
            <UnInput onClick ={addCard} />
            {tags.length !== 0 ? tags.map((i,k)=> <div key={k}>{i}</div>):''}
            <Cards card={card} removeCard={removeCard}/>
        </Container>
    );



};

export default App;