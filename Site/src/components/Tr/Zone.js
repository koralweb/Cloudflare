import React, {useState} from "react";
import Spinner from 'react-bootstrap/Spinner';
import sendCreateZoneRequest from "../../functions/sendCreateZoneRequest";
import config from "../../mobx/config";
import {observer} from "mobx-react-lite";


const Zone = ({site, zoneId, setZoneId, setDNSServers}) => {
    const [addZoneLoad, setAddZoneLoad] = useState(false)

    const clickButton = () => {
        setAddZoneLoad(true)
        sendCreateZoneRequest(config, site, setZoneId, setAddZoneLoad, setDNSServers)
    }

    const render = () => {
        if (zoneId) return zoneId
        if (addZoneLoad) return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)
        return <button onClick={clickButton}>Создать</button>
    }


    return render()

}

export default observer(Zone)
