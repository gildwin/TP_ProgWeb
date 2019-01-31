var Point = function(x,y,canvas)
{
	this.canvas=canvas;
	this.canvas2dContext=this.canvas.getContext("2d");
	this.x=x;
	this.y=y;

	this.ache = function(finArc)
	{

		this.canvas2dContext.beginPath();
		this.canvas2dContext.arc(this.x,this.y,50,0,(finArc/256)*Math.PI,false);
		this.canvas2dContext.fillStyle = "black";
		this.canvas2dContext.stroke();
	}
}
