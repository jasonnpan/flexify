import axios from 'axios';
import { equipment, rapidApiKey } from '../constants';

const baseUrl = 'https://exercise-db-fitness-workout-gym.p.rapidapi.com';

const getExercises = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'exercise-db-fitness-workout-gym.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data.slice(0, 12);
    } catch(e) {
        console.log('error: ', e.message)
    }
}

export const getExerciseByEquipment = async (equipment) => {
    let exerciseData = await getExercises(baseUrl+`/exercises/equipment/${equipment}`);
    return exerciseData;
}