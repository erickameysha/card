import React from 'react';
import CardItem from "./Component/Cards/Card/Card";
import UnInput from "./Component/UnComonent/UnInput";
import Card from "./Component/Cards/Card/Card";
import Cards from "./Component/Cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {CardType, createCardAC, deleteCardAC} from "./store/Card-Reducer";

const App = () => {
    const card = useSelector<AppRootStateType, CardType[]>(state => state.card)
    const dispatch = useDispatch()

    const addCard = (title: string) => {
        dispatch(createCardAC(title))
    }

    const removeCard = (id: string) => {
        dispatch(deleteCardAC(id))
    }



    return (
        <div>
            <UnInput onClick ={addCard}/>
            <Cards card={card} removeCard={removeCard}/>
        </div>
    );
};

export default App;