function parseUrl(urlFormatString, urlInstance) {

    if (!urlFormatString || !urlInstance) {
        throw new Error('Invalid input: url format string and url instance are required.');
    }
    if (!urlFormatString.includes( ':')) {
        throw new Error('Invalid input: url format string must contain at least one variable part.');
    }
    console.log(`:: PARAMS :: >> \n ::Format:: ${urlFormatString} \n ::Instance:: ${urlInstance} `);

    let formatArray = urlFormatString.split('/');
    let instanceAux = urlInstance.split('?');
    let instanceArray = instanceAux[0].split('/');

    console.log('::::=========::::');
    console.log(formatArray);
    console.log('::::=========::::');
    console.log(instanceArray);
    console.log('::::=========::::');

    let hashObject = {};

    for (let i = 0; i < formatArray.length; i++) {
        // if the arrays are different each other and different empty
        if (formatArray[i] !== '' && instanceArray[i] !== '' && formatArray[i] !== instanceArray[i]) {
            const key = formatArray[i].substr(1);
            hashObject[key] = instanceArray[i];
        }
    }

    let queryParam = instanceAux[1].split('&');
    queryParam.forEach((query) => {
        const val = query.split('=');
        hashObject[val[0]] = val[1];
    });

    return (hashObject);
}

let format = '/:version/api/:collection/:id';
let url = '/6/api/listings/3?sort=desc&limit=10';


let tmp = parseUrl(format, url);
console.log(tmp);