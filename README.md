# franky-lab
A simple static website game that will give user choices to pick from, and expend story line base on selections.

Example site: http://frankenstein.lol/

# custom content and images:

To change content, you have to go to script.js, Replace `currentData` Data with your own Data

# How to create your own Data?
```js
data: {
  "title": "Victor is considering what experiments to do with an organism:",
  "image": "images/victor_think.webp",
  choice1: {
    // nest the array over again
  },
  choice2: {
    // nest the array over again
  }
}
```
Here is an simple example data structure needed for it to work.

There are also optional elements you may use to build your story line:

```js
// "ifend" = true if you want to end the game on a specfic point
// "title" will be printed as the logging aswell as the button choice text 
// "spc" is an optional element, if spc exist, it will display spc text on top instead of displaying "title" text, "spc" does not affact button text
// "slide" is an optional element, if true, it will display an adtional image/text in the middle
// "slide_img" = "path to image" 
// "slide_txt" = "slide txt content"
```
The word `Victor` will be automaticly converted to the name player entered at begining

The outer shadow of the box will turn red if ifend is set to true.

Note: If you are using images that you downloaded, i would recommand you to covert to .webp for faster load time

# End

finally, after you have tweaked around the stuff, you can simply double-click the home.html to see your work :D


Discord: `aii#3188` if you need any help
- `this project is created for the purpose of a school project`
