import {defineStore} from 'pinia'
import apiRequester from "../utils/apiRequester.js"

export const useDataStore = defineStore('data', {
    state() {
        return {
            data: null,
            reservations_by_months: {
                precedently_month: null,
                currently_month: null
            },
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
        },
        async getReservationsByMonths(precedently_month, currently_month) {
            const headers = { 
                "Content-Type": "application/json"
            };
            const data = {
                precedently_month : precedently_month,
                currently_month: currently_month
            } 
            try {
                const result = await apiRequester.get("/api/getReservationsByMonths", { params: data, headers });
                if (result.status == 200) {
                    this.reservations_by_months.precedently_month = result.data.reservations.precedently_month;
                    this.reservations_by_months.currently_month = result.data.reservations.currently_month;
                }
            } catch (error) {
                if (error.response.status != 200) {
                    this.error_message = error.response.data.message;
                }
            }
        }
    }
})
