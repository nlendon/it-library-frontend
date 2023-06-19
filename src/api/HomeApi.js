import api from "./index";

export const getAbout = async () => {
    const {data} = await api.get('/public/about/getAll');
    return data;
}