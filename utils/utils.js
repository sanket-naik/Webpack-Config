export const validInputs=(...args)=>{
   return args.every(e=>typeof(e)=="number" && !isNaN(e))
}