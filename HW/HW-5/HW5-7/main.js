let foobar = (text, argument) => {
    document.write(`<ul>`);
        for (i=0; i<argument; i++) {
            document.write(`<li>${text}</li>`);
        }
    document.write(`</ul>`);
};

foobar('Hello', 3)