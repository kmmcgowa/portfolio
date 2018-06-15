{
	"title": "Tangible HTML",
	"date": "2018-05-28T20:21:15-07:00",
	"draft": false,
	"author": "Kevin McGowan",
	"resources": [
		{
			"name": "primary_image",
			"src": "thesis.jpg",
			"title": "Final presentation of Tangible HTML"
		}
	]
}

The thesis project is the culmination of the Media Arts and Practice program. My project, entitled *Tangible HTML* explores new methods of teaching coding for the web. For a quick description, read the Abstract below; keep reading for a thorough write up. Or just skip ahead to the [documentation video](#video) if you’re a visual learner…

{{% serif %}}
### Abstract
{{% /serif %}}

In this increasingly complex technical age, the ability to write code is becoming evermore significant. Traditional methods of programming involve sitting at a computer learning the individual functions of HTML, CSS, Javascript, etc., and piecing them together to generate a coherent web page. *Tangible HTML* is a new approach to web development education for beginners. Centered around form and content, the project proposes an educational methodology that looks beyond the computer to focus on programmatic basics in a real space.

*Tangible HTML*, likening itself with toy building blocks, is built in a tangible space. To encourage an imaginative approach, users are presented with content parsed from familiar childhood storybooks. By limiting the creative scope available to users, *Tangible HTML* asks users to focus both on the HTML and narrative they are constructing. As users assemble their webpage, they learn the basics of language and the structure that composes all HTML documents. By abstracting the educational experience, *Tangible HTML* hopes to inspire future generations to further explore the web development process.

{{% serif %}}
### Process
{{% /serif %}}

The project went through a semester of ideation and prototyping. Upon testing of a concept and general methodology, the project moved into creating an advanced paper prototype for the winter thesis showcase, *Ma+p Quest*.

{{< standard-image src="paper1.jpg" caption="Paper Prototype of Tangible HTML at the mid-year showcase" >}}

At this point in time, technology wasn’t a concern for the project, instead I was interested in how users would interact with various pieces, and how they would approach the playful process. To achieve this. I printed my playground and taped it to the table. The playground featured a slimmed down version of what would become the final board. From there, users would place paper cutouts of the code blocks onto the squares. Above, a webcam would be capturing which blocks were located in each position by reading the color printed on each piece of paper. This turned out to be a challenge because of the constantly changing lighting on the soundstage hosting the event. Regardless, this data was read by the website and displayed on screen.


{{< standard-image src="screen1.jpg" caption="Computer used for the mid year showcase" >}}

Upon the completion of the prototype showcase, it was time to bring the tech into the fold. The paper prototype mainly taught me to treat color very carefully. People were first drawn to matching colors, rather than focusing on content. Otherwise, the project moved on, expanding to full size. Step 1 was to figure out the tech stack I would be using. Professors in MA+P recommended RFID and that was good enough for me. Familiar with Arduino, I researched RFID and Arduino projects and how I could piggyback this off them. From there it was fairly simple, send the data to a node.js server, and have that send out a live rendered html document to display on screen.

Step 2 was making it work. I spent a majority of the semester trying to get my arduino to read more than 1 rfid sensor, something that had not been done before, at least not that I could find. Upon successful completion of that task, I modularly built out each other aspect until it was time to pair them up into a working product.

In total: 10 RFID readers were used, all routing into a single arduino, 3 dedicated power supplies, 50 RFID chips to place on the blocks and 2 laptops to run the servers.

{{% serif %}}
### Showcase
{{% /serif %}}

Come the showcase, the project wasn’t entirely working… Each time I added a module to the set, something broke, and when I fixed that bug, 10 more wold pop up in places that had nothing to do with what i just changed. In the end I compromised - 7 of the 10 RFID sensors would be on, leaving 3 not functional. Luckily I was able to choose which 3 were off and they didn’t have a major impact. The major problem occurred in linting, or ‘proofreading’ the code. Again, I was able to bypass this and fake an experience for the user.


In the end, the project was given high appraise from professor, student, and parents alike. The few kids who came to the showcase were playing with glee, trying block combinations parents weren't even looking at. I would describe the experience, as amazing and 10/10 would do again.

{{% serif %}}
## Result
{{% /serif %}}

{{% custom-id-section video %}}
{{< vimeo 216929607 >}}
{{% /custom-id-section %}}