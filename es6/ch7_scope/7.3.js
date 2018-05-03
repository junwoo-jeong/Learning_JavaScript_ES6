//block scope
//실재로 사용하는 경우는 드뭄
console.log('before block');
{
    console.log('inside block');
    const x = 3;
    console.log(x);
}
console.log(`outside block; x=${x}`);
