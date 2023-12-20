import { dbContext } from "../db/DbContext.js"

class GalaxyService {
    async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxies.create(galaxyData)
        return galaxy
    }

    async getGalaxies() {
        const galaxies = await dbContext.Galaxies.find()
        return galaxies
    }
    async getGalaxyById(galaxyId){
        const galaxy = await dbContext.Galaxies.findById(galaxyId)
        if(!galaxy){
            throw new Error(`No. id:${galaxyId} doesn't exits`)
        }
        return galaxy
    }
    async getOneGalaxy(galaxyId) {
        const galaxy = await dbContext.Galaxies.findById(galaxyId)
        if (!galaxy) {
            throw new Error(`No can do chief, no galaxy at id: ${galaxyId}`)
        }
        return galaxy
    }
    async removeGalaxy(galaxyId) {
        const galaxyToRemove = await dbContext.Galaxies.findById(galaxyId)
        if (!galaxyToRemove) {
            throw new Error(`No can do chief, deletion failed. No galaxy at id: ${galaxyId}`)
        }
        await galaxyToRemove.remove()
        return `Your ${galaxyToRemove.name} galaxy has been eradicated. Enjoyment.`
    }
    async updateGalaxy(galaxyId, updateData) {
        const originalGalaxy = await this.getOneGalaxy(galaxyId)
        originalGalaxy.name = updateData.name ? updateData.name : originalGalaxy.name
        originalGalaxy.type = updateData.type ? updateData.type : originalGalaxy.type
        originalGalaxy.imgUrl = updateData.imgUrl ? updateData.imgUrl : originalGalaxy.imgUrl
        await originalGalaxy.save()
        return originalGalaxy
    }
}

export const galaxyService = new GalaxyService()
