import { Schema } from "mongoose"
export const PlanetSchema = new Schema ({
    name: {type: String, required: true, minLength: 3, maxLength: 25},
    size: {type: String, required: true,  enum: ['dwarf', 'standard', 'colossal']},
    eclipsed: {type: Boolean, required: true},
    imgUrl: {type: String, maxLength: 500, required: true, default: 'https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    galaxyId: {type: Schema.Types.ObjectId, ref: 'Galaxy', required: true}
},{toJSON: {virtuals: true}
})

PlanetSchema.virtual('Galaxy',
{
    localField: 'galaxyId',
    foreignField: '_id',
    ref: 'Galaxy',
    justOne: true
})
