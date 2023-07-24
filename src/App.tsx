import React, {useState} from 'react';
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
   const [allCard,setAllCard] = useState<CardType[]>(card)
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

    const filterCard = (tags: string)=> {
        if (tags !=='ALL'){
        return setAllCard(allCard.filter(el=> el.title.includes(tags)))
    }else  setAllCard(card)
    }

    return (
        <Container>
            <UnInput onClick ={addCard} />
            {tags.length !== 1 ? tags.map((i,k)=>  <button  onClick={()=>filterCard(i)} key={k}>{i}</button>  ):''}
            <Cards card={allCard} removeCard={removeCard}/>
        </Container>
    );



};

export default App;