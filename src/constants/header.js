import {  Cookies } from "react-cookie";

const cookies = new Cookies();
const token = cookies.get('token');

export const headers= {
    "Authorization": `Bearer ${token}`,
    "Content-type": "application/json; charset=UTF-8",
};