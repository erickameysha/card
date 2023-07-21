import {v1} from "uuid";

export type CardType = {
    id: string,
    title: string
}





const initState: CardType[]=[]

 export  const CardReducer = (state= initState, action: ActionType): CardType[] => {
switch (action.type) {
    case "CREATE-CARD":
        return[{ id: v1(), title: action.newCard},...state]
    case "DELETE-CARD":
        return state.filter(el=> el.id !== action.id)

    case "UPDATE-CARD":{
        return state.map(el=> el.id === action.id ? {...el, title: action.title}: el)
    }
    default: return state
}

 }


 export const createCardAC = (newCard: string)=> ({
   type: 'CREATE-CARD' ,newCard
 }as const)
export const deleteCardAC = (id: string)=> ({
   type: 'DELETE-CARD' ,id
 }as const)
export const updateCardAC = (id:string,title: string)=> ({
   type: 'UPDATE-CARD' ,id,title
 }as const)


type ActionType = ReturnType<typeof createCardAC>
|ReturnType<typeof deleteCardAC>
|ReturnType<typeof updateCardAC>