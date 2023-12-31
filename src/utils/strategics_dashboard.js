import moment from "moment";

export const addDayToDate = function(dateString) {
    return moment(dateString).add(moment().date() - 1, 'days').format("L");
}

export const averageTimeBetweenReservationAndCheckIn = function(data) {
    data = JSON.parse(JSON.stringify(data));
    const result = [];

    data.forEach(reservation => {
        if(reservation.checked_in != null) {
            const date_format = "YYYY/mm/DD";
            const created_at = moment(reservation.created_at, date_format);
            const checked_in = moment(reservation.checked_in, date_format);
            result.push(created_at.diff(checked_in, "days"));
        }
    });

    return result;
}

export const roomOccupancyRateInTheFuture = function(data) {
    data = JSON.parse(JSON.stringify(data));
    let reservations = 0;

    data.forEach(reservation => {
        if(reservation.checked_in == null) {
            reservations++;
        }
    });
    
    const result = Math.round((reservations / 31) * 100);
    return result;
}

export const fillingRate = function() {
    const result = Math.round((750 / 961) * 100); // 750 chambres ~environ alloués /mois et 961 = 31 chambres * 31 jours 
    return result;
}

export const numberOfReservations = function(data) {
    data = JSON.parse(JSON.stringify(data));
    return data.length;
}
