import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"

export const useDataStore = defineStore('data', {
    state() {
        return {
            data: null
        }
    },
    actions: {
        async getReservationsOnDates(entryDate, exitDate) {
            const headers = { 
                "Content-Type": "application/json"
            };
            const data = {
                entryDate : entryDate,
                exitDate: exitDate
            } 
            try {
                const result = await apiRequester.get("/api/getReservationsOnDates", { params: data, headers });
                console.dir(result);
                if (result.status == 200) {
                    this.data = result.data;
                }
            } catch (error) {
                if (error.response.status != 200) {
                    console.error("getReservationsOnDates : " + error.response.data.message);
                }
            }
        }
    }
})
