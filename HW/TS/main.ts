type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
async function request<SomeType>(url: string):Promise<SomeType> {
    const response = await fetch(url)
    const json = await response.json();
    return json;
}

request<User[]>('https://jsonplaceholder.typicode.com/users');