import React, {useState} from "react";
import Zone from "./Tr/Zone";
import DNS from "./Tr/DNS";
import SSL from "./Tr/SSL";

const Tr = ({site, Server, index}) => {
    const [zoneId, setZoneId] = useState(null)
    const [DNSServers, setDNSServers] = useState(null)

    const renderDNSServers = () => {
        if (!DNSServers) return ''
        return <span>{DNSServers[0]}<br/>{DNSServers[1]}</span>
    }


    return (
        <tr>
            <td>{index}</td>
            <td>{site}</td>
            <td><Zone site={site} zoneId={zoneId} setZoneId={setZoneId}
                      setDNSServers={setDNSServers}/></td>
            <td>
                <DNS Server={Server} site={site} zoneId={zoneId}/>
            </td>
            <td>{renderDNSServers()}</td>
            <td>
                <SSL zoneId={zoneId}/>
            </td>
        </tr>)
}

export default Tr
