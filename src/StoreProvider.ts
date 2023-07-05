let store = undefined;
// Jest/Emzymeのテストに支障をきたさないようにreduxStoreをグローバル化しています。
const storeProvider = {
    init(configureStore) {
        store = configureStore();
    },
    getStore() {
        return store;
    }
};
export default storeProvider;
