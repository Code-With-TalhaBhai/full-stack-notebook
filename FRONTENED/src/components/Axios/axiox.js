import axios from 'axios';

const url = "http://localhost:4000";
const urlAuth = "http://localhost:4000/api/auth";
const urlNote = "http://localhost:4000/api/note";

// Authentication
export const login = async(log)=>{
    return await axios.post(`${urlAuth}/login`,log);
}

export const signup = async(sign)=>{
    return await axios.post(`${urlAuth}/createUser`,sign)
}

// Notes
export const allNotes = async()=>{
    return await axios.get(`${urlNote}/`);
}