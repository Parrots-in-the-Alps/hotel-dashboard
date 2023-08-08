import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"

export const useDataStore = defineStore('data', {
    state() {
        return {
            data: null,
            error_message: null
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
                    this.data = result.data.message;
                }
            } catch (error) {
                if (error.response.status != 200) {
                    this.error_message = error.response.data.message;
                }
            }
        }
    }
})
