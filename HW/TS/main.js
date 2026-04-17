"use strict";
async function request(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
request('https://jsonplaceholder.typicode.com/users');
