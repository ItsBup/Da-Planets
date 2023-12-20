import { dbContext } from "../db/DbContext.js"
import { galaxyService } from "./GalaxyService.js"

class PlanetService {
    async createPlanet(planetData) {
        const planet = await dbContext.Galaxies.create(planetData)
        return planet
    }

    async getPlanets() {
        const planets = await dbContext.Planets.find()
        return planets
    }
    async getPlanetsInGalaxy(galaxyId){
        await galaxyService.getGalaxyById(galaxyId)
        const planets = await dbContext.Planets.find({galaxyId: galaxyId})
        return planets
    }
    // async getOnePlanet(galaxyId) {
    //     const galaxy = await dbContext.Galaxies.findById(galaxyId)
    //     if (!galaxy) {
    //         throw new Error(`No can do chief, no galaxy at id: ${galaxyId}`)
    //     }
    //     return galaxy
    // }
    // async removeGalaxy(galaxyId) {
    //     const galaxyToRemove = await dbContext.Galaxies.findById(galaxyId)
    //     if (!galaxyToRemove) {
    //         throw new Error(`No can do chief, deletion failed. No galaxy at id: ${galaxyId}`)
    //     }
    //     await galaxyToRemove.remove()
    //     return `Your ${galaxyToRemove.name} galaxy has been eradicated. Enjoyment.`
    // }
    // async updateGalaxy(galaxyId, updateData) {
    //     const originalGalaxy = await this.getOneGalaxy(galaxyId)
    //     originalGalaxy.name = updateData.name ? updateData.name : originalGalaxy.name
    //     originalGalaxy.type = updateData.type ? updateData.type : originalGalaxy.type
    //     originalGalaxy.imgUrl = updateData.imgUrl ? updateData.imgUrl : originalGalaxy.imgUrl
    //     await originalGalaxy.save()
    //     return originalGalaxy
    // }
}

export const planetService = new PlanetService()
