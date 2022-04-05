import produce from "immer";
import * as type from "../type/type";
export const initialState = {
    datas:[],
    form: false,
    formEdit: false,
    idx: null,
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
              draft.form = false;
              break;
            case type.enable_form:
              draft.form = action.status;
              break;
            case type.choosen_index:
              draft.idx = action.index;
              break;
            case type.enable_edit_form:
              draft.formEdit = action.show;
              break;
            case type.update_data:
              draft.datas[action.idx].title = action.title;
              draft.datas[action.idx].description = action.description;  
              draft.formEdit = false;
              break;
            case type.delete_data: 
              draft.datas.splice(action.index, 1);
              break;  
            case type.finish_task:
              draft.datas[action.index].status = 1;
              break;
            default:
                break;
      }
  });

export default rootReducer;