const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cardSchema = new Schema(
    {
            pack_code: String,
            pack_name: String,
            type_code: String,
            type_name: String,
            subtype_code: String,
            subtype_name: String,
            faction_code: String,
            faction_name: String,
            position: Number,
            exceptional: Boolean,
            myriad: Boolean,
            code: String,
            name: String,
            real_name: String,
            text: String,
            real_text: String,
            health_per_investigator: Boolean,
            deck_limit: Number,
            real_slot: String,
            traits: String,
            real_traits: String,
            is_unique: Boolean,
            hidden: Boolean,
            permanent: Boolean,
            double_sided: Boolean,
            url: String
        },
    
    {
        timestamps:true
    }
)

const Card = mongoose.model('Card',cardSchema)

module.exports = Card