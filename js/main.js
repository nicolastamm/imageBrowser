function showSideBar()
{
	$(".sideBar").animate({left:"0px"}, 100);
	$(".imagePlace").animate({left:"250px", opacity:"0.5"}, 100);
	return;
}
function hideSideBar()
{
	$(".sideBar").animate({left:"-170px"}, 100);
	$(".imagePlace").animate({left:"60px" , opacity:"1.0"}, 100);
	return;
}
function carouselSelector()
{
	$("#settingsGridEq").fadeOut(100,function(){$("#settingsEditBox")
	.fadeOut(100,function(){$("#settingsCarousel").fadeIn(100)})});
	$("#carouselSelector").animate({backgroundColor:"#4C9B71"}, 200);
	$("#gridEqSelector").animate({backgroundColor:"#555"}, 200);
	$("#editBoxSelector").animate({backgroundColor:"#555"}, 200);
	$("#myCarousel").show();
	$("#myGridEq").hide();
	$("#myEditBox").hide();
	return;
}
function gridEqSelector()
{
	$("#settingsCarousel").fadeOut(100 , function(){$("#settingsEditBox")
	.fadeOut(100 , function(){$("#settingsGridEq").fadeIn(100)})});
	$("#carouselSelector").animate({backgroundColor: "#555"}, 200);
	$("#gridEqSelector").animate({backgroundColor:"#4C9B71"}, 200);
	$("#editBoxSelector").animate({backgroundColor:"#555"}, 200);
	$("#myCarousel").hide();
	$("#myGridEq").show();
	$("#myEditBox").hide();
	return;
}
function editBoxSelector()
{
	$("#settingsCarousel").fadeOut(100 , function(){$("#settingsGridEq")
	.fadeOut(100, function(){$("#settingsEditBox").fadeIn(100)})});
	$("#carouselSelector").animate({backgroundColor:"#555"}, 200);
	$("#gridEqSelector").animate({backgroundColor:"#555"}, 200);
	$("#editBoxSelector").animate({backgroundColor:"#4C9B71"}, 200);
	$("#myCarousel").hide();
	$("#myGridEq").hide();
	$("#myEditBox").show();
	return;
}
function changeFilter()
{
	var sepiaFilter = 'sepia(100%)';
	var grayScaleFilter = 'grayscale(100%)';
	var invertedFilter = 'invert(100%)'
	var chosenFilter = $('input[name=filterType]:checked').val();
	if(chosenFilter === "sepia")
	{
		$('.editBox').css("filter" , sepiaFilter);
		return;
	}
	else if(chosenFilter === "blackWhite")
	{
		$('.editBox').css("filter" , grayScaleFilter);
		return;
	}
	else (chosenFilter === "invert")
	{
		$('.editBox').css("filter" , invertedFilter);
		return;
	}
}
