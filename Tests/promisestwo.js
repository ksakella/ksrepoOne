const userLeft=false
const userWatchingProgram=true


function watch()
{
return new Promise((resolve,reject)=>
{

if(userLeft)
{
reject({
name:'user Left',
message: ':('
})
}
else if(userWatchingProgram){
reject({
name: 'user watching program',
message:'Cartoon TV'
})

}
else{
resolve({
    name: 'Thanks for watching, please subscribe'
})
}

})
}

watch().then((k)=>
{
console.log(k.name)
}).catch((k)=>{
console.log(k.name+" "+k.message)
})