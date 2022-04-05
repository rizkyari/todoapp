import produce from "immer";
import * as type from "../type/type";
export const initialState = {
    datas:[],
    form: false,
    isLoading: false,
    isSuccess: false,
    isError: false,
  };

const rootReducer = (state =  initialState, action) =>
  produce(state, (draft) => {
      switch (action.type) {
            case type.get_data:
              draft.isLoading = true;
              break;
            case type.get_data_success:
              draft.datas = action.data;
              draft.isSuccess = true;
              draft.isLoading = false;
              break;
            case type.get_data_error:
              draft.isError = true;
              draft.isSuccess = false;
              break;
            case type.add_data:
              draft.datas.push({
                id: draft.datas.length + 1, 
                title: action.title,
                description: action.description,
                status: 0,
                createdAt: new Date().toLocaleDateString()
              });
              break;
            case type.add_data_success:
              draft.isSuccess = true;
              draft.isLoading = false;
              break;
            case type.add_data_error:
              draft.isError = true;
              draft.isSuccess = false;
              break;
            case type.enable_form:
              draft.form = action.status;
              break;
            default:
                break;
      }
  });

export default rootReducer;