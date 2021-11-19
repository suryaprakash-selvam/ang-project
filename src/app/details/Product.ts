export class reps{
    mobileNo: string | undefined
    firstName: string | undefined 
    lastName: string | undefined
    date: string | undefined
    
}

export class admin{
      userName : string | undefined;
	  password :string | undefined;
	  role: string | undefined;
}

export class patient{
    email	:string | undefined
    gender	:string | undefined
    address	:string | undefined
    age	:string | undefined
    date:string | undefined
    firstName?:string 
    lastName	:string | undefined
    mobileNo	:string | undefined
    finalReport : string|undefined
    appointmentdate:string|undefined
}


export class doctor{
    id	:string | undefined
    
        email	:string | undefined

        gender	:string | undefined

        age	:string | undefined

        city	:string | undefined

        qualification	:string | undefined

        mobileNo	:string | undefined

        date	:string | undefined

        firstName	:string | undefined

        lastName	:string | undefined

}

export class Timevalue{
    label?:string
    value?:string
}


export class docavl{
    docName?:string
    patientName?:string
    time?:string
}