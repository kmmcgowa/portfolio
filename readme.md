# Kevin McGowan's Portfolio
---

This repo contains the source files for the portfolio site, for the site itself visit [kmmcgowa.github.io](https://kevin-mcgowan.com)

**Built with Hugo**

---

## Deployment

Travis CI handles building and pushing to the production repo - any push to this repo will trigger it.

`./deploy.sh` will handle all deployment with optional commti message.

## Development

Run `hugo server -D` to run localhost:1313. This will build all content, including drafts.

Run `gulp serve` to start gulp and browser sync. This will piggyback port 1313 and now run localhost:3000, will all html and loading from hugo and css/js injected in on updates.

*Note* Adding new images mid-development will require restarting the hugo server so it can properly process them.