import React, {ChangeEvent, KeyboardEventHandler, useState} from 'react';
import {Input} from '@mantine/core'
import {useDispatch} from "react-redux";
import {createCardAC} from "../../store/Card-Reducer";

type PropsType = {
    onClick: (title: string) => void

}


const UnInput = (props: PropsType) => {
    const [title, setTitle] = useState('')

    const onClickHandler = () => {
        props.onClick(title)
        // dispatch(createCardAC(title))
        console.log(title)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


// const onClickh
//andler = (e: KeyboardEventHandler<HTMLInputElement>) => {
//  e.cha
//
//     console.log()
// }
    return (
        <Input value={title} onChange={onChangeHandler} onKeyPress={(e) => {
            if (e.key === 'Enter') {
                onClickHandler()
            }

            console.log(e.key)
        }}/>
    );
};

export default UnInput;