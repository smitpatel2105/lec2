function add(a,b,callback)
{
   console.log("A is ");
   disp(a);
   console.log("B is ");
   disp(b);
   
}

function disp(no)
{
	if(no%2==0)
	{	
		console.log("even");
	}
	else
	{
		console.log("odd");
	}
}

add(2,3);

