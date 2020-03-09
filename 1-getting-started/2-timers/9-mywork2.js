let counter = 0;

const hi = interval =>
    setInterval(() => {
        console.log(`Hello World ${interval *100}`);
        counter += 1;

    if (counter === 5){
        interval += 1;
        counter = 0;
    }
    }, interval * 100);

hi(1);