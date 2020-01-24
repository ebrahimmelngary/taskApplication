const base_url = "https://my-json-server.typicode.com/ebrahimmelngary/api/";


// get request
export const get_request = async ({ target }) => {
    const url = `${base_url}${target}`

    try {
        const result = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
        return await result.json()
    } catch (err) {
        alert('error in connection')

    }
}

// post request
export const post_request = async ({ target, body = {} }) => {
    const url = `${base_url}${target}`;

    try {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return await result.json()
    } catch (err) {
        alert('error in connection')
    }
}
