import axios from "axios";
import api from "../http-common-keycloack"

export async function postLogin(userName:string, password:string){
    return await api.post("realms/lmts/protocol/openid-connect/token", {
        client_secret: "Zlz3mGMEuuWGXAlUSjUE72qI0xZsaTPk",
        Username: userName,
        Password: password,
        client_id: "app_lmts",
        grant_type: "password"
    })
}