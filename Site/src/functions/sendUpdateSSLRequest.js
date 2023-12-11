import {email, GlobalAPIKey} from "../config";

const sendUpdateSSLRequest = (zoneId, type, setValue) => {
    fetch(`http://${location.hostname}:8888/api/updateSSL`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            GlobalAPIKey,
            ZoneID: zoneId,
            type
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            setValue(data.result.value)
        })
        .catch(err => console.log(err))
}

export default sendUpdateSSLRequest
