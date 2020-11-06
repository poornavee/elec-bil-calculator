function mathOperation()
{
	var unit=document.getElementById("myInput").value;
	var a1=7.85;
	var a2=7.85;
	var a3=10;
	var a4=27.75;
	var a5=32;
	
	var amount=0;
	if(unit<=30)
	{
		amount=a1*unit;
	}
	else if(unit>30 && unit<=60)
	{
		amount=(30*a1)+(a2*(unit-30));
	}
	else if(unit>60 && unit<=90)
	{
		amount=(30*a1)+(30*a2)+(a3*(unit-60));
	}
	else if(unit>90 && unit<=120)
	{
		amount=(30*a1)+(30*a2)+(30*a3)+(a4*(unit-90));
	}
	else if(unit>120)
	{
		amount=(30*a1)+(30*a2)+(30*a3)+(30*a4)+(a5*(unit-120));
	
	}
	var txtResult = document.getElementById("calculate");
	txtResult.innerHTML =" <h3>Your bill amount is = " +amount +"</h3>";
}