import { Schema } from "mongoose"
export const GalaxySchema = new Schema ({
    name: {type: String, required: true, minLength: 3, maxLength: 25},
    type: {type: String, required: true,  enum: ['spiral', 'irregular', 'dead',
    'dwarf', 'elliptical', 'peculiar', 'active', 'barred']},
    imgUrl: {type: String, maxLength: 500, required: true, default: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
})
//,{toJSON: {virtuals: true}})