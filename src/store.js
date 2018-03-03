const STROAGE_KEY = 'todos-vuejs';
export default {
    fetch() {
        return JSON.parse(window.localStorage.getItem(STROAGE_KEY) || '[]')
    },
    save(items) {
        window.localStorage.setItem(STROAGE_KEY, JSON.stringify(items))
    }
}