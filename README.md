# franky-lab
A simple static website game that will give user choices to pick from, and expend story line base on selections. 

Example site: https://frankenstein.lol/

# custom content and images:

To change content, you have to go to script.js, Replace `currentData` Data with your own Data

# How to create your own Data?

data: {
  "title": "Victor is considering what experiments to do with an organism:",
	"image": "images/victor_think.webp",
  choice1: {
    // nest the array over again
  }
  choice2: {
    // nest the array over again
  }
}

Here is an simple example data structure needed for it to work.

There are also optional elements you may use to build your story line:

