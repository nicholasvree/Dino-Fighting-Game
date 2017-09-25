	var clickCount=0;
	var attackBtn = $("<button id='attack-btn'>");
	var clickedItem 
	var clickedItemPic
	var lockGame = false
	
	var trexChar = {
		hitPoints: 500,
		counterAP: 20,
		attackP: function(){counterAP+5}
	}

	var velChar = {
		hitPoints: 500,
		counterAP: 20,
		attackP:function(){counterAP+5}

	}
	var triChar = {
		hitPoints: 800,
		counterAP:20,
		attackP:function(){counterAP+5}

	}
	var pteChar = {
		hitPoints: 800,
		counterAP:20,
		attackP:function(){counterAP+5}
	}




	



$(document).ready(function() {

function chooseCharacter() {
	$(".unused-char").on("click", function(div) {
		if(clickCount===0 && lockGame === false){
			clickedItem = $("#"+ $(this).attr('id'))
			clickedItemPic = $("#"+ $(this).attr('id') +"-pic")
			$("#your-char").append(clickedItem)
			$("#unused-char-heading").html("Now Choose Your Opponent:")
			$("#your-char-heading").html("Your Fighter")
			$("#vers-area-heading").html("Versus")
			$(clickedItemPic).removeClass("inactive-char").addClass("active-char");
			clickCount++;
			$(clickedItem).removeClass("unused-char")
			lockGame=true


		}
	});
}

function chooseOpponent() {
	$(".unused-char").on("click", function(div) {
		if(clickCount!=0 && lockGame === false){
				clickedItem = $("#"+ $(this).attr('id'))
				clickedItemPic = $("#"+ $(this).attr('id') +"-pic")
				$("#your-opp").append($(clickedItem))
				$("#unused-char-heading").html("")
				$("#your-opp-heading").html("Your Opponent")
				$(clickedItemPic).remove("inactive char").addClass("active-char")
				attackBtn.text("ATTACK!");
				$("#vers-area").append(attackBtn)
				clickCount++
				$(clickedItem).removeClass("unused-char")
				lockGame=true
		};
	
	});
}
	
chooseCharacter()
lockGame=true
chooseOpponent()






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