/*
function  one()
{
    console.log('Function 1')
}
function  two()
{
    console.log('Function 2')
}

function  three()
{
    console.log('Function 3')
}
setTimeout(one,2000)

two()
three()

*/
/*
function  one()
{
    setTimeout(function (){console.log('Function 1')
        two()
    },3000)
    
}
function  two()
{
    console.log('Function 2')
}
one()

*/

//call back:

function  one(a,val)
{
  console.log(a)
  val()
    
}
function  two()
{
    console.log('Function 2')
}
one('Hello',two)

