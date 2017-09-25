var clickCount=0;
var yourItem 
var yourItemPic
var yourItemHP

var oppItem
var oppItemPic
var oppItemHP

var lockGame = false


var attackCounter = 0
var roundCount = 0

var yourHP
var yourAP
var yourCAP
var yourName

var oppHP
var oppAP
var oppCAP
var oppName









$(document).ready(function() {

	function chooseChar() {
		$(".unused-char").on("click", function(div) {
			if(clickCount===0 && lockGame === false){
				yourItem = $("#"+ $(this).attr('id'))
				yourItemPic = $("#"+ $(this).attr('id') +"-pic")
				yourItemHP= $("#"+ $(this).attr('id') +"-hitpoints")
				$("#your-char").append(yourItem)
				$("#instructions").html("Now Choose Your Opponent:")
				$("#your-char-heading").html("Your Fighter")
				$("#vers-area-heading").html("Versus")
				$(yourItemPic).removeClass("inactive-char").addClass("active-char");
				clickCount++;
				$(yourItem).removeClass("unused-char col-md-2")
				yourHP=parseInt($(this).attr('hp'))
				yourAP=parseInt($(this).attr('ap'))
				yourCAP=parseInt($(this).attr('cap'))
				yourName=$(this).attr('dinoname')

			}
			else if(clickCount!=0 && lockGame === false){
				roundCount++
				oppItem = $("#"+ $(this).attr('id'))
				oppItemPic = $("#"+ $(this).attr('id') +"-pic")
				oppItemHP = $("#"+ $(this).attr('id') +"-hitpoints")
				$("#your-opp").append($(oppItem))
				$("#instructions").html("Attack your Opponent!")
				$("#your-opp-heading").html("Your Opponent")
				$(oppItemPic).removeClass("inactive-char").addClass("active-char")
				clickCount++
				$(oppItem).removeClass("unused-char col-md-2")
				lockGame=true
				oppHP=parseInt($(this).attr('hp'))
				oppAP=parseInt($(this).attr('ap'))
				oppCAP=parseInt($(this).attr('cap'))
				oppName=$(this).attr('dinoname')
				$("#attack-btn").show()
			};

		});

	}

	function attackEach() {
		$("#attack-btn").on("click", function() {
			if(yourHP>0 && oppHP>0){
				yourHP = yourHP-oppAP
				oppHP = oppHP-yourAP
				yourAP= yourAP+yourCAP
				yourItemHP.text(yourHP)
				oppItemHP.text(oppHP)
				checkRoundStatus()
			}

	})
}

function checkRoundStatus() {
	if(yourHP > 0 && oppHP <= 0 && roundCount < 3){
		$("#instructions").html("You defeated " + oppName + "!  Choose your next Opponent")
		lockGame=false
		$(oppItem).hide()
		chooseChar()

	}
	else if(yourHP>0 && oppHP <= 0 && roundCount === 3){
		$("#instructions").html("You are a victorius " + yourName +"!")
		$("#attack-btn").hide()
		$('#play-again-btn').show();
		
		
	
	}
	else if(yourHP<=0){
		$("#instructions").html(oppName + " killed you! Try again.")
		$("#attack-btn").hide()
		$('#play-again-btn').show();
		restartGame()
		


	}

}

function restartGame(){
	$("#play-again-btn").on("click", function() {
		location.reload()
	})
}




	$('#attack-btn').hide();
	$('#play-again-btn').hide();
	chooseChar()
	attackEach()
	restartGame()









});






// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }