import { Schema } from "mongoose"
export const SpeciesSchema = new Schema ({
    name: {type: String, required: true, minLength: 3, maxLength: 25},
})
// {toJSON: {virtuals: true}