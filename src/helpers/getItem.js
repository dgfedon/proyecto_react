import data from '../dataList/data.json'


export const getItem = new Promise((resolve) => {
    setTimeout(() => {
        resolve(data[0])
    }, 2000)

    // console.log('getItem data', data[0]);
})