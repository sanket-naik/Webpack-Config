export const validInputs=(...args)=>{
   return args.every(e=>typeof(parseInt(e))=="number" && !isNaN(parseInt(e)))
}