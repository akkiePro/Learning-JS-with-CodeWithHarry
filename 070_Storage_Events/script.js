// step 1: write following in console
/* 
    localStorage.setItem("local", 1);
 */

// step 2: duplicate tab

window.onstorage = (e) => {
    alert("changed");
    console.log(e);
};

// step 3: In first(origin) tab, try to update value of localStorage in console
/* 
    localStorage.setItem("local", 2);
*/

// you'll find an alert for change in another tab