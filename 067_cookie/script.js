console.log(document.cookie);

document.cookie = "name=akkiPro";
document.cookie = "name1=akkad-bakkad";
document.cookie = "name=akash"; // replace akash with akkiPro(updates the cookie)

// problem with special characters
document.cookie = "*ds:;h=DFG6^";   // problem with semicolon

// solution
const key = "*ds:;h";
const value = "DFG%6^";
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

console.log(document.cookie);
console.log(decodeURIComponent(document.cookie));

document.cookie = "user=akash; path=/067_cookie/anotherPageCookie.html";

/**
 * cookie has limit of storage up to 4KB.
 * also limit of 20 cookies(varies from browser to browser)
 * usage: we can set unique identifiaction data in cookie to identify client/customer
 */