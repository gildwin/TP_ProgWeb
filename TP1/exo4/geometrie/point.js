var Point = function(x,y,canvas)
{
	this.canvas=canvas;
	this.canvas2dContext=this.canvas.getContext("2d");
	this.x=x;
	this.y=y;

	this.ache = function()
	{

		this.canvas2dContext.beginPath();
		this.canvas2dContext.arc(this.x,this.y,5,1.5*Math.PI,0.5*Math.PI,false);//coordonnées du centre(x,y), rayon du cercle, point de départ, point d'arrivée
		this.canvas2dContext.fillStyle = "black";
		this.canvas2dContext.stroke();
	}
}
