import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        console.log('Data saved successfully!');
    } catch (error) {
        console.error('Error saving data: ', error);
    }
};

export const loadData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading data: ', error);
    }
};
