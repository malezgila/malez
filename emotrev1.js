/* Smileys For Blogger
 * For Public Use -MlzMan-
 */
document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley(){
  var postBodyClass = (postBodyClass) ? postBodyClass : 'post-body';
  var d = document.getElementsByClassName(postBodyClass);
  for(var i=0;i<d.length;i++){
			d[i].innerHTML = d[i].innerHTML.replace(/!-_-/gi, "<img src='http://1.bp.blogspot.com/-1BDfK2nlnX0/VLUYE35M0eI/AAAAAAAAANo/KCXpSw-QgUg/s1600/-.png' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!bye/gi, "<img src='http://3.bp.blogspot.com/-2PlOr5ovRts/VLUYFBHdW_I/AAAAAAAAANs/NnC_KZiM7gA/s1600/bye.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!bodo/gi, "<img src='http://3.bp.blogspot.com/-HsQ5J9_GFKE/VLUYFBxWW6I/AAAAAAAAANk/nTmYQN98UL4/s1600/bodo.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!cium/gi, "<img src='http://2.bp.blogspot.com/-05_04J7TbMQ/VLUYFzPR_yI/AAAAAAAAAN0/Ur6wQ9Kvh2A/s1600/cium.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!:D/gi, "<img src='http://3.bp.blogspot.com/-WdNBCHTrxUY/VLUYGGgbFiI/AAAAAAAAAN4/Fht6U4dVthY/s1600/d.png' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!gg/gi, "<img src='http://4.bp.blogspot.com/-lsf-S3VHLoY/VLUYGeABV0I/AAAAAAAAAN8/0bjrXQlcjyM/s1600/gg.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!hore/gi, "<img src='http://4.bp.blogspot.com/-uLnLZtqoHXY/VLUYGzxNozI/AAAAAAAAAOM/u4-mN_MKSsc/s1600/hore.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!maling/gi, "<img src='http://4.bp.blogspot.com/-jIUgCH_Ss4s/VLUYHWkYnbI/AAAAAAAAAOQ/y6i36dPQFJI/s1600/maling.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!mewek/gi, "<img src='http://1.bp.blogspot.com/--yIKSoQ1jYo/VLUYHmdirJI/AAAAAAAAAOY/1Yq-Mx2S0xQ/s1600/mewek.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!ngakak/gi, "<img src='http://2.bp.blogspot.com/-SBqzKDLZovA/VLUYISMxSCI/AAAAAAAAAOw/_SlQBc17WlU/s1600/ngakak.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!ngemis/gi, "<img src='http://4.bp.blogspot.com/-WxPgehS2fWc/VLUYIn69P5I/AAAAAAAAAOo/hFvcjkGRwL0/s1600/ngemis.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!:p/gi, "<img src='http://1.bp.blogspot.com/-QBAJT1cFWuE/VLUYJHePsBI/AAAAAAAAAOk/_tnEPXOA5kA/s1600/p.png' alt='' class='bbhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!peringatan/gi, "<img src='http://4.bp.blogspot.com/-2OLdilnptxI/VLUYR2P4egI/AAAAAAAAAP8/GN7qUFgNVps/s1600/peringatan.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!please/gi, "<img src='http://4.bp.blogspot.com/-Z1cZb18-jcc/VLUYK_AxfNI/AAAAAAAAAO0/EhSu4S2p_qI/s1600/please.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!pusing/gi, "<img src='http://4.bp.blogspot.com/-J3pICjnBmWU/VLUYLjJWZ_I/AAAAAAAAAPA/viYIhHd7YA4/s1600/pusing.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!semanget/gi, "<img src='http://2.bp.blogspot.com/-uFkckXn_uwc/VLUYMBaC-BI/AAAAAAAAAPE/-3hi3-YawYg/s1600/semanget.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!suram/gi, "<img src='http://1.bp.blogspot.com/-jjP9v_02x1A/VLUYNIgXZWI/AAAAAAAAAPY/xVjBDApsSf8/s1600/suram.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!tersipu/gi, "<img src='http://2.bp.blogspot.com/-cIjfcbacNKk/VLUYN5d8hCI/AAAAAAAAAPc/zzJ2sxDQBEE/s1600/tersipu.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!tonjok/gi, "<img src='http://1.bp.blogspot.com/-JnTQzIIkKXk/VLUYPLBgi5I/AAAAAAAAAPo/vuvrjyVqTes/s1600/tonjok.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!top/gi, "<img src='http://1.bp.blogspot.com/-gBJQQnC6Ru0/VLUYPYR-7FI/AAAAAAAAAPs/K-wTlBEr650/s1600/top.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!mangap/gi, "<img src='http://4.bp.blogspot.com/-gWht_GMbX6Q/VLUYQ21xLKI/AAAAAAAAAPw/8e54ALAb-LA/s1600/v.png' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!wow/gi, "<img src='http://4.bp.blogspot.com/-qpsSc-VkU8k/VLUYRjUyXNI/AAAAAAAAAQA/yqAEppZbpco/s1600/wow.gif' alt='' class='bhsmly'/>")
		
    }


var d = document.getElementsByClassName('widget-content');
  for(var i=0;i<d.length;i++){
			d[i].innerHTML = d[i].innerHTML.replace(/!-_-/gi, "<img src='http://1.bp.blogspot.com/-1BDfK2nlnX0/VLUYE35M0eI/AAAAAAAAANo/KCXpSw-QgUg/s1600/-.png' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!bye/gi, "<img src='http://3.bp.blogspot.com/-2PlOr5ovRts/VLUYFBHdW_I/AAAAAAAAANs/NnC_KZiM7gA/s1600/bye.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!bodo/gi, "<img src='http://3.bp.blogspot.com/-HsQ5J9_GFKE/VLUYFBxWW6I/AAAAAAAAANk/nTmYQN98UL4/s1600/bodo.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!cium/gi, "<img src='http://2.bp.blogspot.com/-05_04J7TbMQ/VLUYFzPR_yI/AAAAAAAAAN0/Ur6wQ9Kvh2A/s1600/cium.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!:D/gi, "<img src='http://3.bp.blogspot.com/-WdNBCHTrxUY/VLUYGGgbFiI/AAAAAAAAAN4/Fht6U4dVthY/s1600/d.png' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!gg/gi, "<img src='http://4.bp.blogspot.com/-lsf-S3VHLoY/VLUYGeABV0I/AAAAAAAAAN8/0bjrXQlcjyM/s1600/gg.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!hore/gi, "<img src='http://4.bp.blogspot.com/-uLnLZtqoHXY/VLUYGzxNozI/AAAAAAAAAOM/u4-mN_MKSsc/s1600/hore.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!maling/gi, "<img src='http://4.bp.blogspot.com/-jIUgCH_Ss4s/VLUYHWkYnbI/AAAAAAAAAOQ/y6i36dPQFJI/s1600/maling.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!mewek/gi, "<img src='http://1.bp.blogspot.com/--yIKSoQ1jYo/VLUYHmdirJI/AAAAAAAAAOY/1Yq-Mx2S0xQ/s1600/mewek.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!ngakak/gi, "<img src='http://2.bp.blogspot.com/-SBqzKDLZovA/VLUYISMxSCI/AAAAAAAAAOw/_SlQBc17WlU/s1600/ngakak.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!ngemis/gi, "<img src='http://4.bp.blogspot.com/-WxPgehS2fWc/VLUYIn69P5I/AAAAAAAAAOo/hFvcjkGRwL0/s1600/ngemis.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!:p/gi, "<img src='http://1.bp.blogspot.com/-QBAJT1cFWuE/VLUYJHePsBI/AAAAAAAAAOk/_tnEPXOA5kA/s1600/p.png' alt='' class='bbhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!peringatan/gi, "<img src='http://4.bp.blogspot.com/-2OLdilnptxI/VLUYR2P4egI/AAAAAAAAAP8/GN7qUFgNVps/s1600/peringatan.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!please/gi, "<img src='http://4.bp.blogspot.com/-Z1cZb18-jcc/VLUYK_AxfNI/AAAAAAAAAO0/EhSu4S2p_qI/s1600/please.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!pusing/gi, "<img src='http://4.bp.blogspot.com/-J3pICjnBmWU/VLUYLjJWZ_I/AAAAAAAAAPA/viYIhHd7YA4/s1600/pusing.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!semanget/gi, "<img src='http://2.bp.blogspot.com/-uFkckXn_uwc/VLUYMBaC-BI/AAAAAAAAAPE/-3hi3-YawYg/s1600/semanget.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!suram/gi, "<img src='http://1.bp.blogspot.com/-jjP9v_02x1A/VLUYNIgXZWI/AAAAAAAAAPY/xVjBDApsSf8/s1600/suram.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!tersipu/gi, "<img src='http://2.bp.blogspot.com/-cIjfcbacNKk/VLUYN5d8hCI/AAAAAAAAAPc/zzJ2sxDQBEE/s1600/tersipu.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!tonjok/gi, "<img src='http://1.bp.blogspot.com/-JnTQzIIkKXk/VLUYPLBgi5I/AAAAAAAAAPo/vuvrjyVqTes/s1600/tonjok.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!top/gi, "<img src='http://1.bp.blogspot.com/-gBJQQnC6Ru0/VLUYPYR-7FI/AAAAAAAAAPs/K-wTlBEr650/s1600/top.gif' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!mangap/gi, "<img src='http://4.bp.blogspot.com/-gWht_GMbX6Q/VLUYQ21xLKI/AAAAAAAAAPw/8e54ALAb-LA/s1600/v.png' alt='' class='bhsmly'/>");
			d[i].innerHTML = d[i].innerHTML.replace(/!wow/gi, "<img src='http://4.bp.blogspot.com/-qpsSc-VkU8k/VLUYRjUyXNI/AAAAAAAAAQA/yqAEppZbpco/s1600/wow.gif' alt='' class='bhsmly'/>")

}
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(addSmiley);