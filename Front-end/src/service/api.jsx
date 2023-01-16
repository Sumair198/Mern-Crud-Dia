import axios from 'axios';

  const getUsers = async () => { 
    
    try {
      return await axios.get(`http://localhost:12000/getdata`)
    //   console.log(result.data)
 
    }
    catch (err) {
      console.log('Error while calling api get Users', err)
    }
  }
  // const getUser = async (id) =>
  // {
  //   try{
  //     return await axios.get(`http://localhost:12000/getdata/${id}`)
  //   }
  //   catch(err)
  //   {
  //     console.log(`Error while calling api get Users`, err)
  //   }
  // }
  

export default getUsers;
  