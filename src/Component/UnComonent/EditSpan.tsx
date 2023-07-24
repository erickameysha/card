import React, {useState} from 'react';
import {Textarea, Text} from "@mantine/core";

type PropsType ={
    title:string
    onChange: (title:string)=> void
}
const EditSpan = (props:PropsType) => {
    const [title, setTitle] = useState(props.title)
    const [editMode, setEditMode] = useState(false)


    const activeEditMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const activeViewMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const highlightTags = (text: any) => {
        const tagRegex = /#(\p{L}+)/gu;
        const highlightedText = text.replace(tagRegex, '<span style="color: blue;">$&</span>');
        return {__html: highlightedText};
    };
    return (
        editMode ?
            <Textarea
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}
                placeholder="Autosize with no rows limit"
                label="Autosize with no rows limit"
                autosize
                minRows={2}
                autoFocus
                onBlur={activeEditMode}
            />
            : <Text  dangerouslySetInnerHTML={highlightTags(props.title)}  onDoubleClick={activeViewMode}></Text>
    );
};

export default EditSpan;