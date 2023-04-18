document.addEventListener("DOMContentLoaded", function(event) {
	const center = document.getElementById("center");
	const notification = document.getElementById("notification");
	notification.style.display = "flex";
	notification.style.flexDirection = "column-reverse";
  
	center.style.opacity = "1";
	function addTxt(text) {
		const message = document.createElement("span");
		message.innerText = text;
		message.style.fontWeight = "200";
		message.style.opacity = "0.9"; // added opacity
		message.style.fontSize = "16px"; // added font-size
		notification.appendChild(message);
		notification.style.opacity = "1";
	}
	  function addLightertxt(text) {
		const message = document.createElement("span");
		message.innerText = text;
		message.style.fontWeight = "200";
		message.style.opacity = "0.7"; // added opacity
		message.style.fontSize = "14px"; // added font-size
		notification.appendChild(message);
		notification.style.opacity = "1";
	  }
	document.getElementById("enter").addEventListener("click", async function() {
	  const name = document.getElementById("name").value.trim();
	  if (name === "") {
		return;
	  }
  	  const message = document.createElement("span");
	  message.innerText = name + " is playing!👻";
	  message.style.fontWeight = "bold";
	  notification.appendChild(message);
	  notification.style.opacity = "1";


	  // plugin your big chunk of data here :D

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
	  addLightertxt("game starting..")
	  var roundcounter = 0
	  console.log(currentData);
	  function displayData() {
		if(currentData.spc){
			center.innerHTML = `
			<h4>${(currentData.spc).replace("Victor", name)}</h4>
			<img src="${currentData.image}" style="max-width:70%;">
			<p> - </p>
			<div class="buttons">
			  ${currentData.choice1 ? `<button>${currentData.choice1.title}</button>` : ""}
			  ${currentData.choice2 ? `<button>${currentData.choice2.title}</button>` : ""}
			</div>
		  `;
		} else {
			center.innerHTML = `
			<h4>${(currentData.title).replace("Victor", name)}</h4>
			<img src="${currentData.image}" style="max-width:70%;">
			<p> - </p>
			<div class="buttons">
			  ${currentData.choice1 ? `<button>${currentData.choice1.title}</button>` : ""}
			  ${currentData.choice2 ? `<button>${currentData.choice2.title}</button>` : ""}
			</div>
		  `;
		}
	
		addTxt("- " + (currentData.title).replace("Victor", name))
		fadeOut(center).then(() => {
		  fadeIn(center);
		});
	  
		document.querySelectorAll("#center .buttons button").forEach(function(button) {
		  button.addEventListener("click", function() {
			if (currentData.choice1 && this.innerText === currentData.choice1.title) {
			  currentData = currentData.choice1;
			  roundcounter++
			} else if (currentData.choice2 && this.innerText === currentData.choice2.title) {
			  currentData = currentData.choice2;
			  roundcounter++
			}
	  
			if (currentData.ifend) {
				let center = document.querySelector('.center');
				center.style.boxShadow = '0px 0px 20px 5px rgba(255, 0, 0, 0.1)';
			  center.innerHTML = `
				<h4>${(currentData.endtxt).replace("Victor", name)}</h4>
				<img src="${currentData.endpic}" style="max-width:70%;">
				<p>GAME OVER!! <span style="opacity:0.7;font-size:smaller;">(refresh the page to play again 👻)</span></p>
			  `;
			  addLightertxt(`- Statistics: \n| round lasted: ${roundcounter}`)
			  addTxt(`Game over 👻 Thanks for playing`)
			} else if (currentData.slide) {
			  center.innerHTML = `
				<h4></h4>
				<img src="${currentData.slide_img}" style="max-width:70%;">
				<p>${(currentData.slide_txt).replace("Victor", name)}</p>
			  `;
			  addLightertxt("- " + (currentData.slide_txt).replace("Victor", name))
			  fadeIn(center);
			  setTimeout(function() {
				fadeOut(center).then(() => {
				  displayData();
				});
			  }, 3000); // the delay for each action
			} else {
			  fadeOut(center).then(() => {
				displayData();
			  });
			}
		  });
		});
	  }
	  
	  function fadeIn(element) {
		element.style.opacity = 0;
		return new Promise((resolve) => {
		  let tick = () => {
			element.style.opacity = +element.style.opacity + 0.01;
			if (+element.style.opacity < 1) {
			  (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			} else {
			  resolve();
			}
		  };
		  tick();
		});
	  }
	  
	  function fadeOut(element) {
		element.style.opacity = 1;
		return new Promise((resolve) => {
		  let tick = () => {
			element.style.opacity = +element.style.opacity - 0.01;
			if (+element.style.opacity > 0) {
			  (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			} else {
			  resolve();
			}
		  };
		  tick();
		});
	  }
	  
	  displayData();
	
	});
  });