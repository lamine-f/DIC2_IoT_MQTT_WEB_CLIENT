const token = 'user-data';
class LocalPersistence {
    static saveUser = (user) => {
        window.localStorage.setItem(token, JSON.stringify(user));
    }
    static findUser = () => {
        const user = JSON.parse(window.localStorage.getItem(token));
        return user ? {value:user, defined: true}:{defined: false};
    }
}