var i = 0;
function fun()
{
	i++;
    console.log(i + " : Hello Dash");
	
	if(i>9)
    {
        clearInterval(j)
    }
}
var j = setInterval(fun,2000);


