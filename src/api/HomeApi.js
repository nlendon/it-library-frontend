import api from "./index";

export const getAbout = async () => {
    const {data} = await api.get('/public/about/getAll');
    return data;
}

export const createContact = async (args) => {
    const {data} = await api.post('/public/contact/create', args);
    return data;
}