let foobar = (text) =>{
    let list = `<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`;
    document.write(list);
}
foobar('Hello');