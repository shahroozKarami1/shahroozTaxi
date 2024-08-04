    import axios from "axios";

    async function getData(api) {


   let  res  =  await   axios.get(api) 
  let  saveData  =   res.data

  return  saveData
 }


export { getData };
