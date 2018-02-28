function makeRequest() {
      params  = "" ;
      request = new ajaxRequest()
    
      request.open("POST", "/countries.json", true)
      request.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded")
}

//Not sure if we need this for parsing the JSON data
//side note: we may need to find a way for it not too read the xml code. instead the actual db json code.
function parseItNice(responseXML) {
	var countries= responseXML.getElementsByTagName("select");
	var returnHTML="<select>";
	for(var i=0; i<countries.length;i++) {
		returnHTML+= "<option>"+countries[i].childNodes[0].nodeValue+"</option>";
	}
	returnHTML+="</select>";
  return returnHTML;
}