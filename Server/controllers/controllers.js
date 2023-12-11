const http = require("https");
const config = require('../config')
const {server, siteNames, idx} = require("../config");

class SiteController {
    createZone(req, res) {
        console.log("Запрос от приложения получен")
        const {email, GlobalAPIKey, AccountID, siteName} = req.body
        console.log(`Пришли данные ${siteName}`)
        const options = {
            ...config(email, GlobalAPIKey).options,
            "path": "/client/v4/zones",
        };
        console.log(`Запрос на сервер Cloudflare, опции - `, options)
        const newReq = http.request(options, function (newRes) {
            const chunks = [];

            newRes.on("data", function (chunk) {
                chunks.push(chunk);
            });

            newRes.on("end", function () {
                const body = Buffer.concat(chunks);
                const result = JSON.parse(body.toString())
                console.log(result)
                res.json(result)
            });
        });

        newReq.write(JSON.stringify({
            account: {id: AccountID},
            name: siteName,
            type: 'full'
        }));
        newReq.end();
    }

    async updateDNS(req, res) {
        console.log("Запрос от приложения получен")
        const {email, GlobalAPIKey, AccountID, siteName, ZoneID, Server, name} = req.body
        console.log(`Пришли данные ${siteName}`)
        const options = {
            ...config(email, GlobalAPIKey).options,
            "path": `/client/v4/zones/${ZoneID}/dns_records`,
        };

        const newReq = http.request(options, function (newRes) {
            const chunks = [];

            newRes.on("data", function (chunk) {
                chunks.push(chunk);
            });

            newRes.on("end", function () {
                const body = Buffer.concat(chunks);
                console.log('DNS запись добалена');
                const result = JSON.parse(body.toString())
                console.log(result)
                res.json(result)
            });
        });

        newReq.write(JSON.stringify({
            content: Server,
            name: name,
            proxied: true,
            type: 'A',
            comment: 'Domain verification record',
            ttl: 3600
        }));
        newReq.end();
    }

    updateSSL(req, res) {
        const {email, GlobalAPIKey, ZoneID, type} = req.body
        const options = {
            "method": "PATCH",
            "hostname": "api.cloudflare.com",
            "port": null,
            "path": `/client/v4/zones/${ZoneID}/settings/ssl`,
            "headers": {
                "Content-Type": "application/json",
                "X-Auth-Email": email,
                "X-Auth-Key": GlobalAPIKey
            }
        };

        const newReq = http.request(options, function (newRes) {
            const chunks = [];

            newRes.on("data", function (chunk) {
                chunks.push(chunk);
            });

            newRes.on("end", function () {
                const body = Buffer.concat(chunks);
                const result = JSON.parse(body.toString())
                res.json(result)
            });
        });

        newReq.write(JSON.stringify({value: type}));
        newReq.end();
    }
}

module.exports = new SiteController()
