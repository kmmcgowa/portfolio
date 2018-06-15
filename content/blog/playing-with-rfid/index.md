{
	"title": "Playing with RFID",
	"date": "2017-02-01T18:27:14-07:00",
	"draft": false,
	"author": "Kevin McGowan",
	"type": "blog",
	"resources": [
		{
			"name": "primary_image",
			"src": "rfid.jpg",
			"title": "RFID Sensors"
		}
	]
}

The thesis project is in full swing now as the various tech starts to arrive for production. The groundwork has been set and its soldering time. In total some 10 RFID sensor chips will be set up in an array to read all of the blocks played in the playground. I have luckily found a library that will make interfacing with the chip extremely easy, and interfacing with all at once should be no more difficult than 2 in sync. The biggest worry here is not actually the code but physical hardware. Im worried I will not have enough power to go around and amply supply each chip. I have ordered 3 power supplies and plan on using each to power 3 chips, while the arduino board powers the 10th. I believe me math is correct, having to look back at high school physics circuits lecture for the handy V=OA formula. A unique power supply for each will easily achieve the needed 3.3V and enough amps to power each without significant drop-off. Following the construction of the playground space for the second round of prototyping, my attention will turn to making the API and initial process of coding the backend.

For that process I imagine it to be fairly simple, of course it will not be, but I'll explain the idea. The arduino API will spit out a JSON string containing all of the information of blocks and their arraignment. The backend, built with Node.js will pick up the string and translate it to data the computer will read on the front end.

My biggest worry is with a major feature, linting. Linting is essentially code copy-editing. It checks for errors and points out to the coder where the problem is. That process is hard enough on its own, but I'm not sure how to connect it with the arduino to light up error lights on the playground as I've intended. In practice it would be a post request from the back-end to the arduino containing another json string, but then the arduino will essentially become a full fledge web server on its own - something Im sure is possible but well out of my area of knowledge.