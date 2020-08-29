import { create } from "apisauce"

const api = create({
    baseURL: 'https://itunes.apple.com',
})
// search?term=jack+johnson
export const searchService = async (searchText) => {
    const res = await api.get(`search?term=${searchText}`);
    console.log(res);
    return res.data.results;
}