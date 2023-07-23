

const initialState:string[]=[]
type ActionType =ReturnType<typeof addTagsAC> |ReturnType<typeof  deleteTagsAC>
export const tagsReducer =(state=initialState, action: ActionType)=> {
    switch (action.type) {
        case "ADD-TAGS":{
             action.newTags.forEach((el)=>{
                if (!state.includes(el)){
                    return state.push(el)
                }
            })
            return state
        }
        case "DELETE-TAGS":{
            return state.filter(el => el !== action.newTags)
        }
        default: return state
    }

}

export const addTagsAC = (newTags: string[]) => ({
    type: 'ADD-TAGS', newTags
}as const)
const deleteTagsAC = (newTags:string) => ({
    type: 'DELETE-TAGS', newTags
}as const)