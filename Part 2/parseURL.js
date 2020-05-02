function parseUrl(str) {
    return str.split('&').reduce((obj, pair) => {
        const [key, value] = pair.split('=');
        if (!value) {
            return obj;
        }
        // obj[key] = value   commetn nó lại
        

        deepObj(obj, key.split(/[\[\]]/g).filter(v => v), value);
        return obj;
    }, {});
}


function deepObj(obj, keys, value) {

    let i = 0;
    for (; i < keys.length - 1; i++) {
        let key = keys[i];

        if (!obj[key]) {  
            //obj[key] = {}; comment chỗ này
            if (keys[i + 1].match(/^\d+$/)) {
                obj[key] = [];
            } else {
                obj[key] = {};
            }
        }
 
        obj = obj[key];
    }

    obj[keys[i]] = value;
}

console.log(parseUrl('key=yyyy&uid=xxxx&token[pro]=pro&token[basic]=basic'));
