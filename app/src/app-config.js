import cookie from 'react-cookies'

export default {
    getRate: () => Number(cookie.load('rate')) || 1.1, 
    setRate: (_value) => cookie.save('pitch', _value, { path: '/' }),

    getPitch: () => Number(cookie.load('pitch')) || 1,
    setPith: (_value) => cookie.save('rate', _value, { path: '/' }),
};