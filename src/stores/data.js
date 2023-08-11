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
            opsdata:{
                customerCapacity:0,
                clientInHotel:0,
                totalAccessCards:0,
                distributedCards:0,
                todayCheckins:0,
                todayCheckedins:0,
                checkInStats:[],
                resaToCheckIn:[],
                occupiedRooms:[],
                availableRooms:[],
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
        },

        async getOpsData() {
            try {
                const result = await apiRequester.get("/api/opsDashBoard");
                if (result.status == 200) {
                    this.opsdata.customerCapacity = result.data.message.customerCapacity;
                    this.opsdata.clientInHotel = result.data.message.clientInHotel;
                    this.opsdata.totalAccessCards = result.data.message.totalAccessCards;
                    this.opsdata.distributedCards = result.data.message.distributedCards;
                    this.opsdata.todayCheckins = result.data.message.todayCheckins;
                    this.opsdata.todayCheckedins = result.data.message.todayCheckedins;
                    this.opsdata.checkInStats = result.data.message.checkinStats;
                    this.opsdata.resaToCheckIn = result.data.message.resaToCheckin;
                    this.opsdata.occupiedRooms = result.data.message.occupiedRooms;
                    this.opsdata.availableRooms = result.data.message.availableRooms;
                    console.log('ici');
                    console.log(this.opsdata.checkInStats);
                }
            } catch (error) {
                console.log(error);  
            }
        }
    },
})