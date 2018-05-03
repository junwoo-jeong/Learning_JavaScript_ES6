const words = ['Beachball', 'Rodeo', 'Angel', 'Aardvark',
    'Xylophone', 'Nomember', 'Chocolate', 'Papaya', 'Uniform',
    'Joker', 'Clover', 'Bali'];

//reduce 사용
const longWords = words.reduce((a, w) => w.length>6 ? a+' '+ w : a, '').trim();
console.log(longWords);

//filter 사용
const longWords2 = words.filter(w => w.length>6).toString().replace(/,/g, ' ');
console.log(longWords2);
