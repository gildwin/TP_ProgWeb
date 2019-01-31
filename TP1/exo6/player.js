var Player = function(url)
{
	this.url = url

	this.play = function()
	{
		<audio id="player" controls preload tabindex="0" ontimeupdate="updateCanvas()">
		<source type="audio/mp3" src="url"/>
		Your  browser does not support HTML5 audio.
		</audio>
	}
}
