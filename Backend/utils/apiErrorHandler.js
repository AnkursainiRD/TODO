class apiError extends Error{
    constructor(statusCode,message="Something Went Wrong",errors=[],stack=''){
        super(message)
        this.statusCode=statusCode,
        this.data=message
        this.success=false
        this.error=errors

        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export default apiError;