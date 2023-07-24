import React, {useEffect, useState} from 'react';
import UnInput from "./Component/UnComonent/UnInput";
import Cards from "./Component/Cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {CardType, createCardAC, deleteCardAC, updateCardAC} from "./store/Card-Reducer";
import {Container} from "@mantine/core";
import {addTagsAC, deleteTagsAC} from "./store/TagsReducer";
import ButtonComponent from "./Component/Button/Button";


const App = () => {
    const card = useSelector<AppRootStateType, CardType[]>(state => state.card);
    const tags = useSelector<AppRootStateType, string[]>(state => state.tags);
   const [allCard,setAllCard] = useState<CardType[]>(card)
    const dispatch = useDispatch();

useEffect(()=> {
    card?.forEach((el)=> {
        let tag= el.title.match(/#(\p{L}+)/gu)
        if (tag){
            return dispatch(addTagsAC(tag))
        }else return
    },[card])
    setAllCard(card)
},[card])
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

    const removeTags= (tag: string) => {
        dispatch(deleteTagsAC(tag))
    };

    const filterCard = (tags: string)=> {
        if (tags !=='ALL'){
        return setAllCard(allCard.filter(el=> el.title.includes(tags)))
    }else  setAllCard(card)
    }
    const changeTitle = (id: string, title: string) => {

      dispatch(updateCardAC(id, title))
    }
    return (
        <Container>
            <UnInput onClick ={addCard} />
            {tags.length !== 1 ? <div>{<ButtonComponent key={'0'} onClick={()=> filterCard('ALL')}title={'All'}/>} { tags.map((i,k)=> <ButtonComponent key={k} onClick={()=> filterCard(i)}title={i}/>)}</div>   :''}
            <Cards changeTitle={changeTitle} card={allCard} removeCard={removeCard}/>
        </Container>
    );



};

export default App;