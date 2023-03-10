const { FlightService } = require("../services/index");
const { SuccessCodes, ServerErrorCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        //flitering req.body 
        const createFlightData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }

        const flight = await flightService.createFlight(createFlightData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully created the flight."
        })
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
        data: {},
        success: false,
        message: "Not able to create the flight.",
        err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully fetched the flight."
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
        data: {},
        success: false,
        message: "Not able to fetch the flight.",
        err: error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const flights = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flights,
            success: true,
            err: {},
            message: "Successfully fetched the flights."
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
        data: {},
        success: false,
        message: "Not able to fetch the flights.",
        err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: "Successfully updated the flight."
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
        data: {},
        success: false,
        message: "Not able to updated the flight.",
        err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    update
}