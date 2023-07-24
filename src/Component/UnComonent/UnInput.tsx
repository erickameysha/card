import React, {ChangeEvent,  useState} from 'react';
import {Input} from '@mantine/core'

type PropsType = {
    onClick: (title: string) => void
}
const UnInput = (props: PropsType) => {
    const [title, setTitle] = useState('')
    const onClickHandler = () => {
        props.onClick(title)
        setTitle('')

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.currentTarget.value
        setTitle(text)

    }

    return (
        <Input placeholder={'Press Enter to post'} value={title} onChange={onChangeHandler} onKeyPress={(e) => {
            if (e.key === 'Enter') {
                onClickHandler()
            }
        }}/>
    );
};

export default UnInput;