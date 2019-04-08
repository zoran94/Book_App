

const fetchUser = () => {
    return fetch("https://book-api.hypetech.xyz/v1", {
        headers: {
            " Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => {
            return response.json()
        })
}


export {
    fetchUser
}