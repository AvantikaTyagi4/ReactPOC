import { SERVICE_URL } from "../constants/configuration";
import { headers } from "../constants/header";

const identityUrl = SERVICE_URL +'/identity-api/personal-details';

export async function getPersonalDetails(candidateId) {
    return fetch(`${identityUrl}/${candidateId}`, {
      headers: headers,
    }).then((response) => response.json());
}

export async function savePersonalDetails(personalDetail){
  return fetch(identityUrl, {
    method: "POST",
    body: JSON.stringify(
      personalDetail
    ),
    headers: headers,
  }).then((response) => response.json());
}