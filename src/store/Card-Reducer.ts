

const initState: any[]=[]

 export  const CardReducer = (state= initState, action: ActionType): any => {
switch (action.type) {
    case "CREATE-CARD":
        return[action.newCard,...state]
    case "DELETE-CARD":
        return state.filter(el=> el.id !== action.id)

    case "UPDATE-CARD":{
        return state.map(el=> el.id === action.id ? {...el, title: action.title}: el)
    }
}

 }


 const createCardAC = (newCard: any)=> ({
   type: 'CREATE-CARD' ,newCard
 }as const)
const deleteCardAC = (id: string)=> ({
   type: 'DELETE-CARD' ,id
 }as const)
const updateCardAC = (id:string,title: string)=> ({
   type: 'UPDATE-CARD' ,id,title
 }as const)


type ActionType = ReturnType<typeof createCardAC>
|ReturnType<typeof deleteCardAC>
|ReturnType<typeof updateCardAC>