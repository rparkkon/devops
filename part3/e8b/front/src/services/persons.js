import axios from 'axios'

//const baseUrl = 'http://192.168.224.153:3001/api/persons'
//const baseUrl = 'http://localhost:3001/persons'
const baseUrl =  '/api/persons'
console.log('baseUrl: ', baseUrl)

const getAll = () => {
   const request = axios.get(baseUrl)
   console.log('persons getAll:',  request)
   return request.then(response => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject) 
  return request.then(response => response.data) 
}

const update = (id, newObject) => {
  console.log('person update:',  id, ' ' , newObject)
  const request =  axios.put(`${baseUrl}/${id}`, newObject) 
    return request.then(response => response.data) 
}

const deletePerson = (id) => {
//    HTTP DELETE
    const request = axios.delete(`${baseUrl}/${id}`) 
    return request.then(response => response.data) 
  }

export default { getAll, create, update, deletePerson }