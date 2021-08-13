import { Item } from "@common/types";
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "@common/store/actions";

export const initialState = {
    items: [{
        id: "123",
        firstName: "Oleksii",
        lastName: "Ivanov",
        email: "hello@gmail.com",
    }]
  }

export const itemsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
               items: [...state.items, {
                  id: action.item.id,
                  firstName: action.item.firstName,
                  lastName: action.item.lastName,
                  email: action.item.email,
                }]
              }
        case DELETE_ITEM:
            return {...state, items: state.items.filter((t:Item) => t.id !== action.id)}
        case EDIT_ITEM:
            return state;        
        default:
            return state;
    }
}