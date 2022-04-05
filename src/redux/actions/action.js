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

export const visibleForm = (status) => ({
    type: type.enable_form,
    status
})