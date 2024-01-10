const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    console.log("youtube script loading...")
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve("youtube script loaded");
    };
    script.onerror = () => {
      reject("youtube script rejected", src);
    };
    document.head.appendChild(script);
  });
};
let p1 = loadScript("https://www.youtube.com/iframe_api");

p1.then((youtubeVal) => {

  console.log(youtubeVal);

  return new Promise((resolve, reject) => {
    console.log("bootstrap script loading...")
    let script2 = document.createElement("script");
    script2.src = "https://cdn.XXjsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    script2.onload = () => {
      resolve("bootstrap script loaded");
    };
    script2.onerror = () => {
      reject("error while bootstrap script loading");
    };
    document.head.appendChild(script2);
  });

}, (youtubeError) => {
  console.log(youtubeError);
}).then((bootStrapVal) => {
  console.log(bootStrapVal);
}, (bootstrapError)=> {
  console.log(bootstrapError);
});