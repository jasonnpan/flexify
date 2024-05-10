import axios from 'axios';
import { rapidApiKey } from '../constants';

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
        return response.data;
    } catch(e) {
        console.log('error: ', e.message)
    }
}

export const getExercisesByBodyPart = async (bodyPart) => {
    let exerciseData = await getExercises(baseUrl+`/exercises/bodyPart/${bodyPart}`);
    return exerciseData;
}