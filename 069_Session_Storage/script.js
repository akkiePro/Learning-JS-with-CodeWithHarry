/**
 * same as Local Storage.
 * same methods as Local Storage.
 * will work for only currently open pages(if you refresh it'll work),
 * but, if you copy url and open it in another TAB it won't work.
 */

// 1.
/* 
sessionStorage.setItem("user", "Akash");
sessionStorage.setItem("id", 1);
// try above mentioned thing on console
// copy URL and open in another tab these sessionItems won't be available.
 */

// 2.
/* console.log(sessionStorage.getItem("user"));
console.log(sessionStorage.getItem("id"));
sessionStorage.key(0);
sessionStorage.removeItem("user");
sessionStorage.clear();
console.log(sessionStorage); */