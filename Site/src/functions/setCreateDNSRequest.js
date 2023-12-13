const sendCreateDNSRequest = async (config, Server, site, zoneId, name) => {
    const {AccountID, email, GlobalAPIKey} = config
    const response = await fetch(`http://${location.hostname}:8888/api/updateDNS`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            GlobalAPIKey,
            AccountID,
            ZoneID: zoneId,
            siteName: site,
            Server,
            name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    console.log(data)

    if (data.success) {
        return name
    }

    return null
}

export default sendCreateDNSRequest
