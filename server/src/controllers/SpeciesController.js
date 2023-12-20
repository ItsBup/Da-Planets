import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";



export class SpeciesController extends BaseController {
    constructor() {
        super('api/Species')
        this.router
            .post('', this.createSpecies)
            .get('', this.getSpecies)
    }

    async createSpecies(request, response, next) {
        try {
            const speciesData = request.body
            const species = await speciesService.createSpecies(speciesData)
            response.send(species)
        } catch (error) {
            next(error)
        }
    }

    async getSpecies(request, response, next) {
        try {
            const species = await speciesService.getSpecies()
            response.send(species)
        } catch (error) {
            next(error)
        }
    }
}
