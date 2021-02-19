// JavaScript Document

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options = {}) {

  options.path = options.path ? options.path : '/';

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
	alert(document.cookie);
}
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}
function changeDark() {
	let dark = getCookie("dark");
	if( dark == "true"){
		deleteCookie( "dark");
	}else{
		setCookie('dark', 'true', {'max-age': 60*60*24*100});
	}
	document.body.classList.toggle('dark');
}

let dark = getCookie( "dark");
if( dark){
	document.body.classList.toggle('dark');
	setCookie('dark', 'true', {'max-age': 60*60*24*100});
}
