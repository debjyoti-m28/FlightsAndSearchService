const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city;
        } catch (error){
            console.log("Something went wrong int repository layter");
            throw (error); 
        }
    }
    
    async deleteCity( cityId ){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error){
            throw (error); 
        }
    }    
}

module.exports = CityRepository;