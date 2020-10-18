// actions
export const ADD_DEVELOPER = "ADD_DEVELOPER";
export const GET_DEVELOPER = "GET_DEVELOPER";
export const DELETE_DEVELOPER = "DELETE_DEVELOPER";

export const FETCH_DEVELOPER = "FETCH_DEVELOPER";
export const RECEIVE_DEVELOPER = "RECEIVE_DEVELOPER";

export const FETCH_ALL_DEVELOPERS = "FETCH_ALL_DEVELOPERS";
export const RECEIVE_ALL_DEVELOPERS = "RECEIVE_ALL_DEVELOPERS";

// API URL
const BASE_URL = "http://localhost:3000/items";

// action creators
export function addDeveloper(dev) {
  return function (dispatch) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dev),
    })
    .then(resp => {
      if(resp.status === 201 && resp.statusText === "Created")
        console.log("Developer successfully added");
    })
    // .then((response) => response.json())
    // .then((json) => dispatch(receiveAllDevelopers(json)));
  }
}

export function deleteDeveloper(id) {
  // return { type: DELETE_DEVELOPER, id };
  return function (dispatch) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(resp => {debugger;})
  }
}

// Thunk
export function fetchAllDevelopers() {
  return function (dispatch) {
    return fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => dispatch(receiveAllDevelopers(json)));
  };
}

export function receiveAllDevelopers(json) {
  return {
    type: RECEIVE_ALL_DEVELOPERS,
    devs: json, //.data.children.map(child => child.data)
  };
}

// Thunk
export function fetchDeveloper(id) {
  return function (dispatch) {
    return fetch(`${BASE_URL}/${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveDeveloper(json)));
  };
}

export function receiveDeveloper(json) {
  return {
    type: RECEIVE_DEVELOPER,
    devs: json,
  };
}