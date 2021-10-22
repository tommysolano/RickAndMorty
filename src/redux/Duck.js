import axios from "axios";

// const

const dataInicial = {
    array: [],
    page: 1
}


//types
const GET_CHARACTER_SUCCESS = "GET_CHARACTER_SUCCESS";
const NEXT_CHARACTER_SUCCESS = "NEXT_CHARACTER_SUCCESS";
const PREVIOUS_CHARACTER_SUCCESS = "PREVIOUS_CHARACTER_SUCCESS"



//reducer
export default  function RickAndMortyReducer(state = dataInicial, action){
    switch (action.type) {
        case GET_CHARACTER_SUCCESS:
            return {...state, array: action.payload}
        case NEXT_CHARACTER_SUCCESS:
            return {...state, array: action.payload.array, page: action.payload.page}
        case PREVIOUS_CHARACTER_SUCCESS:
            return {...state, array: action.payload.array, page: action.payload.page}
        default:
            return state
    }
}




//accions
export const getCharacterAction = () => async (dispatch, getState) => {

    const page = getState().characters.page

    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        dispatch({
            type: GET_CHARACTER_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}


export const nextCharacterAction = () => async (dispatch, getState) => {

    const page = getState().characters.page
    const next = page + 1 

    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${next}`)
        dispatch({
            type: NEXT_CHARACTER_SUCCESS,
            payload: {
                array: res.data.results,
                page: next
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const previousCharacterAction = () => async (dispatch, getState) => {

    const page = getState().characters.page
    const previous = page - 1 

    try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${previous}`)
        dispatch({
            type: PREVIOUS_CHARACTER_SUCCESS,
            payload: {
                array: res.data.results,
                page: previous
            }
        })
    } catch (error) {
        console.log(error)
    }
}