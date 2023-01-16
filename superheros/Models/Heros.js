import mongoose from "mongoose";



const HeroSchema = mongoose.Schema({
    superHero: {
        type: String,
        required: [true, 'Please enter SuperHero name'],
        unique:true
    },

    realName: {
        type: String,
        required: true,
        maxlength: [200, 'Please keep real name short']
    }
})


exports.module = mongoose.model.Hero || mongoose.model('Hero', HeroSchema)