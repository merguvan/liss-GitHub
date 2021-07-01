const mongoose=require('mongoose')

const userPersonalInfoSchema=new mongoose.Schema({
   
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

    },
    personGender:{
        type:String,
        required:[true, 'Please, enter your gender']
    },
    personAddressType:{
        type:String,
        required:[true, 'Please, enter address']
    },
    personFlatNo:{
        type:Number,
    },
    personBuildingNo:{
        type:Number,
    },
    personStreet:String,
    personDistrict:String,
    postalCode:String,
    personCity:{
        type:String,
        required:[true, 'Please, enter your current city']
    },
    personState:String,
    personCountry:{
        type:String,
        required:[true, 'Please, enter your current country']
    },
    personMaritalStatus:{
        type:String,
        required:[true, 'Please, enter your martrial Status']
    },
    personPhoneType:String,
    personPhoneCountryCode:String,
    personPhoneNumber:{
        type:Number,
        required:[true,'Please, enter your phone number ']
    },
    personEmailType:String,
    personEmail:{
        type:String,
        required:true,
        unique:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    // personPhoto:{
    //     type:Buffer
    // },
    // personPlatformType:String,
    // personPlatformUserName:String,
    // personCvDoc:{
    //     type:String,
    //     required:[true,'Please, upload your cv']
    // },
    // personCitizenship:String,
    // personWorkPermit:String,
    // personAvailableFrom:Date,
    // personAvailableTo:String,
    // personDbsDoc:String,
    // personMedicalDoc:String,
    // personOrcidID:{
    //     type:String,
    //     unique:true,
    // },
    // gdprConsent:{
    //     type:Boolean
    // },
    // personAutoID:String,


})

module.exports=mongoose.model('userPersonalInfo',userPersonalInfoSchema)