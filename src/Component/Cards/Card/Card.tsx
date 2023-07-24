import React from 'react';
import {Card, createStyles, Group, Menu, ActionIcon, rem} from '@mantine/core'
import {BsThreeDotsVertical} from "react-icons/bs";
import {GoTrash} from "react-icons/go";
import EditSpan from "../../UnComonent/EditSpan";


type PropsType = {
    id: string,
    title: string
    removeCard: (id: string) => void
    changeTitle: (id: string, title: string) =>void

}

const useStyle = createStyles(() => ({
    card: {
        padding: '5px 10px',
    },
    section: {
        wordWrap: 'break-word',
        padding: '10px 20px',
        fontSize: '20px',
    }
}))
const CardItem = (props: PropsType) => {
    const {classes} = useStyle()
    const changeTitle = (title: string) => {
      props.changeTitle(props.id, title)
    }
    return (
        <Card  radius={'md'} shadow="sm" padding="xl" withBorder>
            <Card.Section>
                <Group position="right" className={classes.card} >
                    <Menu withinPortal position="bottom-end" shadow="sm">
                        <Menu.Target>
                            <ActionIcon>
                                <BsThreeDotsVertical size={rem(12)}/>
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item onClick={() => props.removeCard(props.id)} icon={<GoTrash size={rem(14)}/>} color="red">
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Card.Section>
            <Card.Section className={classes.section}>
                <EditSpan title={props.title} onChange={changeTitle}/>
            </Card.Section>
        </Card>
    );
};

export default CardItem;