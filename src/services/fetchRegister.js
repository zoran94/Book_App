import BASE_URL from "./../shared/baseUrl";
const fetchRegister = (body) => {


    return fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tPr0d"
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())

}

export default fetchRegister;