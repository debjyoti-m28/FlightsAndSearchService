function compareTime(departureString, arrivaltimeString) {
    const departureTime = new Date(departureString);
    const arrivalTime = new Date(arrivaltimeString);

    return departureTime < arrivalTime;
}

module.exports = {
    compareTime
}