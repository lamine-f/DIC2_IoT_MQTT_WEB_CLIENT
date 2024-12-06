class RemotePersistence {
    static saveUser = async (user)=> {
        return await new Promise((resolve, reject) => {
            fetch('/api/users', {method: 'POST', body: JSON.stringify(user), headers: {"Content-type": "application/json; charset=UTF-8"} })
                .then(response => {
                        if (response.status !== 200)
                            response.json().then(data => reject(data))
                        else
                            response.json().then(data => resolve(data))
                    }
                )
        })
    }
}