const { FETCH_ALL_BOOK } = require("./actionTypes")

const fetchAllBookActionCreator =()=>{
    return{
        type:FETCH_ALL_BOOK,
        payload:[]
    }
}

export default fetchAllBookActionCreator;