export interface userLogin{
    username:string,
    email:string,
    password:string|number
}

export interface apiResponce{
    message:string,
    token:string,
    role:string,
    error:{
        message:string
    }
}


export interface hotelType{
    addtionalfacilities:Array<string>,
    contact:string,
    hotelallotedguests:number,
    hotelbeds:number,
    hoteldescription:string,
    hotelname:string,
    hotelpicture:string,
    hotelrate:number,
    id:number,
    pincode:number
}

export interface countType{
    totalHotels:number
    totalusers:number
    totalbookings:number
}

export interface onAddHotel{
    hotelid:number,
    totalprice:number,
    totalpersons:number
}

export interface bookingType{
    username:string,
    hotelname:string,
    totalpersons:number,
    totalprice:number,
    hotelpicture:string
}