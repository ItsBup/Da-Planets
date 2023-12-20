import { dbContext } from "../db/DbContext.js"
import { galaxyService } from "./GalaxyService.js"

class SpeciesService {
    async createSpecies(speciesData) {
        const species = await dbContext.Galaxies.create(speciesData)
        return species
    }

    async getSpecies() {
        const species = await dbContext.Species.find()
        return species
    }
}

export const speciesService = new SpeciesService()
