export default function setCookie(name, data, expired) {

    const domain = window.location.hostname
    const maxAge = expired ?? 99999999

    document.cookie = `${name}=${data}; domain=${domain}; max-age=${maxAge}; secure;`
}