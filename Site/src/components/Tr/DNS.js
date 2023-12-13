import React, {useState} from "react";
import Spinner from 'react-bootstrap/Spinner';
import setCreateDNSRequest from "../../functions/setCreateDNSRequest";
import config from "../../mobx/config";

const DNS = ({Server, site, zoneId}) => {
    const [main, setMain] = useState(false)
    const [www, setWww] = useState(false)
    const [mainLoad, setMainLoad] = useState(false)
    const [wwwLoad, setWwwLoad] = useState(false)


    const clickButton = (name) => {
        if (name === '@') setMainLoad(true)
        if (name === 'www') setWwwLoad(true)
        setCreateDNSRequest(config, Server, site, zoneId, name)
            .then(data => {
                if (name === '@') setMain('@')
                if (name === 'www') setWww('www')
            })
            .catch(e => console.log(e))
            .finally(z => {
                setMainLoad(false);
                setWwwLoad(false)
            })
    }

    const renderFunc = (state, type) => {
        if (state) return <Spinner animation="border" role="status" size={'sm'}/>
        return <button onClick={() => clickButton(type)}>{type}</button>
    }

    const renderMain = () => {
        if (main === false) return renderFunc(mainLoad, '@')
        return main
    }

    const renderWww = () => {
        if (www === false) return renderFunc(wwwLoad, 'www')
        return www
    }


    return <>{renderMain()} {renderWww()}</>

}

export default DNS
