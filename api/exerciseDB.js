import axios from 'axios';
import { equipment, muscles, rapidApiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const getExercises = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data.slice(0, 12);
    } catch(e) {
        console.log('error: ', e.message)
    }
}

export const getExerciseByBodyPart = async (bodyPart) => {
    let exerciseData = await getExercises(baseUrl+`/exercises/bodyPart/${bodyPart}`);
    return exerciseData;
}
