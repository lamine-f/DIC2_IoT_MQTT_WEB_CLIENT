const getLogin = () => {
    let name = undefined;
    do {name = prompt("Nom d'utilisateur: ");} while (!name);
    return name;
}

const user = LocalPersistence.findUser();
if (!user.defined) {
    const createUser = () => {
        RemotePersistence.saveUser({login: getLogin()})
            .then(result => LocalPersistence.saveUser(result.data))
            .catch(() => {
                alert('Déja pris !')
                createUser()
            });
    }
    createUser();
}