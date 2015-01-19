/* Smileys For Blogger
 * For Public Use 
 * Edited By -MlzMan-
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
      d[i].innerHTML = d[i].innerHTML.replace(/!happy/gi, "<img src='http://4.bp.blogspot.com/-azwhAsB7WW8/VL0Cw2s0rYI/AAAAAAAAAR0/drNEUbP27V0/s1600/aboishappyplz.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!boong/gi, "<img src='http://1.bp.blogspot.com/-0DJ6CZF1ArE/VL0EGDGigTI/AAAAAAAAASE/H08ZeP8rSEQ/s1600/boong.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!capedeh/gi, "<img src='http://4.bp.blogspot.com/-gNOjLH5jqQg/VL0EGHkAyrI/AAAAAAAAASA/AXguhgyCdgc/s1600/capedeh.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!dead/gi, "<img src='http://2.bp.blogspot.com/-OfE20E3o7Lo/VL0EGGMrDjI/AAAAAAAAAS0/2WX-seGb59o/s1600/dead.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!joget/gi, "<img src='http://4.bp.blogspot.com/-lGwjGqt64wM/VL0EIST8zEI/AAAAAAAAASU/q74UUV1F-tg/s1600/joget2.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!galau/gi, "<img src='http://4.bp.blogspot.com/-EIVikhhoPdM/VL0EHmtN0TI/AAAAAAAAASM/CDXERw_wSOg/s1600/galau.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!lega/gi, "<img src='http://1.bp.blogspot.com/-6-aD7gkIBkQ/VL0EJ4s10vI/AAAAAAAAASk/mpGvSVBi4iw/s1600/lega.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!maaf/gi, "<img src='http://4.bp.blogspot.com/-mSjusoGULic/VL0EKxIF7PI/AAAAAAAAASw/HWnILv5CHNw/s1600/maaf.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!matabelo/gi, "<img src='http://4.bp.blogspot.com/-vtIUK6YrynQ/VL0ELtc6z5I/AAAAAAAAATA/vepFy9y8qTw/s1600/matabelo.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!nangis/gi, "<img src='http://1.bp.blogspot.com/-l7raEsyGBFk/VL0EMjylj6I/AAAAAAAAATE/bp29vmNv0x8/s1600/nangis.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!ngece/gi, "<img src='http://2.bp.blogspot.com/-Axl7mf3ibNU/VL0ENAbPnEI/AAAAAAAAAT8/d4aW4g4Z7Xc/s1600/ngece.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!prustasi/gi, "<img src='http://3.bp.blogspot.com/-1e0VFVRPa30/VL0EOPqUEQI/AAAAAAAAATU/fmPr4lPblVA/s1600/prustasi.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!relax/gi, "<img src='http://1.bp.blogspot.com/-s1MLzwDM148/VL0EPdrbo4I/AAAAAAAAATg/kIh6hHioySI/s1600/relax.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!minta/gi, "<img src='http://2.bp.blogspot.com/-FWbpIuTJCOc/VL0EP_uDS-I/AAAAAAAAATk/FfDBEqenM-A/s1600/tagih.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!terharu/gi, "<img src='http://3.bp.blogspot.com/-RIWSJjDh03k/VL0ERexIBXI/AAAAAAAAATo/6AyoSJhNyiw/s1600/terharu.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!terkejut/gi, "<img src='http://4.bp.blogspot.com/-B1aO-Y2G1ns/VL0ESCSh-KI/AAAAAAAAATs/mSsQY3kVP7A/s1600/terkejut.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!kaget/gi, "<img src='http://2.bp.blogspot.com/-95jJqoRMJU8/VL0EJvWawUI/AAAAAAAAASc/TeXQtp4IV2E/s1600/kaget.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!pasrah/gi, "<img src='http://1.bp.blogspot.com/-yQx3TPfpFos/VL0ENiQT0aI/AAAAAAAAATQ/1KCEESjK20w/s1600/pasrah.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!sepi/gi, "<img src='http://1.bp.blogspot.com/-yQx3TPfpFos/VL0ENiQT0aI/AAAAAAAAATQ/1KCEESjK20w/s1600/pasrah.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!yes/gi, "<img src='http://4.bp.blogspot.com/-djRpXJkvv8Y/VL0EURPLuiI/AAAAAAAAAUI/LJJnkeWEOHk/s1600/yes.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!wawa/gi, "<img src='http://2.bp.blogspot.com/-4-GpDgxvkqQ/VL0ET6iPS-I/AAAAAAAAAUE/b17pHS6iFvw/s1600/wawa.gif' alt='' class='bhsmly'/>");
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
      d[i].innerHTML = d[i].innerHTML.replace(/!happy/gi, "<img src='http://4.bp.blogspot.com/-azwhAsB7WW8/VL0Cw2s0rYI/AAAAAAAAAR0/drNEUbP27V0/s1600/aboishappyplz.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!boong/gi, "<img src='http://1.bp.blogspot.com/-0DJ6CZF1ArE/VL0EGDGigTI/AAAAAAAAASE/H08ZeP8rSEQ/s1600/boong.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!capedeh/gi, "<img src='http://4.bp.blogspot.com/-gNOjLH5jqQg/VL0EGHkAyrI/AAAAAAAAASA/AXguhgyCdgc/s1600/capedeh.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!dead/gi, "<img src='http://2.bp.blogspot.com/-OfE20E3o7Lo/VL0EGGMrDjI/AAAAAAAAAS0/2WX-seGb59o/s1600/dead.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!joget/gi, "<img src='http://4.bp.blogspot.com/-lGwjGqt64wM/VL0EIST8zEI/AAAAAAAAASU/q74UUV1F-tg/s1600/joget2.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!galau/gi, "<img src='http://4.bp.blogspot.com/-EIVikhhoPdM/VL0EHmtN0TI/AAAAAAAAASM/CDXERw_wSOg/s1600/galau.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!lega/gi, "<img src='http://1.bp.blogspot.com/-6-aD7gkIBkQ/VL0EJ4s10vI/AAAAAAAAASk/mpGvSVBi4iw/s1600/lega.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!maaf/gi, "<img src='http://4.bp.blogspot.com/-mSjusoGULic/VL0EKxIF7PI/AAAAAAAAASw/HWnILv5CHNw/s1600/maaf.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!matabelo/gi, "<img src='http://4.bp.blogspot.com/-vtIUK6YrynQ/VL0ELtc6z5I/AAAAAAAAATA/vepFy9y8qTw/s1600/matabelo.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!nangis/gi, "<img src='http://1.bp.blogspot.com/-l7raEsyGBFk/VL0EMjylj6I/AAAAAAAAATE/bp29vmNv0x8/s1600/nangis.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!ngece/gi, "<img src='http://2.bp.blogspot.com/-Axl7mf3ibNU/VL0ENAbPnEI/AAAAAAAAAT8/d4aW4g4Z7Xc/s1600/ngece.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!prustasi/gi, "<img src='http://3.bp.blogspot.com/-1e0VFVRPa30/VL0EOPqUEQI/AAAAAAAAATU/fmPr4lPblVA/s1600/prustasi.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!relax/gi, "<img src='http://1.bp.blogspot.com/-s1MLzwDM148/VL0EPdrbo4I/AAAAAAAAATg/kIh6hHioySI/s1600/relax.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!minta/gi, "<img src='http://2.bp.blogspot.com/-FWbpIuTJCOc/VL0EP_uDS-I/AAAAAAAAATk/FfDBEqenM-A/s1600/tagih.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!terharu/gi, "<img src='http://3.bp.blogspot.com/-RIWSJjDh03k/VL0ERexIBXI/AAAAAAAAATo/6AyoSJhNyiw/s1600/terharu.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!terkejut/gi, "<img src='http://4.bp.blogspot.com/-B1aO-Y2G1ns/VL0ESCSh-KI/AAAAAAAAATs/mSsQY3kVP7A/s1600/terkejut.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!kaget/gi, "<img src='http://2.bp.blogspot.com/-95jJqoRMJU8/VL0EJvWawUI/AAAAAAAAASc/TeXQtp4IV2E/s1600/kaget.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!pasrah/gi, "<img src='http://1.bp.blogspot.com/-yQx3TPfpFos/VL0ENiQT0aI/AAAAAAAAATQ/1KCEESjK20w/s1600/pasrah.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!sepi/gi, "<img src='http://1.bp.blogspot.com/-yQx3TPfpFos/VL0ENiQT0aI/AAAAAAAAATQ/1KCEESjK20w/s1600/pasrah.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!yes/gi, "<img src='http://4.bp.blogspot.com/-djRpXJkvv8Y/VL0EURPLuiI/AAAAAAAAAUI/LJJnkeWEOHk/s1600/yes.gif' alt='' class='bhsmly'/>");
      d[i].innerHTML = d[i].innerHTML.replace(/!wawa/gi, "<img src='http://2.bp.blogspot.com/-4-GpDgxvkqQ/VL0ET6iPS-I/AAAAAAAAAUE/b17pHS6iFvw/s1600/wawa.gif' alt='' class='bhsmly'/>");
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