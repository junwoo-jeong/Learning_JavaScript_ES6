try{
    console.log('this line is executed...');
    throw new Error('whoops');
    console.log('this line is not');
}catch(err){
    console.log('there was an error');
}finally{
    console.log('always excuted');
    console.log('gggg');
}
