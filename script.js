var factList = ["Over 80% of teens say they’ve tried to hide their online activity from parents.", "In 2022 alone, over 422 million people were affected by data breaches in the U.S.","Hackers can crack a weak password (like “123456”) in under 1 second.","A strong password uses 12+ characters and is way more secure than a short one.","Some apps collect your data even when you’re not using them.","Every time you click “Accept Cookies,” websites may start tracking you.","Public Wi-Fi can let hackers 'eavesdrop' on what you’re doing online.","Your digital footprint lasts forever — even deleted posts may still exist online.","Most phishing scams today are sent via email and text pretending to be jobs, banks, or even schools.","One in three Americans have been victims of identity theft.","Using the same password on multiple accounts makes it easier for hackers to break in.","Teen influencers are now teaching cybersecurity on TikTok and Instagram.","There’s an entire job field called 'ethical hacking' — where people are paid to break into systems legally to find flaws.","The 'dark web' is only a small part of the deep web — and not all of it is illegal!", "The average person agrees to over 1,000 privacy policies per year — without reading them!"];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if(fact){
myButton.addEventListener("click", displayFact);
}
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count==factList.length){
    count = 0;
  }
}