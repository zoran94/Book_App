import BASE_URL from "./../shared/baseUrl";
const fetchLogin = (body) => {

    return fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tPr0d",
        },
        body: JSON.stringify(body)
    })
        .then(res => {
            console.log(res);
            return res.json()
        })

}

export default fetchLogin;