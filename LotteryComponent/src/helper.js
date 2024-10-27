function genArray(n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*6);
    }
    return arr;
}

function Sum(arr){
    return arr.reduce((sum, curr)=>(sum+curr),0)
}

export {genArray, Sum};