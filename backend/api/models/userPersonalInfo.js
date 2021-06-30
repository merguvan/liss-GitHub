const mongoose=require('mongoose')

const userPersonalInfoSchema=new mongoose.Schema({
    personOrcidID:{
        type:String,
        unique:true,
    },
    gdprConsent:{
        type:Boolean
    },
    personAutoID:String,
    personTitle:{
        type:String,
        required:[true,'Please, select your title']
    },
    personName:{
        type:String,
        required:[true, 'Please, type your name']
    },
    personSurname:{
        type:String,
        required:[true, 'Please, type your surName']

    },
    personMiddle:String,
    personDisplayName:String,
    personDOB:{
        type:Date,
        required:[true,"Please, enter your date of birth"]
    },
    personCityOB:{
        type:String,
        required:[true, 'Please, enter your country of Birth']

    },
    personCountryOB:{
        type:String,
        required:[true, 'Please, enter your city of Birth']

    }



})

module.exports=mongoose.model('userPersonalInfo',userPersonalInfoSchema)