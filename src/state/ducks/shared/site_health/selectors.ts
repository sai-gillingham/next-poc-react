import types from "./types";

/**
 * ////////////////////////////////////////
 * SELECTORS (セレクタ)
 * -----------------
 *
 * リデューサーの生データをフィルタリングして、ビューにきれいな結果を提供するために使用されます。
 * ///////////////////////////////////////
 */

function getLastSimilarEvent(state, event_name: string): string {
    console.log(state);
    console.log(state.siteHealth);
    console.log(state.siteHealth.request_only_event_history);
    return state.siteHealth.request_only_event_history.filter((event) => {
        console.log(event_name)
        console.log(event.type);
        console.log(event_name.includes(event.type));
        return event_name.includes(event.type);
    }).slice(-1)[0];
}

function getFailedEvent(state) {
    console.log("DL: ", state.siteHealth)
    return state.siteHealth.retry_event;
}

const selectors = {
    getLastSimilarEvent,
    getFailedEvent
}

export default selectors;
