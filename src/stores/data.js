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
            console.log("getReservationsOnDates()");
            console.log("entryDate = " + entryDate);
            console.log("exitDate = " + exitDate);
            try {
                const result = await apiRequester.get("/api/getReservationsOnDates", {
                    body: {
                        "entryDate": entryDate,
                        "exitDate": exitDate,
                    }
                });
                if (result.data.status == 200) {
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
