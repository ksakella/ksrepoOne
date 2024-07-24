let p=new Promise((resolve,reject)=>{
let a=2
if(a==4)
{
    resolve('SUCCESS')
}
else{
    reject('FAILED')
}
})

p.then((k)=>
{
console.log('This is in then '+k)
}).catch((k)=>
{
    console.log('This is in catch '+k)
})