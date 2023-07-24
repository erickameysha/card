import {Button, createStyles, rem} from '@mantine/core';
import React from 'react';
import {GoTrash} from "react-icons/go";





type PropsType ={
    title: string,
    onClick: (title: string)=> void

}
const useStyle = createStyles({
    button: {
      '&:hover':{
            color: "cyan"
        },

    }
})
const ButtonComponent = (props: PropsType) => {
    const onClickHandler = () => {
      props.onClick(props.title)
    }
const {classes} = useStyle()

    return (
        <Button  rightIcon={<RightButton title={props.title}/>} className={classes.button} onClick={onClickHandler} variant="light" color="gray">
            {props.title}
        </Button>
    );
};

export default ButtonComponent;



type RightPropsType ={
    title: string
}

 export const RightButton = (props: RightPropsType) => {

    return (
        <GoTrash  size={rem(14)}/>
    );
};
