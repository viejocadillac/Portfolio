

const daysToMillis = (days) => {
const MILLIS_DAY = 84400000;
return MILLIS_DAY * days;
};

const dateInDays = (days, date=new Date()) => {
date.setTime( date.getTime() + daysToMillis(days))
return date;
}
  
  
const setThemeCookie = (theme) => {
const daysToExpire = 10;

    
const options = {
    expires: dateInDays(daysToExpire),
}
setCookie('modo', theme, options);
}

  
const setCookie = (key, value, options) => {
let optionsString = '';

for (let key in options) {
    optionsString += `; ${key}=${options[key]}`;
}
document.cookie = `${key}=${value} ${optionsString}`
}

const parseCookies = () => {
const parsed = {}
const pares = document.cookie.split(';')

pares.forEach((par) => {
    const arrayPar = par.split('=')
    parsed[arrayPar[0]] = arrayPar[1]
})
return parsed;
}

  
export {
    setThemeCookie,
    parseCookies,
}  