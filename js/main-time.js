// JavaScript Document
/*
window.onload = function(){
var span = document.getElementsByTagName('span')[0];
var dateStr = formatDate();
span.innerText = dateStr;
setInterval(function(){
span.innerText = formatDate();},1000);

function formatDate(){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	month = month<10?'0'+month:month;
	var day = date.getDate();
	day = day<10?'0'+day:day;
	var hours = date.getHours();
	hours = hours<10?'0'+hours:hours;
	var minutes = date.getMinutes();
	minutes = minutes<10?'0'+minutes:minutes;
	var seconds = date.getSeconds();
	seconds = seconds<10?'0'+seconds:seconds;
return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;}
}
*/

function getTime(){
    return new Date();
}
function setCurrentTime(){
    document.getElementById("currentTime").innerHTML = new Date();;
    setTimeout("setCurrentTime()",1000);
}
function setText(id,text){
    document.getElementById(id).innerHTML = text;
}