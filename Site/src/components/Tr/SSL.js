import React, {useState} from "react";
import sendUpdateSSLRequest from "../../functions/sendUpdateSSLRequest";
import config from "../../mobx/config";

const SSL = ({zoneId}) => {
    const [value, setValue] = useState('')
    const renderSSLBtn = (type) => {
        return <button
            onClick={() => sendUpdateSSLRequest(config, zoneId, type, setValue)}>{type}</button>
    }

    return <>{renderSSLBtn('full')} {renderSSLBtn('flexible')} {value}</>
}

export default SSL
