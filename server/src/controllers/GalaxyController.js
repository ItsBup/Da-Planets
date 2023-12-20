
import { galaxyService } from "../services/GalaxyService.js";
import { planetService } from "../services/PlanetService.js";
import BaseController from "../utils/BaseController.js";



export class GalaxyController extends BaseController {
    constructor() {
        super('api/Galaxy')
        this.router
            .post('', this.createGalaxy)
            .get('', this.getGalaxies)
            .get('/:galaxyId', this.getOneGalaxy)
            .delete('/:galaxyId', this.removeGalaxy)
            .put('/:galaxyId', this.updateGalaxy)
    }

    async createGalaxy(request, response, next) {
        try {
            const galaxyData = request.body
            const galaxy = await galaxyService.createGalaxy(galaxyData)
            response.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(request, response, next) {
        try {
            const galaxies = await galaxyService.getGalaxies()
            response.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async getPlanetsInGalaxy(request,response,next){
        try {
            const galaxyId=request.params.galaxyId
            const planets=await planetService.getPlanetsInGalaxy(galaxyId)
            response.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async getOneGalaxy(request, response, next) {
        try {
            const galaxyId = request.params.galaxyId
            const galaxy = await galaxyService.getOneGalaxy(galaxyId)
            response.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async removeGalaxy(request, response, next) {
        try {
            const galaxyId = request.params.galaxyId
            const message = await galaxyService.removeGalaxy(galaxyId)
            response.send(message)
        } catch (error) {
            next(error)
        }
    }

    async updateGalaxy(request, response, next) {
        try {
            const galaxyId = request.params.galaxyId
            const updateData = request.body
            const galaxy = await galaxyService.updateGalaxy(galaxyId, updateData)
            response.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}
