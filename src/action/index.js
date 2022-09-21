import Axios from 'axios';

export const nameOfImageAction=(dog='', subDog='', num=0)=>{
    return async (dispatch, getState)=>{
        const response = await Axios.get(`https://dog.ceo/api/breed/${dog}/${subDog}/images/random/${num}`);

        dispatch({
            type : 'SAVE',
            payload: response.data.message
        });
    }
}

export const fetchDogData = ()=>{
    return async (dispatch, getState)=>{
        const response = await Axios.get("https://dog.ceo/api/breeds/list/all");

        dispatch({
            type : 'DOG_DATA',
            payload: Object.keys(response.data.message)
        });
    }
}

export const fetchSubDogData = (str='')=>{
    return async (dispatch, getState)=>{
        const response = await Axios.get("https://dog.ceo/api/breed/"+str+"/list");

        dispatch({
            type : 'SUB_DOG_DATA',
            payload:Object.values(response.data.message)
        });
    }
}