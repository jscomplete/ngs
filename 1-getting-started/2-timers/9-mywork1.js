const hi = interval =>
    setTimeout(() => {
    console.log(`Hello World. ${interval}`);
    hi(interval + 1);
}, interval * 1000);

hi(1);