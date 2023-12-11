import {AccountID, email, GlobalAPIKey} from "../config";

const sendCreateZoneRequest = (site, setZoneId, setAddZoneLoad, setDNSServers) => {
    fetch(`http://${location.hostname}:8888/api/createZone`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            GlobalAPIKey,
            AccountID,
            siteName: site
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                console.log(data)
                setZoneId(data.result.id)
                setDNSServers(data.result.name_servers)
            } else {
                setZoneId(null)
            }
        })
        .catch(err => setZoneId(null))
        .finally(z => setAddZoneLoad(false))
}

export default sendCreateZoneRequest
