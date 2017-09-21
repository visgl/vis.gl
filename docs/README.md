## Why an Open Source Visualization Suite?

We rely heavily on open source in our day to day work and this visualization suite is our way to give back to a community that has given us so much. Open sourcing our frameworks lets us share our passion for visualization and graphics with others, and opens the door for future collaborations and engagements.

Finally, and perhaps most importantly, from a pragmatic we believe that making the extra effort required to improve our code and documentation quality to the level where it can support external use and scrutiny really benefits our internal development and tooling.

## Design Principles

* **WebGL** - From the outset we decided that one of our principles would be to use WebGL as the basis for big data visualization, and several of our frameworks has emerged from this. And now that WebGL 2 has finally arrived, we are determined to be early adopters of all the wonderful new computation and rendering techniques that this standard enables.
* **React** - The larger front-end organization that we serve at Uber is using React which means that we design our frameworks integrate perfectly with React.

## Is this Suite only for React?

Our ambition is that the frameworks and components in this suite should be "React-first", but not "React-only":
* It is true that some frameworks (namely react-map-gl and react-vis) are obviously completely designed for and dependent on React.
* Mst of the remaining frameworks (e.g. luma.gl and all the utility modules) are completely UI framework agnostic.
* In the specific case of deck.gl, the framework itself, while designed on "reactive programming principles" is completely generic. It comes with a strong React integration, but the integration is very thin and can easily be replicated in other UI frameworks.

## History

As we considered what foundation to build on, we were inspired by the fresh take on WebGL programming offered by the (now sunsetted) stack.gl "ecosystem" and we decided to name some of our frameworks with a `.gl` suffix in recognition of that fact. For what it's worth, we don't pronounce the dots, we just say "deck g l" and "luma g l" (or sometimes just "deck" and "luma") when referring to these frameworks.
