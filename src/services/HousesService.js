import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class HousesService{
    async getHouses(){
        const res = await api.get('auth/api/houses')
        console.log('getting houses', res.data)
        AppState.houses = res.data
    }

    async createHouse(houseData){
        const res = await api.post('auth/api/houses', houseData)
        AppState.houses.push(res.data)
        return res.data
    }

    async getHouseById(houseId) {
        AppState.house = null
        const res = await api.get('auth/api/houses/' + houseId)
        AppState.house = res.data
    }

    async removeHouse(houseId){
        const res = await api.delete('auth/api/houses/' + houseId)
        let i = AppState.houses.findIndex(h => h.id == houseId)
        if(i != -1){
            AppState.houses.splice(i, 1)
        }
    }
}

export const housesService = new HousesService()