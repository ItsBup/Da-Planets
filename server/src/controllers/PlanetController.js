
import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";



export class PlanetController extends BaseController {
    constructor() {
        super('api/Planet')
        this.router
            .post('', this.createPlanet)
            .get('', this.getPlanets)
            // .get('/:galaxyId', this.getOneGalaxy)
            // .delete('/:galaxyId', this.removeGalaxy)
            // .put('/:galaxyId', this.updateGalaxy)
    }

    async createPlanet(request, response, next) {
        try {
            const planetData = request.body
            const planet = await planetService.createPlanet(planetData)
            response.send(planet)
        } catch (error) {
            next(error)
        }
    }

    async getPlanets(request, response, next) {
        try {
            const planets = await planetService.getPlanets()
            response.send(planets)
        } catch (error) {
            next(error)
        }
    }

    // async getOneGalaxy(request, response, next) {
    //     try {
    //         const galaxyId = request.params.galaxyId
    //         const galaxy = await galaxyService.getOneGalaxy(galaxyId)
    //         response.send(galaxy)
    //     } catch (error) {
    //         next(error)
    //     }
    // }

    // async removeGalaxy(request, response, next) {
    //     try {
    //         const galaxyId = request.params.galaxyId
    //         const message = await galaxyService.removeGalaxy(galaxyId)
    //         response.send(message)
    //     } catch (error) {
    //         next(error)
    //     }
    // }

    // async updateGalaxy(request, response, next) {
    //     try {
    //         const galaxyId = request.params.galaxyId
    //         const updateData = request.body
    //         const galaxy = await galaxyService.updateGalaxy(galaxyId, updateData)
    //         response.send(galaxy)
    //     } catch (error) {
    //         next(error)
    //     }
    // }
}
