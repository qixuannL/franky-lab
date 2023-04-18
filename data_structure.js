// Under each array, there need to be .choice1 .choice2 element
// set "ifend" = true if you want to end the game on a specfic point
// "title" will be printed as the logging aswell as the button choice text 
// "spc" is an optional element, if spc exist, it will display spc text on top instead of displaying "title" text, "spc" does not affact button text
// "slide" is an optional element, if true, it will display an adtional image/text in the middle
// "slide_img" = "path to image" 
// "slide_txt" = "slide txt content"

// it is verryyyyyy painful to write out story lines in this json array structure, but its the only way i can think of without hard code this entire thing
// soooo... good luck have fun :D
// discord: aii#3184, feel free to dm if you have any questions


let currentData = {
    "data": {


        "ifend": false,
        "slide": false,
        "title": "Victor is considering what experiments to do with an organism:",
        "image": "images/victor_think.webp",


        "choice1": {
            "slide": true,
            "ifend": false,
            "slide_img": "images/two_potion.webp",
            "slide_txt": "Victor walked to the table, grabing two potions",
            "title": "feeding the organism with chemical",
            "spc": "What potion are you going to use on the organism?",
            "image": "images/pot-red-green.webp",

            
            "choice1": {
              "slide": true,
              "ifend": false,
              "slide_img": "images/vic_potion.webp",
              "slide_txt": "Victor grabbed the potion",
              "spc": "The organism is now sparkling.... what do you do? ",
              "title": "pour sparkling red potion onto the organism",
              "image": "images/red_shiny.webp",




                  "choice1": {
                    
                  "slide": false,
                  "ifend": true,
                  "title": "Put the monster on the street to dry it off",
                  "image": "images/monster_street.webp",
                  "endpic": "images/monster_street.webp",
                  "endtxt": "The organism is now completely dead after burning under the sun"

             
  

                  },
                  "choice2": {
                  "slide": false,
                  "ifend": false,
                  "spc": "The game ends here unforunately, more content needed :(",
                  "title": "Electric shock the organism",
                  "image": "images/victor_wire.webp",
                  "choice1": {
                    "slide": false,
                    "ifend": true,
                    "title": "NEED_MORE_CONTENT_1",
                    "image": "images/no_pic.webp",
                    "endpic": "images/no_pic.webp",
                    "endtxt": "More content need to be added to this game :("
                  },
                    "choice2": {
                    "slide": false,
                    "ifend": false,
                    "title": "NEED_MORE_CONTENT_2",
                    "image": "images/no_pic.webp",
                    "endpic": "images/no_pic.webp",
                    "endtxt": "More content need to be added to this game :("
                    }
                  
                  }



            },
            "choice2": {
              "slide": false,
              "ifend": true,
              "title": "pour color-switching green-blue ish potion onto the organism",
              "image": "images/mon_dead.webp",
              "endpic": "images/mon_dead.webp",
              "endtxt": "The organism is now completely dead, it was a poison perhaps"
            }
        },











        "choice2": {
            "slide": true,
            "ifend": false,
            "slide_img": "images/victor_elec.webp",
            "slide_txt": "Victor is grabbing electric shock device",
            "title": "Electric shock the organism",
            "spc": "The organism's finger is moving.. what do you do?...",
            "image": "images/monster_shake.webp",


            "choice1": {
              "slide": false,
              "ifend": false,
              "title": "Apply a high voltage electric shock",
              "spc": "The monster wakes up... looking confused..",
              "image": "images/monster_wakeup.webp",

              
              "choice1": {
              "slide": false,
              "ifend": false,
              "slide_img": "images/two_potion.webp",
              "slide_txt": "",
              "title": "Stay",
              "spc": "The game ends here unforunately, more content needed :(",
              "image": "images/no_pic.webp",
              "choice1": {
                "slide": false,
                "ifend": true,
                "title": "NEED_MORE_CONTENT_1",
                "image": "images/no_pic.webp",
                "endpic": "images/no_pic.webp",
                "endtxt": "More content need to be added to this game :("
              },
                "choice2": {
                "slide": false,
                "ifend": false,
                "title": "NEED_MORE_CONTENT_2",
                "image": "images/no_pic.webp",
                "endpic": "images/no_pic.webp",
                "endtxt": "More content need to be added to this game :("
                }
              },


              "choice2": {
              "slide": false,
              "ifend": false,
              "slide_img": "images/two_potion.webp",
              "slide_txt": "The monster wakes up... looking confused..",
              "title": "Run away",
              "spc": "The game ends here unforunately, more content needed :(",
              "image": "images/no_pic.webp",
              "choice1": {
                "slide": false,
                "ifend": true,
                "title": "NEED_MORE_CONTENT_1",
                "image": "images/no_pic.webp",
                "endpic": "images/no_pic.webp",
                "endtxt": "More content need to be added to this game :("
              },
                "choice2": {
                "slide": false,
                "ifend": false,
                "title": "NEED_MORE_CONTENT_2",
                "image": "images/no_pic.webp",
                "endpic": "images/no_pic.webp",
                "endtxt": "More content need to be added to this game :("
                }
              }


            },


            "choice2": {
              "slide": false,
              "ifend": false,
              "title": "Turn it off bc dis is scary..",
              "spc": "The device is now turnned off",
              "image": "images/victor_scared.webp",

              "choice1": {
                "slide": false,
                "ifend": true,
                "title": "NEED_MORE_CONTENT_1",
                "image": "images/no_pic.webp",
                "endpic": "images/no_pic.webp",
                "endtxt": "More content need to be added to this game :("
              },
                "choice2": {
                "slide": false,
                "ifend": false,
                "title": "NEED_MORE_CONTENT_2",
                "image": "images/no_pic.webp",
                "endpic": "images/no_pic.webp",
                "endtxt": "More content need to be added to this game :("
                }
        }
      }
    }
}.data