// dataStore.js

var key = 'ttt_data';

function getDataStore() {    
    var item = localStorage.getItem(key);
    if (!item) return null;

    try {
        return JSON.parse(item);
    } catch (e) {
        return item; // fallback if it's not valid JSON
    }
}

function updateDataStore(value) {
    var existingData = getDataStore() || {};

    if(!value)
        return;

    var data = Object.assign({}, existingData, value);

    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        // Fallback: try storing as string
        localStorage.setItem(key, String(value));
    }
}

function deleteDataStore() {
    localStorage.removeItem(key);
}

export { updateDataStore, deleteDataStore, getDataStore };