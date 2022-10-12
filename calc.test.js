const cal = require('./calculator');

describe('Test Sum',()=>{
    it('1+2=3',()=>{
        const res = cal.sum(1,2);
        expect(res).toEqual(3);
    })

    it('1+"2"=3',()=>{
        const res = cal.sum(1,"2");
        expect(res).toEqual(3);
    })
})

describe('testing multiply',()=>{
    it('2*2=4',()=>{
        const res = cal.mul(2,2);
        expect(res).toBe(4)
    })
})

describe('async implementation',()=>{
    it('handle async with done',(done)=>{
        const resultPromise = cal.sumAfterThreeSecsWithPromise(2,3);
        resultPromise.then((res)=>{
            expect(res).toBe(5);
            done();
        }).catch(e=>{
            done(e);
        })
    })

    it('handle async with async and await',async ()=>{
        const finalRes = await cal.sumAfterThreeSecsWithPromise(2,3);
        expect(finalRes).toBe(5)
    })
})

describe('testing how to mock a function',()=>{
    it('handle without mocking',async ()=> {
        const res = await cal.processItem({counter:1});
        expect(res.counter).toBe(2)
    })

    it('handle with mocking',async ()=> {
        jest.spyOn(cal,'dumbAsyncIncrementalFunc').mockImplementation((item)=>{
            item.counter --;
            return Promise.resolve(item)
        });       
        const res = await cal.processItem({counter:1});
        console.log(res)
        expect(res.counter).toBe(0)
    })
})


