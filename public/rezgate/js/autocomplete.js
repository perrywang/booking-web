/**
 * Used to resolve confilicting $ handler with other libraries.
 */
//jQuery.noConflict();

//var locationDataURL = "http://demo.secure-reservation.com/rezbase_v3Reservations/ComponentSupport.do?method=locationData";
var locationDataURL = "http://chinatelecomtravel-web.chinatelecomtravel.com/ctReservations/ComponentSupport.do?method=locationData";
var jsonDataList = '';

/*var serviceHost = "localhost:8090";
var serviePortal ="rezbase_v3";
var servicePath ="admin/common/LocationData";*/

/*function createServiceUrl(){
	serviceHost = $('#serviceHost').val();
	serviePortal = $('#serviePortal').val();
	 
	locationDataURL = "http://"+ serviceHost+ "/" +  serviePortal+ "/" + servicePath
	//console.log("serviceHost:" +serviceHost+ ":"  )
	if(serviceHost==''){
		//console.log('timmer')
		setTimeout('createServiceUrl()',50);
	}
}*/

/**
 * Sort by a given field of a json object in an ascending or descending order
 * performing a specified operation on values.
 * 
 * @param field - string - name of the field the sort is performed.
 * @param reverse - boolean - specify the sorted order is ascending or descending.
 * @param primer - function - operation to be performed to the sorting value.
 */
function sort_by(field, reverse, primer){
//	console.log("Call")
	   reverse = (reverse) ? -1 : 1;

	   return function(a,b){
	       a = a[field];
	       b = b[field];

	       if (typeof(primer) != 'undefined'){
	           a = primer(a);
	           b = primer(b);
	       }

	       if (a<b) return reverse * -1;
	       if (a>b) return reverse * 1;
	       return 0;

	   }
	};

/**
 * This defines the type of list to load according to the search engine type.
 * 
 * @param engine
 * @return
 */
function searchTypeSelector(engine){
    var bookingType = document.getElementsByName("engType1");
    var type = "citylist";
//    console.log(engine);
    for (var index = 0; index < bookingType.length; index++) {
        if(jQuery(bookingType[index]).is(':checked')){
            var value = jQuery(bookingType[index]).val();
            switch(value){
                case 'H':
                    type = "citylist";
                    break;
                case 'A':
                    type = "citylist";
                    break;
                case 'V':
                    type = "airportlist";
                    break;
                case 'C':
                    type = "carlocationlist";
                    break;
                case 'F':
                    type = "airportlist";
                    break;
                case 'FH':
                    type = "airportlist";
                    break;
                case 'FC':
                    type = "airportlist";
                    break;
                case 'FHC':
                    type = "airportlist";
                    break;
                case 'FHA':
                    type = "airportlist";
                    break;
            }
        } else {
//        	console.log(engine);
        	switch(value){
            	case 'H':
                	type = "citylist";
                	break;
            	case 'A':
                	type = "citylist";
                	break;
            	case 'V':
                	type = "airportlist";
                	break;
            	case 'C':
                	type = "carlocationlist";
                	break;
            	case 'F':
                	type = "airportlist";
                	break;
            	case 'FH':
                	type = "airportlist";
                	break;
            	case 'FC':
                	type = "airportlist";
                	break;
            	case 'FHC':
                	type = "airportlist";
                	break;
            	case 'FHA':
                	type = "airportlist";
                	break;
        	}
        }
    }
	
    if(bookingType.length == 0 || bookingType == null || bookingType == "undefined"){
        switch(engine){
            case 'H':
                type = "citylist";
                break;
            case 'A':
                type = "citylist";
                break;
            case 'V':
                type = "airportlist";
                break;
            case 'C':
                type = "carlocationlist";
                break;
            case 'F':
                type = "airportlist";
                break;
            case 'T':
                type = "transferpointlist";
                break;                
            case 'HC':
                type = "citylist";
                break;
            case 'FH':
                type = "airportlist";
                break;
            case 'FC':
                type = "airportlist";
                break;
            case 'FHC':
                type = "airportlist";
                break;
            case 'FHA':
                type = "airportlist";
                break;
        }
    } else {
    	switch(engine){
        	case 'H':
            	type = "citylist";
            	break;
        	case 'A':
            	type = "citylist";
            	break;
        	case 'V':
            	type = "airportlist";
            	break;
        	case 'C':
            	type = "carlocationlist";
            	break;
        	case 'F':
            	type = "airportlist";
            	break;
        	case 'T':
            	type = "transferpointlist";
            	break;            	
        	case 'HC':
                type = "citylist";
                break;
        	case 'FH':
            	type = "airportlist";
            	break;
        	case 'FC':
            	type = "airportlist";
            	break;
        	case 'FHC':
            	type = "airportlist";
            	break;
        	case 'FHA':
            	type = "airportlist";
            	break;
    	}
    }
    return type;
};

function matcher(regex, text){
    var filter = new RegExp(
        "(^)(" +
        regex +
        ")(?![^<>]*>)(?![^&;]+;)", "gi"
        ).test(text);
    return filter;
};

function getDestinationCountry(){
	try{
		var sel = document.getElementById("destinationcountry");
		if (sel != null || sel != "" || sel != "undefined") {
			var country = sel.options[sel.selectedIndex].innerHTML;
			if (country == null || country == "" || country == "undefined" || jQuery.trim(country) == "-Select a Country-"){
				return;
			} else {
				return jQuery.trim(country);
			}
		} else {
			return "";
		} 
	}catch(e){}
	
}

function getDestinationCountry_A(){
	try{
		var sel = document.getElementById("destinationcountry_A");
		if (sel != null || sel != "" || sel != "undefined") {
			var country = sel.options[sel.selectedIndex].innerHTML;
			if (country == null || country == "" || country == "undefined" || jQuery.trim(country) == "-Select a Country-"){
				return;
			} else {
				return jQuery.trim(country);
			}
		} else {
			return;
		}
	}catch(e){}
}

/**
 * Create label to display in the lookup list
 * @param item
 * @return
 */
function createLabel(item, type){
	var label = '';
	
	if(type == 'city'){
		if (item.sna != ''){
			label = item.cnm + ",  " + item.sna + ",  " + item.cna;
		} else {
			label = item.cnm + ",  " + item.cna;
		}
	} else if(type == 'location'){
		label = item.cna + " - " + item.cnm;
	} else {
		label = item.cna + " - " + item.apcd + " - " + item.apnm + " - " + item.cnm;
	}
	return label;
}

function loadCacheData(term, response){
	try{
		var key = term + '@'+ $('#partnerType').val() + '@'+ $('#partnerId').val();
		if (key in cache) {
			response(cache[key]);
	        return;
	    }
	}catch(e){}
}

function addCacheData(term, returnData){
	try{
	var key = term + '@'+ $('#partnerType').val() + '@'+ $('#partnerId').val();
		if(jQuery(returnData).size() > 0){		
			cache[key] = returnData;
		}
	}catch(e){}
}

/* Autocomplete widgets */
jQuery(function() {
	 /*serviceHost = $('#serviceHost').val();
	 serviePortal = $('#serviePortal').val();*/
	 //createServiceUrl();
	 
    var cache = {};
    var search_type = searchTypeSelector();
    var selected_data = null;
//    var country = jQuery("#destinationcountry option:selected").text();
//    var country = getDestinationCountry();
    
    /**
		 * Autocomplete for hotels
		 */
    jQuery( "#H_Loc" ).autocomplete({
        minLength: 2,
        source: function(request, response) {
        	//loadCacheData(request.term);
					
            jQuery.ajax({
                url: locationDataURL,
                dataType: "script",
                xhr: function () {
                    if (jQuery.browser.msie && jQuery.browser.msie){
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } else {
                        return new XMLHttpRequest();
                    }
                },
                data: {
                	partnerType:$('#partnerType').val(),
                	productType:$('#engLoaded').val(),
                	partnerId:$('#partnerId').val(),
                    term: request.term,
                    search_type: search_type,
					bookingEngine: "Y",
					search_country: getDestinationCountry(),
					callBack: "callbackCities"
                    
                },
                success: function() {
                   
                    var returnData =jQuery.map(jsonDataList.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
                        var text = createLabel(item, 'city');
                        if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                            return {
                                label: text.replace(new RegExp(
                                    "(?![^&;]+;)(?!<[^<>]*)(" +
                                    request.term +
                                    ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                    ), "$1"),
                                value: item.cna,
                                searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid,
                                selectedcountry:item.cnm
                            }
                        }
                    }); 
                    //addCacheData(request.term, returnData);
                    response(returnData);

                }
            });
        }
    });
    
     /**
		 * Autocomplete for activities
		 */
    jQuery( "#activity_Loc" ).autocomplete({
        minLength: 2,
        source: function(request, response) {
        	//loadCacheData(request.term);
				
            jQuery.ajax({
                url: locationDataURL,
                dataType: "script",
                xhr: function () {
                    if (jQuery.browser.msie && jQuery.browser.msie){
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } else {
                        return new XMLHttpRequest();
                    }
                },
                data: {
                	partnerType:$('#partnerType').val(),
                	productType:$('#engLoaded').val(),
                	partnerId:$('#partnerId').val(),
                    term: request.term,
                    search_type: search_type,
					bookingEngine: "Y",
					search_country: getDestinationCountry_A(),
					callBack: "callbackCities"
                   
                },
                success: function(data) {
                	var returnData = jQuery.map(jsonDataList.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
                    	var text = createLabel(item, 'city');
                        if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                            return {
                                label: text.replace(new RegExp(
                                    "(?![^&;]+;)(?!<[^<>]*)(" +
                                    request.term +
                                    ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                    ), "$1"),
                                value: item.cna,
                                searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid,
                           		selectedcountry:item.cnm
                            }
                        }
                    });
                	//addCacheData(request.term, returnData);
                    response(returnData);

                }
            });
        }
    });
		

	

    /**
		 * Autocomplete for hotels and activities.
		 */
    jQuery( "#autocomplete_HA" ).autocomplete({
        minLength: 2,
        source: function(request, response) {
        	loadCacheData(request.term, response);
				
            jQuery.ajax({
                url: locationDataURL,
                dataType: "json",
                xhr: function () {
                    if (jQuery.browser.msie && jQuery.browser.msie){
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } else {
                        return new XMLHttpRequest();
                    }
                },
                data: {
                	partnerType:$('#partnerType').val(),
                	productType:$('#engLoaded').val(),
                	partnerId:$('#partnerId').val(),
                    term: request.term,
                    search_type: search_type,
                    search_country: getDestinationCountry()
                },
                success: function(data) {
                	var returnData = jQuery.map(data.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
                    	var text = createLabel(item, 'city');
                        if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                            return {
                                label: text.replace(new RegExp(
                                    "(?![^&;]+;)(?!<[^<>]*)(" +
                                    request.term +
                                    ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                    ), "<strong>$1</strong>"),
                                value: item.cna,
                                searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid
                            }
                        }
                    });
                    cache[ request.term ] = returnData;
                    response(returnData)

                }
            });
        }
    });
		
    /**
		 * Autocomplete for hotels and activities.
		 */
    jQuery( "#autocomplete" ).autocomplete({
        minLength: 2,
        source: function(request, response) {
        	loadCacheData(request.term, response);
				
            jQuery.ajax({
                url: locationDataURL,
                dataType: "json",
                xhr: function () {
                    if (jQuery.browser.msie && jQuery.browser.msie){
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } else {
                        return new XMLHttpRequest();
                    }
                },
                data: {
                	partnerType:$('#partnerType').val(),
                	productType:$('#engLoaded').val(),
                	partnerId:$('#partnerId').val(),
                    term: request.term,
                    search_type: search_type,
                    search_country: getDestinationCountry()
                },
                success: function(data) {
                	var returnData = jQuery.map(data.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
                    	var text = createLabel(item, 'city');
                        if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                            return {
                                label: text.replace(new RegExp(
                                    "(?![^&;]+;)(?!<[^<>]*)(" +
                                    request.term +
                                    ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                    ), "<strong>$1</strong>"),
                                value: item.cna,
                                searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid
                            }
                        }
                    });
                    cache[ request.term ] = returnData;
                    response(returnData);

                }
            });
        }
    });
		
    /**
		 * Autocomplete for Holidays departure location.
		 */
    jQuery("#V_DepFrom").autocomplete({
        minLength : 2,
        source : function(request, response) {
        	loadCacheData(request.term + 'O',response);

            jQuery
            .ajax( {
                url : locationDataURL,
                dataType : "script",
                xhr: function () {
                    if (jQuery.browser.msie && jQuery.browser.msie){
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } else {
                        return new XMLHttpRequest();
                    }
                },
                data : {
                	partnerType:$('#partnerType').val(),
                	productType:$('#engLoaded').val(),
                	partnerId:$('#partnerId').val(),
                	airportType:"O",
                    term : request.term,
                    search_type : searchTypeSelector('V'),
					callBack: "callbackCities",
					bookingEngine: "Y"
                    //search_country: getDestinationCountry()
                },
                success : function(data) {
                   
                    var returnData = jQuery.map(
                    		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                            function(item) {
                                var text = createLabel(item, 'airport');                                
                                if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                    return {
                                        label : text.replace(new RegExp(
                                                "(?![^&;]+;)(?!<[^<>]*)("
                                                + request.term
                                                + ")(?![^<>]*>)(?![^&;]+;)",
                                                "gi"),
                                            "$1"),
                                        value : item.cna,
                                        searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                    }
                                }
                            });
                    addCacheData(request.term + 'O', returnData);
                    response(returnData)

                }
            });
        }
    });

    /**
		 * Autocomplete for Holidays return location.
		 */
    jQuery("#V_RetLoc").autocomplete({
        minLength : 2,
        source : function(request, response) {
        	loadCacheData(request.term + 'D',response);

            jQuery
            .ajax( {
                url : locationDataURL,
                dataType : "script",
                xhr: function () {
                    if (jQuery.browser.msie && jQuery.browser.msie){
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } else {
                        return new XMLHttpRequest();
                    }
                },
                data : {
                	partnerType:$('#partnerType').val(),
                	productType:$('#engLoaded').val(),
                	partnerId:$('#partnerId').val(),
                	airportType:"D",
                    term : request.term,
                    search_type : searchTypeSelector('V'),
					callBack: "callbackCities",
					bookingEngine: "Y"
                    //search_country: getDestinationCountry()
                },
                success : function(data) {
                	var returnData = jQuery.map(
                    		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                            function(item) {
                    			var text = createLabel(item, 'airport');                                
                                if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                    return {
                                        label : text.replace(new RegExp(
                                                "(?![^&;]+;)(?!<[^<>]*)("
                                                + request.term
                                                + ")(?![^<>]*>)(?![^&;]+;)",
                                                "gi"),
                                            "$1"),
                                        value : item.cna,
                                        searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                    }
                                }
                            });
                    addCacheData(request.term + 'D', returnData);
                    response(returnData)

                }
            });
        }
    });
    
    /**
	 * Autocomplete for Flights departure location.
	 */
jQuery("#air_Loc_a").autocomplete({
    minLength : 2,
    source : function(request, response) {
    	loadCacheData(request.term +'O',response);
    	
        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "O",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
                addCacheData(request.term+'O', returnData);
                response(returnData);

            }
        });
    }
});

jQuery("#air_Loc_dep_m_2").autocomplete({
    minLength : 2,
    source : function(request, response) {
    	loadCacheData(request.term+'O',response);

        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "O",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
                addCacheData(request.term + 'O' , returnData);
                response(returnData);

            }
        });
    }
});

jQuery("#air_Loc_dep_m_3").autocomplete({
    minLength : 2,
    source : function(request, response) {
    	loadCacheData(request.term +'O',response);

        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "O",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
            	addCacheData(request.term + 'O' , returnData);
                response(returnData);

            }
        });
    }
});
jQuery("#air_Loc_dep_m_4").autocomplete({
    minLength : 2,
    source : function(request, response) {
    	loadCacheData(request.term+'O',response);

        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "O",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
            	addCacheData(request.term + 'O' , returnData);
                response(returnData);

            }
        });
    }
});

jQuery("#air_Loc_dep_m_5").autocomplete({
    minLength : 2,
    source : function(request, response) {
    	loadCacheData(request.term +'O',response);

        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "O",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
            	addCacheData(request.term + 'O' , returnData);
                response(returnData);

            }
        });
    }
});
/**
	 * Autocomplete for Flights return location.
	 */
jQuery("#air_Loc1_a").autocomplete({
	minLength : 2,
    close: function( event, ui ) {
    	resizeContainer();
    },
    open: function( event, ui ) {
		//resizeParentSize(null,cache[document.currentTerm].length * 1)
	},    
    source : function(request, response) {
    	document.currentTerm = request.term;
    	loadCacheData(request.term + 'D',response);

        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "D",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
            	addCacheData(request.term + 'D', returnData);            	
                response(returnData)

            }
        });
    }
});

jQuery("#air_Loc_to_m_2").autocomplete({
	minLength : 2,
    close: function( event, ui ) {
    	resizeContainer();
    },
    open: function( event, ui ) {
		//resizeParentSize(null,cache[document.currentTerm].length * 1)
	},    
    source : function(request, response) {
    	document.currentTerm = request.term;
    	loadCacheData(request.term + 'D',response);

        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "D",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
                addCacheData(request.term + 'D', returnData);
                response(returnData)

            }
        });
    }
});


jQuery("#air_Loc_to_m_3").autocomplete({
	minLength : 2,
    close: function( event, ui ) {
    	resizeContainer();
    },
    open: function( event, ui ) {
		//resizeParentSize(null,cache[document.currentTerm].length * 1)
	},    
    source : function(request, response) {
    	document.currentTerm = request.term;
    	loadCacheData(request.term + 'D',response);

        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "D",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
                addCacheData(request.term + 'D', returnData);
                response(returnData)

            }
        });
    }
});

jQuery("#air_Loc_to_m_4").autocomplete({
	minLength : 2,
    close: function( event, ui ) {
    	resizeContainer();
    },
    open: function( event, ui ) {
		//resizeParentSize(null,cache[document.currentTerm].length * 1)
	},    
    source : function(request, response) {
    	document.currentTerm = request.term;
    	loadCacheData(request.term + 'D',response);

        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "D",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
                addCacheData(request.term + 'D', returnData);
                response(returnData)

            }
        });
    }
});

jQuery("#air_Loc_to_m_5").autocomplete({
	minLength : 2,
    close: function( event, ui ) {
    	resizeContainer();
    },
    open: function( event, ui ) {
		//resizeParentSize(null,cache[document.currentTerm].length * 1)
	},    
    source : function(request, response) {
    	document.currentTerm = request.term;
    	loadCacheData(request.term + 'D',response);

        jQuery
        .ajax( {
            url : locationDataURL,
            dataType : "script",
            xhr: function () {
                if (jQuery.browser.msie && jQuery.browser.msie){
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } else {
                    return new XMLHttpRequest();
                }
            },
            data : {
            	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
            	airportType: "D",
                term : request.term,
                search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
                //search_country: getDestinationCountry()
            },
            success : function(data) {
            	var returnData = jQuery.map(
                		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                        function(item) {
                			var text = createLabel(item, 'airport');                                
                            if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                                return {
                                    label : text.replace(new RegExp(
                                            "(?![^&;]+;)(?!<[^<>]*)("
                                            + request.term
                                            + ")(?![^<>]*>)(?![^&;]+;)",
                                            "gi"),
                                        "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                                }
                            }
                        });
                addCacheData(request.term + 'D', returnData);
                response(returnData)

            }
        });
    }
});
/**
 * Autocomplete search again for Flights departure location.
 */
jQuery("#depLocNameNew").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term, response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData);

        }
    });
}
});

/**
 * Autocomplete search again for Flights return location.
 */
jQuery("#arrLocNameNew").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Flights + Hotels departure location.
 */
jQuery("#FH_DepFrom").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData);

        }
    });
}
});

/**
 * Autocomplete for Flights + Hotels return location.
 */
jQuery("#FH_RetLoc").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Flights + Cars departure location.
 */
jQuery("#FC_DepFrom").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Flights + Cars return location.
 */
jQuery("#FC_RetLoc").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Flights + Hotels + Cars departure location.
 */
jQuery("#FHC_DepFrom").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Flights + Cars return location.
 */
jQuery("#FHC_RetLoc").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData);

        }
    });
}
});

/**
 * Autocomplete for Flights + Hotels + Activities departure location.
 */
jQuery("#FHA_DepFrom").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData);

        }
    });
}
});

/**
 * Autocomplete for Flights + Hotels + Activities return location.
 */
jQuery("#FHA_RetLoc").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});


/**
 * Autocomplete for activities
 */
jQuery( "#cityLookup" ).autocomplete({
minLength: 2,
source: function(request, response) {
	loadCacheData(request.term,response);
		
    jQuery.ajax({
        url: locationDataURL,
        dataType: "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data: {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term: request.term,
            search_type: search_type,
            search_country: getDestinationCountry()
        },
        success: function(data) {
        	var returnData = jQuery.map(data.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
            	var text = createLabel(item, 'city');
                if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                    return {
                        label: text.replace(new RegExp(
                            "(?![^&;]+;)(?!<[^<>]*)(" +
                            request.term +
                            ")(?![^<>]*>)(?![^&;]+;)", "gi"
                            ), "<strong>$1</strong>"),
                        value: item.cna,
                        searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid
                    }
                }
            });
            cache[ request.term ] = returnData;
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for hotels, cars, activities
 */
jQuery( "#autocomplete_HCA" ).autocomplete({
minLength: 2,
source: function(request, response) {
	loadCacheData(request.term,response);
			
    jQuery.ajax({
        url: locationDataURL,
        dataType: "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data: {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term: request.term,
            search_type: searchTypeSelector('H'),
            search_country: getDestinationCountry()
        },
        success: function(data) {
        	var returnData = jQuery.map(data.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
                var text = createLabel(item, 'city');
                if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                    return {
                        label: text.replace(new RegExp(
                            "(?![^&;]+;)(?!<[^<>]*)(" +
                            request.term +
                            ")(?![^<>]*>)(?![^&;]+;)", "gi"
                            ), "<strong>$1</strong>"),
                        value: item.cna,
                        searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid
                    }
                }
            });
            cache[ request.term ] = returnData;
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Car departure location.
 */
jQuery("#car_Loc").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);
	
    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "script",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('C'),
			callBack: "callbackCities",
			bookingEngine: "Y"
            //search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
                        var text = createLabel(item, 'location');                                
                        if (matcher(request.term, item.cna) ) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.cid + "|" + item.cid + "|" + item.cna + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
//            console.log("success");
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Car return location.
 */
jQuery("#car_Loc1").autocomplete({
	minLength : 2,
    close: function( event, ui ) {
    	resizeContainer();
    },
    open: function( event, ui ) {
		resizeParentSize(null,cache[document.currentTerm].length * 1)
	},  

	source : function(request, response) {
	document.currentTerm = request.term;
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "script",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('C'),
			callBack: "callbackCities",
					bookingEngine: "Y"
            //search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'location');                                
                        if (matcher(request.term, item.cna)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "$1"),
                                    value : item.cna,
                                    searchvalue : item.cna + "|" + item.cid + "|" + item.cid + "|" + item.cna + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                              }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData);

        }
    });
}
});

/**
 * Autocomplete for hotels, cars, activities
 */
jQuery( "#autocomplete_HC" ).autocomplete({
minLength: 2,
source: function(request, response) {
	loadCacheData(request.term,response);
			
    jQuery.ajax({
        url: locationDataURL,
        dataType: "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data: {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term: request.term,
            search_type: searchTypeSelector('HC'),
            search_country: getDestinationCountry()
        },
        success: function(data) {
        	var returnData = jQuery.map(data.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
                var text = createLabel(item, 'city');
                if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                    return {
                        label: text.replace(new RegExp(
                            "(?![^&;]+;)(?!<[^<>]*)(" +
                            request.term +
                            ")(?![^<>]*>)(?![^&;]+;)", "gi"
                            ), "<strong>$1</strong>"),
                        value: item.cna,
                        searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid
                    }
                }
            });
            cache[ request.term ] = returnData;
            response(returnData);

        }
    });
}
});

/**
 * Autocomplete for Car departure location.
 */
jQuery("#CA_PickUpLoc").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('C'),
			callBack: "callbackCities",
			bookingEngine: "Y"
            //search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
                        var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.cna + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
//            console.log("success");
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Car return location.
 */
jQuery("#CA_ReturnLoc").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('C'),
			callBack: "callbackCities",
			bookingEngine: "Y"
            //search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.cna + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Flights + Hotels + Activities departure location.
 */
jQuery("#FCA_DepFrom").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData);

        }
    });
}
});

/**
 * Autocomplete for Flights + Hotels + Activities return location.
 */
jQuery("#FCA_RetLoc").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData);

        }
    });
}
});

/**
 * Autocomplete for Flights + Hotels + Activities departure location.
 */
jQuery("#FHCA_DepFrom").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    })
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Flights + Hotels + Activities return location.
 */
jQuery("#FHCA_RetLoc").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('F'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for Car departure location.
 */
jQuery("#pickupLocNameNew").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('C'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
                        var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.cna + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
//            console.log("success");
            response(returnData);

        }
    });
}
});

/**
 * Autocomplete for Car return location.
 */
jQuery("#retupLocNameNew").autocomplete({
minLength : 2,
source : function(request, response) {
	loadCacheData(request.term,response);

    jQuery
    .ajax( {
        url : locationDataURL,
        dataType : "json",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data : {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term : request.term,
            search_type : searchTypeSelector('C'),
            search_country: getDestinationCountry()
        },
        success : function(data) {
        	var returnData = jQuery.map(
            		data.list.sort(sort_by('cna', false, function(a){return a})),
                    function(item) {
            			var text = createLabel(item, 'airport');                                
                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
                            return {
                                label : text.replace(new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)("
                                        + request.term
                                        + ")(?![^<>]*>)(?![^&;]+;)",
                                        "gi"),
                                    "<strong>$1</strong>"),
                                value : item.cna,
                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.cna + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
                            }
                        }
                    });
            addCacheData(request.term, returnData);
            response(returnData)

        }
    });
}
});


/**
 * Transfers
 * Autocomplete for transfers pickupCity - (for airport drop )
 */
jQuery( "#pickUpCity_H_Loc" ).autocomplete({
minLength: 2,
source: function(request, response) {
	loadCacheData(request.term,response);
		
    jQuery.ajax({
        url: locationDataURL,
        dataType: "script",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data: {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term: request.term,
            search_type: search_type,
			bookingEngine: "Y",
			callBack: "callbackCities"
            //search_country: getDestinationCountry()
        },
        success: function(data) {
        	var returnData = jQuery.map(jsonDataList.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
            	var text = createLabel(item, 'city');
                if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                    return {
                        label: text.replace(new RegExp(
                            "(?![^&;]+;)(?!<[^<>]*)(" +
                            request.term +
                            ")(?![^<>]*>)(?![^&;]+;)", "gi"
                            ), "$1"),
                        value: item.cna,
                        searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid
                    }
                }
            });
            cache[ request.term ] = returnData;
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for transfers pickupCity - (for hotel drop )
 */
jQuery( "#pickUpCity_A_Loc" ).autocomplete({
minLength: 2,
source: function(request, response) {
	loadCacheData(request.term,response);
		
    jQuery.ajax({
        url: locationDataURL,
        dataType: "script",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data: {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term: request.term,
            search_type: search_type,
			bookingEngine: "Y",
			callBack: "callbackCities"
            //search_country: getDestinationCountry()
        },
        success: function(data) {
        	var returnData = jQuery.map(jsonDataList.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
            	var text = createLabel(item, 'city');
                if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                    return {
                        label: text.replace(new RegExp(
                            "(?![^&;]+;)(?!<[^<>]*)(" +
                            request.term +
                            ")(?![^<>]*>)(?![^&;]+;)", "gi"
                            ), "$1"),
                        value: item.cna,
                        searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid
                    }
                }
            });
            cache[ request.term ] = returnData;
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for transfers dropOffCity - (for airport drop )
 */
jQuery( "#dropOffCity_H_Loc" ).autocomplete({
minLength: 2,
source: function(request, response) {
	loadCacheData(request.term,response);
		
    jQuery.ajax({
        url: locationDataURL,
        dataType: "script",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data: {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term: request.term,
            search_type: search_type,
			bookingEngine: "Y",
			callBack: "callbackCities"
            //search_country: getDestinationCountry()
        },
        success: function(data) {
        	var returnData = jQuery.map(jsonDataList.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
            	var text = createLabel(item, 'city');
                if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                    return {
                        label: text.replace(new RegExp(
                            "(?![^&;]+;)(?!<[^<>]*)(" +
                            request.term +
                            ")(?![^<>]*>)(?![^&;]+;)", "gi"
                            ), "$1"),
                        value: item.cna,
                        searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid
                    }
                }
            });
            cache[ request.term ] = returnData;
            response(returnData)

        }
    });
}
});

/**
 * Autocomplete for transfers dropOffCity - (for hotel drop )
 */
jQuery( "#dropOffCity_A_Loc" ).autocomplete({
minLength: 2,
source: function(request, response) {
	loadCacheData(request.term,response);
		
    jQuery.ajax({
        url: locationDataURL,
        dataType: "script",
        xhr: function () {
            if (jQuery.browser.msie && jQuery.browser.msie){
                return new ActiveXObject("Microsoft.XMLHTTP");
            } else {
                return new XMLHttpRequest();
            }
        },
        data: {
        	partnerType:$('#partnerType').val(),
        	productType:$('#engLoaded').val(),
        	partnerId:$('#partnerId').val(),
            term: request.term,
            search_type: search_type,
			bookingEngine: "Y",
			callBack: "callbackCities"
            //search_country: getDestinationCountry()
        },
        success: function(data) {
        	var returnData = jQuery.map(jsonDataList.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
            	var text = createLabel(item, 'city');
                if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
                    return {
                        label: text.replace(new RegExp(
                            "(?![^&;]+;)(?!<[^<>]*)(" +
                            request.term +
                            ")(?![^<>]*>)(?![^&;]+;)", "gi"
                            ), "$1"),
                        value: item.cna,
                        searchvalue : item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid
                    }
                }
            });
            cache[ request.term ] = returnData;
            response(returnData)

        }
    });
}
});

	
	  
loadFpkgCountryAutocomplete();

		
    jQuery("#H_Loc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#hid_H_Loc").val(ui.item.searchvalue);
        selectDestinationCountry(ui.item.selectedcountry);
    });
	
	  jQuery("#air_Loc_a").bind( "autocompleteselect", function(event, ui) {
        jQuery("#hid_air_Loc_a").val(ui.item.searchvalue);
        airLocationValidate("#air_Loc_a","#air_Loc1_a","#hid_air_Loc_a","#hid_air_Loc1_a")
        //selectDestinationCountry(ui.item.selectedcountry);
    });
	  
	  jQuery("#air_Loc1_a").bind( "autocompleteselect", function(event, ui) {
	        jQuery("#hid_air_Loc1_a").val(ui.item.searchvalue);
	        airLocationValidate("#air_Loc_a","#air_Loc1_a","#hid_air_Loc_a","#hid_air_Loc1_a")
	        //selectDestinationCountry(ui.item.selectedcountry);
	    });
	  
	  jQuery("#air_Loc_dep_m_2").bind( "autocompleteselect", function(event, ui) {
        jQuery("#hid_air_Loc_dep_m_2").val(ui.item.searchvalue);
        airLocationValidate("#air_Loc_dep_m_2","#air_Loc_to_m_2","#hid_air_Loc_dep_m_2","#hid_air_Loc_to_m_2")
        //selectDestinationCountry(ui.item.selectedcountry);
	  });
	  
	  jQuery("#air_Loc_to_m_2").bind( "autocompleteselect", function(event, ui) {
	        jQuery("#hid_air_Loc_to_m_2").val(ui.item.searchvalue);
	        airLocationValidate("#air_Loc_dep_m_2","#air_Loc_to_m_2","#hid_air_Loc_dep_m_2","#hid_air_Loc_to_m_2")
	        //selectDestinationCountry(ui.item.selectedcountry);
	   });
	  
	  jQuery("#air_Loc_dep_m_3").bind( "autocompleteselect", function(event, ui) {
	        jQuery("#hid_air_Loc_dep_m_3").val(ui.item.searchvalue);
	        airLocationValidate("#air_Loc_dep_m_3","#air_Loc_to_m_3","#hid_air_Loc_dep_m_3","#hid_air_Loc_to_m_3")
	        //selectDestinationCountry(ui.item.selectedcountry);
	  });
	  
	  jQuery("#air_Loc_to_m_3").bind( "autocompleteselect", function(event, ui) {
	        jQuery("#hid_air_Loc_to_m_3").val(ui.item.searchvalue);
	        airLocationValidate("#air_Loc_dep_m_3","#air_Loc_to_m_3","#hid_air_Loc_dep_m_3","#hid_air_Loc_to_m_3")
	        //selectDestinationCountry(ui.item.selectedcountry);
	  });
	  
	  jQuery("#air_Loc_dep_m_4").bind( "autocompleteselect", function(event, ui) {
	        jQuery("#hid_air_Loc_dep_m_4").val(ui.item.searchvalue);
	        airLocationValidate("#air_Loc_dep_m_4","#air_Loc_to_m_4","#hid_air_Loc_dep_m_4","#hid_air_Loc_to_m_4")
	        //selectDestinationCountry(ui.item.selectedcountry);
	  });
	  
	  jQuery("#air_Loc_to_m_4").bind( "autocompleteselect", function(event, ui) {
	        jQuery("#hid_air_Loc_to_m_4").val(ui.item.searchvalue);
	        airLocationValidate("#air_Loc_dep_m_4","#air_Loc_to_m_4","#hid_air_Loc_dep_m_4","#hid_air_Loc_to_m_4")
	        //selectDestinationCountry(ui.item.selectedcountry);
	  });
	  
	  jQuery("#air_Loc_dep_m_5").bind( "autocompleteselect", function(event, ui) {
	        jQuery("#hid_air_Loc_dep_m_5").val(ui.item.searchvalue);
	        airLocationValidate("#air_Loc_dep_m_5","#air_Loc_to_m_5","#hid_air_Loc_dep_m_5","#hid_air_Loc_to_m_5")
	        //selectDestinationCountry(ui.item.selectedcountry);
	  });
	  
	  jQuery("#air_Loc_to_m_5").bind( "autocompleteselect", function(event, ui) {
	        jQuery("#hid_air_Loc_to_m_5").val(ui.item.searchvalue);
	        airLocationValidate("#air_Loc_dep_m_5","#air_Loc_to_m_5","#hid_air_Loc_dep_m_5","#hid_air_Loc_to_m_5")
	        //selectDestinationCountry(ui.item.selectedcountry);
	  });
	
	  
	jQuery("#car_Loc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#hid_car_Loc").val(ui.item.searchvalue);
        // set return same as pickup if check box is checked.
        if (jQuery("input[name='_ReturnCar']").is(':checked')) {
        	jQuery("#car_Loc1").val(ui.item.value);
        	jQuery("#hid_car_Loc1").val(ui.item.searchvalue);
        }
    });
	
	jQuery("#car_Loc1").bind( "autocompleteselect", function(event, ui) {
        jQuery("#hid_car_Loc1").val(ui.item.searchvalue);
        //selectDestinationCountry(ui.item.selectedcountry);
    });
	
	
	jQuery("#activity_Loc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#hid_AC_Loc").val(ui.item.searchvalue);
        selectDestinationCountry_A(ui.item.selectedcountry);
    });
	
    jQuery("#autocomplete_A").bind( "autocompleteselect", function(event, ui) {
        jQuery("#A_HotLocHid").val(ui.item.searchvalue);
        selectDestinationCountry(ui.item.selectedcountry);
    });
		
    jQuery("#autocomplete_HA").bind( "autocompleteselect", function(event, ui) {
        jQuery("#HA_HotLocHid").val(ui.item.searchvalue);
        selectDestinationCountry(ui.item.selectedcountry);
    });
		
    jQuery("#autocomplete").bind( "autocompleteselect", function(event, ui) {
        jQuery("#cityLookupHid").val(ui.item.searchvalue);
    });
		
    jQuery("#autocomplete_H").bind( "autocompleteselect", function(event, ui) {
        jQuery("#cityLookupHid").val(ui.item.searchvalue);
    });
		
    jQuery("#autocomplete_A").bind( "autocompleteselect", function(event, ui) {
        jQuery("#cityLookupHid").val(ui.item.searchvalue);
    });
		
    jQuery("#autocomplete_H").bind( "autocompleteselect", function(event, ui) {
        jQuery("#autocomplete_hidden").val(ui.item.searchvalue);
    });
    
    jQuery("#V_DepFrom").bind( "autocompleteselect", function(event, ui) {
        jQuery("#V_DepFromHid").val(ui.item.searchvalue);
        airLocationValidate("#V_DepFrom","#V_RetLoc","#V_DepFromHid","#V_RetLocHid")
    });
    
    jQuery("#V_RetLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#V_RetLocHid").val(ui.item.searchvalue);
    	jQuery("#hid_H_Loc_V").val(getSearchValueForHotelDestinationCity(ui));
        jQuery("#H_Loc_V").val(ui.item.searchvalue.split("|")[0]);
        loadHotelDestinationAutoComplete();
        airLocationValidate("#V_DepFrom","#V_RetLoc","#V_DepFromHid","#V_RetLocHid");
    });
    
    jQuery("#H_Loc_V").bind( "autocompleteselect", function(event, ui) {  
    	jQuery("#hid_H_Loc_V").val(ui.item.searchvalue);
        jQuery("#H_Loc_V").val(ui.item.searchvalue.split("|")[0]);
    });
    
    jQuery("#F_DepFrom").bind( "autocompleteselect", function(event, ui) {
        jQuery("#F_DepFromHid").val(ui.item.searchvalue);
    });
    
    jQuery("#F_RetLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#F_RetLocHid").val(ui.item.searchvalue);
    });
    
    jQuery("#depLocNameNew").bind( "autocompleteselect", function(event, ui) {
        jQuery("#depLocNameNewHid").val(ui.item.searchvalue);
    });
    
    jQuery("#arrLocNameNew").bind( "autocompleteselect", function(event, ui) {
        jQuery("#arrLocNameNewHid").val(ui.item.searchvalue);
    });
    
    jQuery("#FH_DepFrom").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FH_DepFromHid").val(ui.item.searchvalue);
    });
    
    jQuery("#FH_RetLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FH_RetLocHid").val(ui.item.searchvalue);
    });
    
    jQuery("#FC_DepFrom").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FC_DepFromHid").val(ui.item.searchvalue);
    });
    
    jQuery("#FC_RetLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FC_RetLocHid").val(ui.item.searchvalue);
    });
    
    jQuery("#FHC_DepFrom").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FHC_DepFromHid").val(ui.item.searchvalue);
    });
    
    jQuery("#FHC_RetLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FHC_RetLocHid").val(ui.item.searchvalue);
    });
    
    jQuery("#FHA_DepFrom").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FHA_DepFromHid").val(ui.item.searchvalue);
    });
    
    jQuery("#FHA_RetLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FHA_RetLocHid").val(ui.item.searchvalue);
    });
    
    jQuery("#cityLookup").bind( "autocompleteselect", function(event, ui) {
        jQuery("#cityLookupHid").val(ui.item.searchvalue);
    });
    
    jQuery("#autocomplete_HCA").bind( "autocompleteselect", function(event, ui) {
        jQuery("#HCA_HotLocHid").val(ui.item.searchvalue);
    });
    jQuery("#C_PickUpLoc").bind( "autocompleteselect", function(event, ui) {
    	jQuery("#C_PickUpLocHid").val(ui.item.searchvalue);
    });
    
    jQuery("#C_ReturnLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#C_ReturnLocHid").val(ui.item.searchvalue);
    });
    jQuery("#CA_PickUpLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#CA_PickUpLocHid").val(ui.item.searchvalue);
    });
    
    jQuery("#CA_ReturnLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#CA_ReturnLocHid").val(ui.item.searchvalue);
    });
    jQuery("#FCA_DepFrom").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FCA_DepFromHid").val(ui.item.searchvalue);
    });
    jQuery("#FCA_RetLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FCA_RetLocHid").val(ui.item.searchvalue);
    });
    jQuery("#FHCA_DepFrom").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FHCA_DepFromHid").val(ui.item.searchvalue);
    });
    
    jQuery("#FHCA_RetLoc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#FHCA_RetLocHid").val(ui.item.searchvalue);
    });
    jQuery("#pickupLocNameNew").bind( "autocompleteselect", function(event, ui) {
        jQuery("#pickupLocNameNewHid").val(ui.item.searchvalue);
    });
    
    jQuery("#retupLocNameNew").bind( "autocompleteselect", function(event, ui) {
        jQuery("#retupLocNameNewHid").val(ui.item.searchvalue);
    });
    
    
    /* For transfers*/
    
	jQuery("#pickUpCity_H_Loc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#hid_pickUpCity_H_Loc").val(ui.item.searchvalue);
        selectDestinationCountry(ui.item.selectedcountry);
        /* Setting dropoff city as same as pickup city */
        jQuery("#dropOffCity_H_Loc").val(ui.item.value);
        jQuery("#hid_dropOffCity_H_Loc").val(ui.item.searchvalue);
        jQuery("#dropOffCity_H_Loc").attr('disabled', true);
    });
	jQuery("#dropOffCity_H_Loc").bind( "autocompleteselect", function(event, ui) {
		jQuery("#hid_dropOffCity_H_Loc").val(ui.item.searchvalue);
		selectDestinationCountry(ui.item.selectedcountry);
	});
	
	jQuery("#pickUpCity_A_Loc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#hid_pickUpCity_A_Loc").val(ui.item.searchvalue);
        selectDestinationCountry(ui.item.selectedcountry);
        /* Setting dropoff city as same as pickup city */
        jQuery("#dropOffCity_A_Loc").val(ui.item.value);
        jQuery("#hid_dropOffCity_A_Loc").val(ui.item.searchvalue);
        jQuery("#dropOffCity_A_Loc").attr('disabled', true);
    });
	
	jQuery("#dropOffCity_A_Loc").bind( "autocompleteselect", function(event, ui) {
        jQuery("#hid_dropOffCity_A_Loc").val(ui.item.searchvalue);
        selectDestinationCountry(ui.item.selectedcountry);
    });
	
		
});


function selectDestinationCountry(country){
	if($('.destination_country_H').css('display') == 'none' || $('.destination_country_HS').css('display') == 'none' )
		return;
	try{
	for(i=0; i<document.getElementById("destinationcountry").options.length-1; i++){
		if(document.getElementById("destinationcountry").options[i].text==country){
			document.getElementById("destinationcountry").selectedIndex = i;
		}
	}
	}catch(e){
	}
}
function selectDestinationCountry_A(country){
	if($('.destination_country_A').css('display') == 'none' || $('.destination_country_AS').css('display') == 'none' )
		return;
	try{
	for(i=0; i<document.getElementById("destinationcountry_A").options.length-1; i++){
		if(document.getElementById("destinationcountry_A").options[i].text==country){
			document.getElementById("destinationcountry_A").selectedIndex = i;
		}
	}
	}catch(e){
	}
}




function callbackCities(jsonString) {
	//console.log(jsonString);
	jsonDataList = jsonString;
}
var cache = {};

function loadFpkgCountryAutocomplete(){
	
//	console.log(1);
//	console.log(locationDataURL);
	var search_type = searchTypeSelector("H");
	jQuery( "#package_Ex_des" ).autocomplete({
	    minLength: 2,
	    source: function(request, response) {
	    	//loadCacheData(request.term);
					
	        jQuery.ajax({
	            url: locationDataURL,
	            dataType: "script",
	            xhr: function () {
	            	//console.log(3)
	                if (jQuery.browser.msie && jQuery.browser.msie){
	                    return new ActiveXObject("Microsoft.XMLHTTP");
	                } else {
	                    return new XMLHttpRequest();
	                }
	            },
	            data: {
	            	partnerType:$('#partnerType').val(),
                	productType:$('#engLoaded').val(),
                	partnerId:$('#partnerId').val(),
	                term: request.term,
	                search_type: search_type,
					bookingEngine: "Y",
					search_country: getDestinationCountry(),
					callBack: "callbackCities"
	                
	            },
	            success: function() {
	            	//console.log(2)
	                var returnData =jQuery.map(jsonDataList.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
	                    var text = createLabel(item, 'city');
	                    if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
	                        return {
	                            label: text.replace(new RegExp(
	                                "(?![^&;]+;)(?!<[^<>]*)(" +
	                                request.term +
	                                ")(?![^<>]*>)(?![^&;]+;)", "gi"
	                                ), "$1"),
	                            value: item.cna,
	                            searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid,
	                            selectedcountry:item.cnm
	                        }
	                    }
	                }); 
	            	//addCacheData(request.term, returnData);
	                response(returnData);

	            }
	        });
	    }
	});
	jQuery("#package_Ex_des").bind( "autocompleteselect", function(event, ui) {
	    jQuery("#hid_package_Ex_des").val(ui.item.searchvalue);
	    //console.log(3)
	    selectDestinationCountry(ui.item.selectedcountry);
	});
	
	/**
	 * Autocomplete for Flights departure location.
	 */
	jQuery("#package_Loc_ori").autocomplete({
	minLength : 2,
	source : function(request, response) {
		loadCacheData(request.term,response);

	    jQuery
	    .ajax( {
	        url : locationDataURL,
	        dataType : "script",
	        xhr: function () {
	            if (jQuery.browser.msie && jQuery.browser.msie){
	                return new ActiveXObject("Microsoft.XMLHTTP");
	            } else {
	                return new XMLHttpRequest();
	            }
	        },
	        data : {
	        	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
	            term : request.term,
	            search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
	            //search_country: getDestinationCountry()
	        },
	        success : function(data) {
	        	try{
	        	var returnData = jQuery.map(
	        		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
	                    function(item) {
	            			var text = createLabel(item, 'airport');                                
	                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
	                            return {
	                                label : text.replace(new RegExp(
	                                        "(?![^&;]+;)(?!<[^<>]*)("
	                                        + request.term
	                                        + ")(?![^<>]*>)(?![^&;]+;)",
	                                        "gi"),
	                                    "$1"),
	                                value : item.cna,
	                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
	                            }
	                        }
	                    });
	            addCacheData(request.term, returnData);
	            response(returnData);
	            
	        			}catch(e){alert(e);}
	        }
	    });
	}
	});

	/**
	 * Autocomplete for Flights return location.
	 */
	jQuery("#package_Loc_des").autocomplete({
	minLength : 2,
	source : function(request, response) {
		loadCacheData(request.term,response);

	    jQuery
	    .ajax( {
	        url : locationDataURL,
	        dataType : "script",
	        xhr: function () {
	            if (jQuery.browser.msie && jQuery.browser.msie){
	                return new ActiveXObject("Microsoft.XMLHTTP");
	            } else {
	                return new XMLHttpRequest();
	            }
	        },
	        data : {
	        	partnerType:$('#partnerType').val(),
            	productType:$('#engLoaded').val(),
            	partnerId:$('#partnerId').val(),
	            term : request.term,
	            search_type : searchTypeSelector('F'),
				callBack: "callbackCities",
				bookingEngine: "Y"
	            //search_country: getDestinationCountry()
	        },
	        success : function(data) {
	        	var returnData = jQuery.map(
	            		jsonDataList.list.sort(sort_by('cna', false, function(a){return a})),
	                    function(item) {
	            			var text = createLabel(item, 'airport');                                
	                        if (matcher(request.term, item.cna) || matcher(request.term, item.apcd)) {
	                            return {
	                                label : text.replace(new RegExp(
	                                        "(?![^&;]+;)(?!<[^<>]*)("
	                                        + request.term
	                                        + ")(?![^<>]*>)(?![^&;]+;)",
	                                        "gi"),
	                                    "$1"),
	                                value : item.cna,
	                                searchvalue : item.cna + "|" + item.apcd + "|" + item.cid + "|" + item.apnm + "|" + item.sid + "|" + item.cnid  + "|" + item.sna + "|" + item.cnm
	                            }
	                        }
	                    });
	            addCacheData(request.term, returnData);
	            response(returnData)

	        }
	    });
	}
	});
	
	
	 jQuery("#package_Loc_ori").bind( "autocompleteselect", function(event, ui) {
			try{
			  //console.log('V>>'  +ui.item.searchvalue);
		    jQuery("#hid_package_Loc_ori").val(ui.item.searchvalue);
		    airLocationValidate("#package_Loc_ori","#package_Loc_des","#hid_package_Loc_ori","#hid_package_Loc_des")
		    //selectDestinationCountry(ui.item.selectedcountry);
			}catch(e){
				alert(e);
			}
		});
		  
		  jQuery("#package_Loc_des").bind( "autocompleteselect", function(event, ui) {
		        jQuery("#hid_package_Loc_des").val(ui.item.searchvalue);
		        airLocationValidate("#package_Loc_ori","#package_Loc_des","#hid_package_Loc_ori","#hid_package_Loc_des")
		        //selectDestinationCountry(ui.item.selectedcountry);
		    });
				
	}


function airLocationValidate(loc1,loc2,hloc1,hloc2){
	if(jQuery(hloc1).val()==jQuery(hloc2).val()){
		
		//jQuery(hloc1).val('');
		jQuery(hloc2).val('');
		
		//jQuery(loc1).val('');
		jQuery(loc2).val('');
		
		jQuery( "#dialogs3" ).dialog({ resizable: false,modal: true });
		
	}
	
	
}
function loadHotelDestinationAutoComplete(){
	
	jQuery( "#H_Loc_V" ).autocomplete({
	    minLength: 2,
	    source: function(request, response) {
	    	//loadCacheData(request.term);
					
	        jQuery.ajax({
	            url: locationDataURL,
	            dataType: "script",
	            xhr: function () {
	                if (jQuery.browser.msie && jQuery.browser.msie){
	                    return new ActiveXObject("Microsoft.XMLHTTP");
	                } else {
	                    return new XMLHttpRequest();
	                }
	            },
	            data: {
	            	partnerType:$('#partnerType').val(),
	            	productType:$('#engLoaded').val(),
	            	partnerId:$('#partnerId').val(),
	                term: request.term,
	                search_type: searchTypeSelector('H'),
					bookingEngine: "Y",
					search_country: $('#hid_H_Loc_V').val().split('|')[5],
					callBack: "callbackCities"
	                
	            },
	            success: function() {
	               
	                var returnData =jQuery.map(jsonDataList.list.sort(sort_by('cna', false, function(a){return a})), function(item) {
	                    var text = createLabel(item, 'city');
	                    if(matcher(request.term, item.cna) || matcher(request.term, item.sbna)){
	                        return {
	                            label: text.replace(new RegExp(
	                                "(?![^&;]+;)(?!<[^<>]*)(" +
	                                request.term +
	                                ")(?![^<>]*>)(?![^&;]+;)", "gi"
	                                ), "$1"),
	                            value: item.cna,
	                            searchvalue:item.cid+"|"+item.cna+"|"+item.sid+"|"+item.cnid+"|"+item.sna+"|"+item.cnm+"|"+item.sbid,
	                            selectedcountry:item.cnm
	                        }
	                    }
	                }); 
	                //addCacheData(request.term, returnData);
	                response(returnData);

	            }
	        });
	    }
	});

	}

	function getSearchValueForHotelDestinationCity(ui){
	    var tempCityStr = ui.item.searchvalue.split("|")[2] + "|" + ui.item.searchvalue.split("|")[0] + "|" 
	        + ui.item.searchvalue.split("|")[4] + "|" + ui.item.searchvalue.split("|")[5] + "|"
	        + ui.item.searchvalue.split("|")[6] + "|" + ui.item.searchvalue.split("|")[7] + "|" + "";
	    return tempCityStr;
	}