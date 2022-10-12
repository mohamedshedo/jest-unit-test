class calculator {
    constructor (){}
 sum = (x,y) => Number(x)+Number(y);

 sub = (x,y) => Number(x)-Number(y);

 mul = (x,y) => Number(x)*Number(y);

 divide = (x,y) => Number(x)/Number(y);

 sumAfterThreeSecsWithPromise = (x,y)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve(this.sum(x,y));
        }, 3000);
    })
}

 dumbAsyncIncrementalFunc = (item)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            item.counter++;
            resolve(item);
        }, 3000);
    })}

 processItem = async (item)=>{
    const updatedItem = await this.dumbAsyncIncrementalFunc(item);
    return updatedItem;
}}


module.exports = new calculator()
