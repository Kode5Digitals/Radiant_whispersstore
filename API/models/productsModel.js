const { Schema, model } = require("mongoose")

const productSchema = new Schema(
    {
        name: {
            type:String
        },
        price: {
            type:Number
        }, 
        image: {
            type:String
        },
         description: {
            type: String
        },
        category: { type: String, ref: 'Category' }
           ,
        createdAt: {
            type: Schema.Types.Date

        }
    }
    ,
// { typeKey: '$type' },

    {
        timestamps: true
    }

)

const productCollections = model("Product", productSchema)
module.exports = productCollections
