import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import Tr from './Tr'
import Dropdown from 'react-bootstrap/Dropdown';
// import {AccountID, email, GlobalAPIKey} from '../config'

const servers = {
    adminVPS: '91.200.84.27',
    adminVPS2: '195.93.252.178',
    appletec2: '193.164.17.173',
}

function MainComponent() {
    const [siteList, setSiteList] = useState([])
    const [bigInput, setBigInput] = useState('')
    const [Server, setServer] = useState('')

    const [AccountID, setAccountID] = useState('')
    const [email, setEmail] = useState('')
    const [GlobalAPIKey, setGlobalAPIKey] = useState('')

    useEffect(() => {
        const newArr = bigInput.split(' ').filter(el => el)
        setSiteList(newArr)
    }, [bigInput])

    const renderTr = () => {
        return siteList.map((site, index) => (
            <Tr
                key={site}
                site={site}
                email={email}
                GlobalAPIKey={GlobalAPIKey}
                AccountID={AccountID}
                Server={Server}
                index={index + 1}
            />
        ))
    }


    return (
        <div>
            <div>Список сайтов</div>
            <input
                placeholder={'Sites'}
                style={styles.bigInput}
                type={'text'}
                value={bigInput}
                onInput={(e) => setBigInput(e.target.value)}/>
            <input
                style={styles.input}
                type={'text'}
                value={email}
                placeholder={'Email'}
                onInput={(e) => setEmail(e.target.value)}
            />
            <input
                style={styles.input}
                type={'text'}
                value={GlobalAPIKey}
                placeholder={'GlobalAPIKey'}
                onInput={(e) => setGlobalAPIKey(e.target.value)}
            />
            <input
                style={styles.input}
                type={'text'}
                value={AccountID}
                placeholder={'AccountID'}
                onInput={(e) => setAccountID(e.target.value)}
            />
            <div style={{marginBottom: 10, marginLeft: 10}}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {Server || 'Server'}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => setServer(servers.adminVPS)}>AdminVPS webarchive - {servers.adminVPS}</Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setServer(servers.adminVPS2)}>AdminVPS wordpress - {servers.adminVPS2}</Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setServer(servers.appletec2)}>Appletec webarchive - {servers.appletec2}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Site</th>
                    <th>Add Zone</th>
                    <th>Add DNS</th>
                    <th>DNS Servers</th>
                    <th>SSL</th>
                </tr>
                </thead>
                <tbody>
                {renderTr()}
                </tbody>
            </Table>
        </div>
    );
}

const styles = {
    input: {
        width: 500,
        display: 'block',
        border: '1px solid grey',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    bigInput: {
        width: '98%',
        display: 'block',
        border: '1px solid grey',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

export default MainComponent;
