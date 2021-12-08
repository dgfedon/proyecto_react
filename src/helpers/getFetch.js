import data from '../database/data.json'


export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(data)
    }, 2000);

    // console.log(data);
})

