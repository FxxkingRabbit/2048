//通过动画显示数字
function showNumberWithAnimation(i,j,randNumber){
	var numberCell=$('#number-cell-'+i+'-'+j);
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	numberCell.css('color', getNumberColor(randNumber));
	numberCell.text(randNumber);


	numberCell.animate({
		width:cellWidth,
		height:cellWidth,
		top:getLocTop(i,j),
		left:getLocLeft(i,j)
	}, 500);
}

function showMoveAnimation(fromx,fromy,tox,toy){
	var numberCell=$('#number-cell-'+fromx+'-'+fromy);
	numberCell.animate({
		top:getLocTop(tox,toy),//20+120*tox(i),20+120*toy(j)
		left:getLocLeft(tox,toy)//
	},200);
}