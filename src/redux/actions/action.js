import * as type from "../type/type";

export const getData = () =>({
    type: type.get_data,
})

export const getDataSuccess = (data) => ({
    type: type.get_data_success,
    data
})

export const getDataError = (error) => ({
    type: type.get_data_error,
    error
})

export const postData = (title,description) => ({
    type : type.add_data,
    title,
    description
})

export const postDataSuccess = () => ({
    type : type.add_data_success,
})

export const postDataError = () => ({
    type : type.add_data_error,
})

export const updateData = (idx,title,description) => ({
    type : type.update_data,
    idx,
    title,
    description,
})

export const deleteData = (index) => ({
    type: type.delete_data,
    index,
})

export const finishTask = (index) => ({
    type: type.finish_task,
    index
})

export const visibleForm = (status) => ({
    type: type.enable_form,
    status
})

export const choosenIndex = (index) => ({
    type: type.choosen_index,
    index
})

export const editForm = (show) => ({
    type: type.enable_edit_form,
    show
})