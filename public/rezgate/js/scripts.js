// JavaScript Document

var schemaName="ct"
//var subURL="http://demo.secure-reservation.com/"+schemaName+"Reservations/";
var subURL="http://chinatelecomtravel-web.chinatelecomtravel.com/ctReservations/";
var cookieExpMin = 40;
var dateFormatKey = 'dd M yy';

function onewayHide(){
	if(document.forms["form1"].elements["Air_TripType1"].checked){
	//	console.log('Loaging o 1 ');
		document.getElementById("retDateDisplay_date").style.display="none";
		document.getElementById("retDateDisplay_time").style.display="none";
		document.getElementById('trip_type').value="O";
		document.getElementById("flax_container_div").style.display="none";
		document.getElementById('multi_des_01').style.display="none";		// Multi Destination 1     
		document.getElementById('air_Loc_dep_m_2').value="TEST";
		document.getElementById('air_Loc_to_m_2').value="TEST";
		
		document.getElementById('multi_des_02').style.display="none";		// Multi Destination 2
		document.getElementById('air_Loc_dep_m_3').value="TEST";
		document.getElementById('air_Loc_to_m_3').value="TEST";
		
		document.getElementById('multi_des_03').style.display="none";		// Multi Destination 3
		document.getElementById('air_Loc_dep_m_4').value="TEST";
		document.getElementById('air_Loc_to_m_4').value="TEST";	
		
		document.getElementById('multi_des_04').style.display="none";		// Multi Destination 4
		document.getElementById('air_Loc_dep_m_5').value="TEST";
		document.getElementById('air_Loc_to_m_5').value="TEST";		
	
	}else if(document.forms["form1"].elements["Air_TripType3"].checked){
		//console.log('Loaging o 2 ');

		var newCheckOutDate = new Date($('#air_departure').val());
				


		document.getElementById("retDateDisplay_date").style.display="none";
		document.getElementById("retDateDisplay_time").style.display="none";
		document.getElementById('trip_type').value="M";
		document.getElementById("flax_container_div").style.display="none";
		document.getElementById('multi_des_01').style.display="block";		// Multi Destination 1
		document.getElementById('air_Loc_dep_m_2').value="";
		document.getElementById('air_Loc_to_m_2').value="";
		document.getElementById('hid_air_Loc_dep_m_2').value="";
		document.getElementById('hid_air_Loc_to_m_2').value="";

		newCheckOutDate.setTime(newCheckOutDate.getTime() + (24 * 60 * 60 * 1000));
		var month = newCheckOutDate.getMonth() + 1;
		month = ((""+String(month).length ==1) ? ("0"+month) : month);
		document.getElementById('air_departure_2').value=month + "/" + newCheckOutDate.getDate() + "/" + newCheckOutDate.getFullYear();
		
		
		document.getElementById('multi_des_02').style.display="none";		// Multi Destination 2
		document.getElementById('air_Loc_dep_m_3').value="";
		document.getElementById('air_Loc_to_m_3').value="";
		document.getElementById('hid_air_Loc_dep_m_3').value="";
		document.getElementById('hid_air_Loc_to_m_3').value="";
		
		newCheckOutDate.setTime(newCheckOutDate.getTime() + (24 * 60 * 60 * 1000));
		month = newCheckOutDate.getMonth() + 1;
		month = ((""+String(month).length ==1) ? ("0"+month) : month);
		document.getElementById('air_departure_3').value=month + "/" + newCheckOutDate.getDate() + "/" + newCheckOutDate.getFullYear();
		
		document.getElementById('multi_des_03').style.display="none";		// Multi Destination 3
		document.getElementById('air_Loc_dep_m_4').value="";
		document.getElementById('air_Loc_to_m_4').value="";
		document.getElementById('hid_air_Loc_dep_m_4').value="";
		document.getElementById('hid_air_Loc_to_m_4').value="";	

		newCheckOutDate.setTime(newCheckOutDate.getTime() + (24 * 60 * 60 * 1000));
		month = newCheckOutDate.getMonth() + 1;
		month = ((""+String(month).length ==1) ? ("0"+month) : month);
		document.getElementById('air_departure_4').value=month + "/" + newCheckOutDate.getDate() + "/" + newCheckOutDate.getFullYear();
		
		document.getElementById('multi_des_04').style.display="none";		// Multi Destination 4
		document.getElementById('air_Loc_dep_m_5').value="";
		document.getElementById('air_Loc_to_m_5').value="";
		document.getElementById('hid_air_Loc_dep_m_5').value="";
		document.getElementById('hid_air_Loc_to_m_5').value="";		

		newCheckOutDate.setTime(newCheckOutDate.getTime() + (24 * 60 * 60 * 1000));
		month = newCheckOutDate.getMonth() + 1;
		month = ((""+String(month).length ==1) ? ("0"+month) : month);
		document.getElementById('air_departure_5').value=month + "/" + newCheckOutDate.getDate() + "/" + newCheckOutDate.getFullYear();
		
	}else  if(document.forms["form1"].elements["Air_TripType2"] != undefined && document.forms["form1"].elements["Air_TripType2"].checked){
		//console.log('Loaging o 3 ');
		document.getElementById("retDateDisplay_date").style.display="inline-block";
		document.getElementById("retDateDisplay_time").style.display="inline-block";
		document.getElementById('trip_type').value="R";
		document.getElementById("flax_container_div").style.display="block";
		document.getElementById('multi_des_01').style.display="none";		// Multi Destination 1 
		document.getElementById('air_Loc_dep_m_2').value="TEST";
		document.getElementById('air_Loc_to_m_2').value="TEST";
		document.getElementById('hid_air_Loc_dep_m_2').value="TEST";
		document.getElementById('hid_air_Loc_to_m_2').value="TEST";
		
		document.getElementById('multi_des_02').style.display="none";		// Multi Destination 2
		document.getElementById('air_Loc_dep_m_3').value="TEST";
		document.getElementById('air_Loc_to_m_3').value="TEST";
		document.getElementById('hid_air_Loc_dep_m_3').value="TEST";
		document.getElementById('hid_air_Loc_to_m_3').value="TEST";
		
		document.getElementById('multi_des_03').style.display="none";		// Multi Destination 3
		document.getElementById('air_Loc_dep_m_4').value="TEST";
		document.getElementById('air_Loc_to_m_4').value="TEST";
		document.getElementById('hid_air_Loc_dep_m_4').value="TEST";
		document.getElementById('hid_air_Loc_to_m_4').value="TEST";
		
		document.getElementById('multi_des_04').style.display="none";		// Multi Destination 4
		document.getElementById('air_Loc_dep_m_5').value="TEST";
		document.getElementById('air_Loc_to_m_5').value="TEST";
		document.getElementById('hid_air_Loc_dep_m_5').value="TEST";
		document.getElementById('hid_air_Loc_to_m_5').value="TEST";	
		
		//console.log('Loaging o 3 >' + document.getElementById('multi_des_03').style.display);
	}
	setTimeout('resizeContainer()',200);
	//alert(document.getElementById('trip_type').value)
	
}

function onewayHide_V(){
	if(document.forms["form1"].elements["Air_TripType1_V"].checked){
		document.getElementById("retDateDisplay_V").style.display="none";
		
		document.getElementById('trip_type_v').value="O";
	} else if(document.forms["form1"].elements["Air_TripType2_V"].checked){
		document.getElementById("retDateDisplay_V").style.display="block"
		document.getElementById('trip_type_v').value="R";
	}
}

function returnLocHide(){
	if(document.forms["form1"].elements["_ReturnCar"].checked){
		document.getElementById("retLocDisplay").style.display="none";
		document.getElementById("car_Loc1").style.display="none";
		document.getElementById("car_Loc1").setAttribute('validate', 'formcar');
		document.getElementById("car_Loc1").value = document.getElementById("car_Loc").value;	// return location same as pickup location
		document.getElementById("hid_car_Loc1").value = document.getElementById("hid_car_Loc").value;
		}else if(document.forms["form1"].elements["_ReturnCar"]){
		document.getElementById("retLocDisplay").style.display="block";
		document.getElementById("car_Loc1").style.display="block";
	}
}

function checkFlex(stat){
	if(stat=="Yes"){
		document.getElementById('Air_DepTime_a').style.display="none";
		document.getElementById('dep_flexx').style.display="block";
		document.getElementById('Air_RetTime_a').style.display="none";
		document.getElementById('ret_flexx').style.display="block";
		document.getElementById('dep_time_txt').innerHTML="Days";
		document.getElementById('ret_time_txt').innerHTML="Days";
		document.ResPkgSearchForm.isFlex.value="Y";
	}else{
		document.getElementById('Air_DepTime_a').style.display="block";
		document.getElementById('dep_flexx').style.display="none";
		document.getElementById('Air_RetTime_a').style.display="block";
		document.getElementById('ret_flexx').style.display="none";
		document.getElementById('ret_time_txt').innerHTML="Return Time";
		document.getElementById('dep_time_txt').innerHTML="Departing Time";
		document.ResPkgSearchForm.isFlex.value="N";
	}
}

function location_show(id){	
	$("#pickUpCity_H_Loc").removeAttr('validate');
	$("#pickUpCity_A_Loc").removeAttr('validate');
	
	 
	
	
	if (id=="hotel_location_drop"){
			
			
		document.getElementById("pickUpCity_A_Loc").setAttribute('validate', 'formTBK');
		document.getElementById("pickUpCity_H_Loc").setAttribute('validate', 'formT');
		document.getElementById("hid_pickUpCity_H_Loc").value='';
		document.getElementById("hid_pickUpCity_A_Loc").value='TEST';
		document.getElementById("pickUpCity_H_Loc").value='';
		document.getElementById("pickUpCity_A_Loc").value='TEST';
		//hid_pickUpCity_A_Loc
		//hid_pickUpCity_H_Loc
		
		document.getElementById('airport_drop').style.display="none";
		document.getElementById('hotel_drop').style.display="block";
		
		}else{	
		document.getElementById("pickUpCity_A_Loc").setAttribute('validate', 'formT');
		document.getElementById("pickUpCity_H_Loc").setAttribute('validate', 'formTBK');
  		
  		document.getElementById("hid_pickUpCity_A_Loc").value='';
		document.getElementById("hid_pickUpCity_H_Loc").value='TEST';
		
		document.getElementById("pickUpCity_A_Loc").value='';
		document.getElementById("pickUpCity_H_Loc").value='TEST';
		
		document.getElementById('hotel_drop').style.display="none";
		document.getElementById('airport_drop').style.display="block";
		
		}
	 
	
	
	}

function flightHide(){
	if(document.getElementById("Package_Type2").checked){	// Including Flight
		document.getElementById("Include_Flight").style.display="block";
		document.getElementById("Exclude_Flight").style.display="none";
		document.getElementById("package_Ex_des").setAttribute('validate', 'formpkg');

		// stop validation of hidden inputs in IE8.
		document.getElementById("package_Ex_des").value = 'TEST';
		document.getElementById("hid_package_Ex_des").value = 'TEST';
		document.getElementById("package_Loc_des").value = '';
		document.getElementById("package_Loc_ori").value = '';
		document.getElementById("hid_package_Loc_ori").value = '';
		document.getElementById("hid_package_Loc_des").value = '';
		
		document.getElementById("package_Loc_ori").setAttribute('validate', 'formP');
		document.getElementById("package_Loc_des").setAttribute('validate', 'formP');
		
		loadFpkgCountryAutocomplete();
		
	}else  if(document.getElementById("Package_Type1").checked){	// Excluding Flight
		document.getElementById("Include_Flight").style.display="none";
		document.getElementById("Exclude_Flight").style.display="block";
		document.getElementById("package_Ex_des").setAttribute('validate', 'formP');
		document.getElementById("package_Loc_des").setAttribute('validate', 'formpkg');
		document.getElementById("package_Loc_ori").setAttribute('validate', 'formpkg');

		// stop validation of hidden inputs in IE8.
		document.getElementById("package_Loc_des").value = 'TEST';
		document.getElementById("package_Loc_ori").value = 'TEST';
		document.getElementById("hid_package_Loc_ori").value = 'TEST';
		document.getElementById("hid_package_Loc_des").value = 'TEST';
		document.getElementById("package_Ex_des").value = '';
		document.getElementById("hid_package_Ex_des").value = '';
		
		loadFpkgCountryAutocomplete();
	}
	
}
//------------------------------------dhammika added---------------------------------

function setEngType(e){
	$('#engLoaded').val(e);
	roomocc(e,$("#norooms_"+e).val());
	fillForm(e);
	if(internalBEC){
		$('#loading_window').hide();
		setTimeout('hideMask()',200);
	}
	setTimeout('resizeContainer()',10);
	//setTimeout('resizeContainer()',100);
	//changeCss( $('#bookingChannel').val())
 	//alert($('#bookingChannel').val())
}


function opts(st,end,sel){
	var retStr="";
	for (var ixpe=st; ixpe<=end; ixpe++){
		if (!isNaN(sel)){
			if (sel==ixpe){
			retStr+="<option value=\""+ixpe+"\" selected=\"selected\">"+ixpe+"</option>\n";
			}else{
			retStr+="<option value=\""+ixpe+"\">"+ixpe+"</option>\n";
			}		
		}else{
			retStr+="<option value=\""+ixpe+"\">"+ixpe+"</option>\n";
		}
	}
	return retStr;
}


function roomocc(e,val,bec){
	if(e.length>1){
		var pkgtype = e.split('_');
		e = pkgtype[1];
	}else{
		e = e;	
	}
	$('#roomCombo'+e).empty();
	$('#roomCombo'+e).append(roomoccstring(e,val,bec));
	
}

function roomoccstring(e,val,bec){
	var occstring = '';
	for(i=0;i<val;i++){
		if(e=="V" || e=="F" ){
		//occstring+="<div class=\"clearfix\"><div class=\"fleft rooms paddingt\"></div><div class=\"fleft rooms paddingt black_head\">Adult</div><div class=\"fleft rooms paddingt black_head\">Children</div><div class=\"fleft rooms paddingt black_head\">Infant</div><div class=\"fleft rooms\">Room "+(i+1)+"</div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occAdults_"+e+"\" class=\"textfmin\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(1,4,1)+"</select></div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occChildren_"+e+"\" class=\"textfmin\" onChange=\"showages('"+e+"',"+(i+1)+",this.value);resizeContainer('"+bec+"');\">\n"+opts(0,4,0)+"</select></div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occInfant_"+e+"\" class=\"textfmin\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(0,4,0)+"</select></div></div><div class=\"clearfix\" id=\""+e+"_room_"+(i+1)+"_ages\"></div>";
		try{
		var lblRoom = "";
		if((e=="V")){
			lblRoom = "<div class=\"option-sub-label\"><br />房间 "+(i+1)+"</div>";
		}

		occstring+="<div class=\"flight-passenger-container\">"
			+lblRoom
			+"<div class=\"flight-passenger-option\"><div><label class=\"flight-passenger-label label-bg-common\">成人 <span class='italic'> (s) </i></label></div>"

			+"<div><select id=\"R"+(i+1)+"occAdults_"+e+"\" name=\"R"+(i+1)+"occAdults_"+e+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer("+bec+");setInfant(this,'R1occInfant_"+e+"');\">\n"+opts(1,9,1)+"</select></div>"
			+"</div>"
			+"<div class=\"flight-passenger-option\"><div><label class=\"flight-passenger-label label-bg-common\">儿童<span class='italic'></span></label></div>"
			+"<div><select id=\"R"+(i+1)+"occChildren_"+e+"\" name=\"R"+(i+1)+"occChildren_"+e+"\" class=\"flight-passenger-select\" onChange=\"showages('"+e+"',"+(i+1)+",this.value);resizeContainer("+bec+");\">\n"+opts(0,4,0)+"</select></div>"
			+"</div>"
			+"<div class=\"flight-passenger-option\"><div><label class=\"flight-passenger-label label-bg-common\">婴儿<span class='italic'>（0-23个月）</span></label></div>"
			+"<div><select id=\"R"+(i+1)+"occInfant_"+e+"\" name=\"R"+(i+1)+"occInfant_"+e+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(0,1,0)+"</select></div></div><ul class=\"flight-child-container\" id=\""+e+"_room_"+(i+1)+"_ages\"></div>"
			+"</ul>";
		
		}catch(e){alert(e);}
		}else if(e=="H" || e=="T"){
		//occstring+="<div class=\"clearfix\"><div class=\"fleft rooms paddingt\"></div><div class=\"fleft rooms paddingt black_head\">Adult(s)</div><div class=\"fleft rooms paddingt black_head\">Children</div><div class=\"fleft rooms paddingt\">&nbsp;</div><div class=\"fleft rooms\">Room "+(i+1)+"</div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occAdults_"+e+"\" class=\"textfmin\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(1,4,1)+"</select></div><div class=\"fleft rooms\"><select id=\"R"+(i+1)+"occChildren_"+e+"\" class=\"textfmin\" onChange=\"showages('"+e+"',"+(i+1)+",this.value);resizeContainer('"+bec+"');\">\n"+opts(0,4,0)+"</select></div><div class=\"fleft rooms\">&nbsp;</div></div><div class=\"clearfix\" id=\""+e+"_room_"+(i+1)+"_ages\"></div>";
		occstring+="<div class=\"hotel-passenger-block\"><ul>" +
				"<li class=\"hotel-passenger-label-text hotel-room-count\">房间 "+(i+1)+"</li>" +
				"<li><div><label class=\"hotel-passenger-label option-sub-label\">成人 </label></div><div><select id=\"R"+(i+1)+"occAdults_"+e+"\" class=\"hotel-passenger-select\" onChange=\"resizeContainer("+bec+");\">\n"+opts(1,9,1)+"</select></div></li>" +
				"<li><div><label class=\"hotel-passenger-label option-sub-label\"> 儿童</label></div><div><select id=\"R"+(i+1)+"occChildren_"+e+"\" class=\"hotel-passenger-select\" onChange=\"showages('"+e+"',"+(i+1)+",this.value);resizeContainer("+bec+");\">\n"+opts(0,4,0)+"</select></div></li>" +
				"</ul>" +
				"<ul class=\"hotel-age-field\"><li id=\""+e+"_room_"+(i+1)+"_ages\"></li>" +
				"</ul></div>"; 
		}
		
		
	}
	// for activity, adult count drop down id should be "R1occAdults_A". So can't use the value (i + 1) from the above loop as i will be greater than 0
		if(e=="A"){
	//occstring+="<div class=\"clearfix\"><div class=\"fleft rooms paddingt black_head\">Adult</div><div class=\"fleft rooms paddingt black_head\">Children</div><div class=\"fleft rooms paddingt\">&nbsp;</div><div class=\"clearfix fleft rooms\"><select id=\"R1occAdults_"+e+"\" class=\"textfmin\" onChange=\"resizeContainer('"+bec+"');\">\n"+opts(1,4,1)+"</select></div><div class=\"fleft rooms\"><select id=\"R1occChildren_"+e+"\" class=\"textfmin\" onChange=\"showages('"+e+"',"+(1)+",this.value);resizeContainer('"+bec+"');\">\n"+opts(0,4,0)+"</select></div><div class=\"fleft rooms\">&nbsp;</div></div><div class=\"clearfix\" id=\""+e+"_room_"+(1)+"_ages\"></div>";
	occstring+="" +
			"<ul class=\"activity-passenger-count\">" +
				"<li>" +
					"<div>" +
						"<label class=\"activity-passenger-label label-bg-common\">成人<span class='italic'>(18+)</span></label>" +
					"</div>" +
					"<div>" +
						"<select id=\"R1occAdults_"+e+"\" class=\"user-options-select\" onChange=\"resizeContainer("+bec+");\">\n"+opts(1,9,1)+"</select>" +
					"</div>" +
				"</li>" +				
				"<li>" +
					"<div>" +
						"<label class=\"activity-passenger-label label-bg-common\">儿童<span class='italic'></span></label>" +
					"</div>" +
					"<div>" +
						"<select id=\"R1occChildren_"+e+"\" class=\"user-options-select\" onChange=\"showages('"+e+"',"+(1)+",this.value);resizeContainer("+bec+");\">\n"+opts(0,4,0)+"</select>" +
					"</div>" +
				"</li>" +
			"</ul>" +
			"<div id=\""+e+"_room_"+(1)+"_ages\"></div>"; 
	}
	return occstring;
}
function setInfant(obj,element){
	
	$("#"+element).html(opts(0,$(obj).val(),0));
	
}

function showages(pkgtype,roomno,val){
	$("#"+pkgtype+"_room_"+roomno+"_ages").empty();
	$("#"+pkgtype+"_room_"+roomno+"_ages").append(showagesstring(pkgtype,roomno,val));
}
	
function showagesstring(pkgtype,roomno,val){
	var ages_string = '';
	if(val > 0) ages_string="<li class=\"flight-child-label\"><span class=\"hotel-passenger-label-text\">小孩的年龄</span></li>";
	//var ages_string1 = '';
	//var ages_string2 = '';
	ages_string +="<li class='flight-child-age'>";
	for(x=0;x<val;x++){
		
		if(pkgtype == "F" || pkgtype == "V"){
		ages_string += "<div><select id=\""+pkgtype+"_R"+roomno+"childage_"+(x+1)+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer();\">\n"+opts(2,11,1)+"</select></div>";
		}else{
		ages_string += "<div><select id=\""+pkgtype+"_R"+roomno+"childage_"+(x+1)+"\" class=\"flight-passenger-select\" onChange=\"resizeContainer();\">\n"+opts(1,11,1)+"</select></div>";
		}	
	}
	ages_string +="</li>";
	
	//for(x=0;x<val;x++){
	//ages_string2 += "<div class=\"fleft rooms\"><select id=\""+pkgtype+"_R"+roomno+"childage_"+(x+1)+"\" class=\"textfmin\" onChange=\"resizeContainer();\">\n"+opts(1,19,1)+"</select></div>";
	//ages_string2 += "";
	//}
	//ages_string = "<div class=\"clearfix\">"+ages_string1+"</div><div class=\"clearfix\">"+ages_string2+"</div>";
	//ages_string = ""+ages_string1+""+ages_string2+"</div>";
	return ages_string;
}


function setSelRoomOcc(e){
	var tempOcc = '';
	for(i=0;i<$("#norooms_"+e).val();i++){
		tempOcc += $("#R"+(i+1)+"occAdults_"+e).val()+"|"+$("#R"+(i+1)+"occChildren_"+e).val()+"|";
		if($("#R"+(i+1)+"occChildren_"+e).val()>0){
			var temp = '';
			for(j=0;j<$("#R"+(i+1)+"occChildren_"+e).val();j++){
				temp += $("#"+e+"_R"+(i+1)+"childage_"+(j+1)).val();
				if((j+1)<$("#R"+(i+1)+"occChildren_"+e).val()){ temp += ",";}
			}
			tempOcc = tempOcc + temp+"|%|%|";
		}else{
			tempOcc += "-|%|%|";
		}
		if($("#R"+(i+1)+"occInfant_"+e).val()>0){
			tempOcc += $("#R"+(i+1)+"occInfant_"+e).val()+"@";
		}else{
			tempOcc += "-@";
		}
	}
	//console.log(tempOcc)
	return tempOcc;
}


function setSelRoomOccForFlight(){		
	
	var tempOcc = '';		
	tempOcc += $('#numberOfAdults').val()+"|"+$('#numberOfChilds').val()+"|";
	if($('#numberOfChilds').val()>0){
		var temp = '';
		for(j=0;j<$('#numberOfChilds').val();j++){
			temp += "1";
			if((j+1)<$('#numberOfChilds').val()){ temp += ",";}
		}
		tempOcc = tempOcc + temp+"|%|%|";
	}else{
		tempOcc += "-|%|%|";
	}
	if($('#numberOfInfants').val()>0){
		tempOcc += $('#numberOfInfants').val()+"@";
	}else{
		tempOcc += "-@";
	}	
	return tempOcc;
}


function setinfantcount(e){
	var tempcount = 0;
	for(i=0;i<$("#norooms_"+e).val();i++){
		tempcount += parseInt($("#R"+(i+1)+"occInfant_"+e).val());
	}
	return tempcount;
}

function setchildcount(e){
	var tempcount = 0;
	for(i=0;i<$("#norooms_"+e).val();i++){
		tempcount += parseInt($("#R"+(i+1)+"occChildren_"+e).val());
	}
	return tempcount;
}

function setadultcount(e){
	var tempcount = 0;
	for(i=0;i<$("#norooms_"+e).val();i++){
		tempcount += parseInt($("#R"+(i+1)+"occAdults_"+e).val());
	}
	return tempcount;
}

function search(ex){
	
	try{
		window.parent.initForm();
	}catch(e){
		//alert(e)
	}
	var v = false;
	try{
		v = window.parent.searchValidate(); //To validate partner type
	}catch(e){
		//alert(e)
	}
	if(!v){
		defaultDataWithRegionAndCountry(ex)
		//$("#pkgType").val(ex);
		//eval("LoadData_"+ex+"()");
		//submitData();
	}
}

function Processing(){
	$('#rez-preloader',parent.document).fadeIn();
}
var internalBEC = false;
function doWJTSearch(form){
	 //alert(123)
	var data = convertJson(form,'BEC_HOTEL_WEB_AGAIN'==form["place"].value);
	var actionURL ="";
	 //alert($('#transectionId').val());
	IWC(new IWCParams(form["place"].value,"RESULT","SEARCH","",data,$('#transectionId').val(),0)); 
	
}

function submitData(){
	Processing();	
	if(internalBEC){
		doWJTSearch(document.forms["ResPkgSearchForm"]);
	}else{
		document.forms["ResPkgSearchForm"].target = "_parent";
		document.forms["ResPkgSearchForm"].submit();
	}
}
 

function LoadData_V(){
	with(document.form1){
		var seatClass = "";
		if ("Economy" == document.forms["form1"].elements["Air_FlightClass"].options[document.forms["form1"].elements["Air_FlightClass"].selectedIndex].value) {
			seatClass = "Economy";
		} else if ("Business" == document.forms["form1"].elements["Air_FlightClass"].options[document.forms["form1"].elements["Air_FlightClass"].selectedIndex].value) {
			seatClass = "Business";
		} else if ("First" == document.forms["form1"].elements["Air_FlightClass"].options[document.forms["form1"].elements["Air_FlightClass"].selectedIndex].value) {
			seatClass = "First";
		}
		var stateCode = "";
		if(V_RetLocHid.value.split('|')[4]=="-" || V_RetLocHid.value.split('|')[4]==""){
			stateCode = ("0");
		}else{
			stateCode = (V_RetLocHid.value.split('|')[4]);
	    }
		
		var inDate = new Date(Date.parse(vac_departure.value));
		var outDate = new Date(Date.parse(vac_arrival.value));
		var vnights = (outDate - inDate)/(1000*60*60*24);
		
		$('#checkInDate').val(vac_departure.value);
		$('#checkOutDate').val(vac_arrival.value);
		$('#checkInTime').val(Air_DepTime.value); 
		$('#checkOutTime').val(Air_RetTime.value);
		$('#cityCode').val(hid_H_Loc_V.value);
		$('#cityName').val(hid_H_Loc_V.value.split('|')[1]);
		$('#countryCode').val(V_RetLocHid.value.split('|')[5] );
		$('#countryName').val(V_RetLocHid.value.split('|')[5]);
		$('#stateCode').val(stateCode);
		$('#startingLocationName').val(V_DepFromHid.value.split('|')[0]);
		$('#startingLocationCode').val(V_DepFromHid.value);
		$('#startingCountryCode').val(V_DepFromHid.value.split('|')[5]);
		$('#endingCountryCode').val("0");
		$('#endingLocationName').val(V_RetLocHid.value.split('|')[0]);
		$('#endingLocationCode').val(V_RetLocHid.value);
		$('#numberOfNights').val(vnights);
		$('#numberOfRooms').val($('#norooms_V').val());
		$('#numberOfAdults').val(setadultcount('V'));
		$('#numberOfChilds').val(setchildcount('V'));
		$('#numberOfInfants').val(setinfantcount('V'));
		$('#numberOfSeniors').val("0");
		$('#airLine').val(Air_line_V.value);
		$('#userPassword').val("0");
		$('#forwardURL').val("0");
		$('#vacationPkg').val("Y");
		$('#cacheKey').val("0");
		$('#sessionName').val("0");
		$('#isbackOfficePartnerLink').val("0");
		$('#enabledPublicDCLogin').val("0");
		$('#enableConsumerRegion').val("0");
		$('#bookType').val("0");
		$('#consumerCountryId').val(V_Country.value);
		$('#consumerRegionId').val(V_Country.value);
		$('#languageCode').val("0");
		$('#consumerCurrencyCode').val(V_consumerCurrencyCode.value );
		$('#guestList').val(setSelRoomOcc('V'));
		$('#vacationpkg').val("Y");
		$('#seatClass').val(seatClass);
		$('#tripType').val(trip_type_v.value);
		$('#discountCouponNo').val(discountCoupon_No_V.value);
		 
		$('#hotelStarId').val(star_rating_V.value);
		$('#hotelTypeId').val(hType_v.value);
		$('#isFlexSearch').val((isFlexSearch_V.checked?'Y':'N'));
		
		if(V_DepFromHid.value.split('|')[0]!=V_DepFrom.value){
			$('#V_DepFromHid').val('');
			return validate('form');
		}else if(V_RetLocHid.value.split('|')[0]!=V_RetLoc.value ){
			$('#V_RetLocHid').val('');
			return validate('form');
		}

	
	document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//$('#actionPath').val();
	//document.forms["ResPkgSearchForm"].target = $('#targetField').val();
	//Processing();
	 
	}
	
}

	
	

function LoadData_H(){
	//alert(1)
	with(document.form1){
		
		var stateCode = "";
		if(hid_H_Loc.value.split('|')[2]=="-" || hid_H_Loc.value.split('|')[2]==""){
			stateCode = ("0");
		}else{
			stateCode = (hid_H_Loc.value.split('|')[2]);
	    }
	    
		$('#checkInDate').val(ho_departure.value);
		$('#checkOutDate').val(ho_arrival.value);
		$('#cityCode').val(hid_H_Loc.value);
		$('#cityName').val(hid_H_Loc.value.split('|')[1]);
		$('#countryCode').val(hid_H_Loc.value.split('|')[3] );
		$('#countryName').val(hid_H_Loc.value.split('|')[5]);
		$('#stateCode').val(stateCode);
		$('#numberOfNights').val(H_nights.value );
		$('#numberOfRooms').val($('#norooms_H').val());
		$('#numberOfAdults').val(setadultcount('H'));
		$('#numberOfChilds').val(setchildcount('H'));
		$('#numberOfInfants').val(setinfantcount('H'));
		$('#numberOfSeniors').val("0");
		try{$('#destinationCountry').val(destinationcountry?destinationcountry.value:"");}catch(e){}
		$('#forwardURL').val("0");
		$('#cacheKey').val("0");
		//$('#sellingCurrency').val("USD");
		$('#sessionName').val("0");
		//$('#retrieveExistingBookings').val(retrieveExistingBookings.value);
		$('#isbackOfficePartnerLink').val("0");
		$('#enabledPublicDCLogin').val("0");
		$('#enableConsumerRegion').val("0");
		$('#bookType').val("0");
		$('#consumerCountryId').val(H_Country.value);
		$('#consumerRegionId').val(H_Country.value);
		$('#languageCode').val("en");
		$('#consumerCurrencyCode').val(H_consumerCurrencyCode.value );
		$('#guestList').val(setSelRoomOcc('H'));
		$('#vacationpkg').val("N");
		$('#tripType').val("R");
		
		$('#starRating').val(star_rating_H.value);
		$('#hotelType').val(hType_h.value);
		$('#hotelName').val(H_name.value);$('#selectedHotelRideCode').val(H_ridecode.value); 
		
		
		$('#sortHotelBy').val('hotelRank,minimumRate');
		$('#hotelStarId').val(star_rating_H.value);
		$('#starRating_Hotels').val(star_rating_H.value);
		$('#hotelTypeId').val(hType_h.value);	// there are two hType_v objects, second one is the correct
		$('#hotelName').val(H_name.value);$('#selectedHotelRideCode').val(H_ridecode.value);
		$('#priceLevelFrom').val(priceLevelFrom_H.value);
		$('#priceLevelTo').val(priceLevelTo_H.value);
		$('#availableHotels').val((availableHotels_H.checked?'on':'off'));
		$('#onRequestHotels').val((onRequestHotels_H.checked?'on':'off'));
		$('#discountCouponNo').val(discountCoupon_No_H.value);

		if(hid_H_Loc.value.split('|')[1]!=H_Loc.value){
			$('#hid_H_Loc').val('');
			return validate('formH');
		}
		
		document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//$('#actionPath').val();
		//document.forms["ResPkgSearchForm"].target = $('#targetField').val();
		//Processing();
		//document.forms["ResPkgSearchForm"].submit();
		//doWJTSearch(document.forms["ResPkgSearchForm"]);
		

	}
}


function LoadData_F(){
	with(document.form1){
	
		var seatClass = "";
		if ("Economy" == document.forms["form1"].elements["Aira_FlightClass"].options[document.forms["form1"].elements["Aira_FlightClass"].selectedIndex].value) {
			seatClass =("Economy");
		} else if ("Business" == document.forms["form1"].elements["Aira_FlightClass"].options[document.forms["form1"].elements["Aira_FlightClass"].selectedIndex].value) {
			seatClass =("Business");
		} else if ("First" == document.forms["form1"].elements["Aira_FlightClass"].options[document.forms["form1"].elements["Aira_FlightClass"].selectedIndex].value) {
			seatClass = ("First")	;
		}

		/*if(elements["Aira_FlightClass"][0].checked){
			seatClass =("Economy");
		}else if(elements["Aira_FlightClass"][1].checked){
			seatClass =("Business");
		}else if(elements["Aira_FlightClass"][2].checked){
			seatClass = ("FirstClass")	;
		}*/
		
		var stateCode = "";
		if(hid_air_Loc1_a.value.split('|')[4]=="-" || hid_air_Loc1_a.value.split('|')[4]==""){
			stateCode = ("0");
		}else{
			stateCode = (hid_air_Loc1_a.value.split('|')[4]);
	    }
		
		
		$('#nonStopStatus').val(nonstop_flight.checked?'Nonstop':'off');
		
		if(document.forms["form1"].elements["Air_TripType3"].checked){
			 var checkindate ="";
		     checkindate = air_departure.value + (air_departure_2.value!="" ? ' | '+air_departure_2.value : "") + (air_departure_3.value!="" ? ' | '+air_departure_3.value : "") + (air_departure_4.value!="" ? ' | '+air_departure_4.value : "") + (air_departure_5.value!="" ? ' | '+air_departure_5.value : "");
			 $('#checkInDate').val(checkindate);
			 $('#checkOutDate').val("");
		}
		else{
			$('#checkInDate').val(air_departure.value);
			$('#checkOutDate').val(air_arrival.value);
		}
		
		$('#checkInTime').val(Air_DepTime_a.value);
		$('#checkOutTime').val(Air_RetTime_a.value);
		$('#cityCode').val(hid_air_Loc1_a.value.split('|')[2]+"|"+hid_air_Loc1_a.value.split('|')[0]);
		$('#cityName').val(hid_air_Loc1_a.value.split('|')[0]);
		$('#countryCode').val(hid_air_Loc1_a.value.split('|')[5] );
		$('#countryName').val(hid_air_Loc1_a.value.split('|')[5]);
		$('#stateCode').val(stateCode);
		$('#startingLocationName').val(hid_air_Loc_a.value.split('|')[0]);
		$('#startingLocationCode').val(hid_air_Loc_a.value);
		$('#startingCountryCode').val(hid_air_Loc_a.value.split('|')[5]);
		$('#endingCountryCode').val("0");
		$('#endingLocationName').val(hid_air_Loc1_a.value.split('|')[0]);
		$('#endingLocationCode').val(hid_air_Loc1_a.value);
		
		/** multi destination fields*/
		$('#startingFligtLocationTwoName').val(hid_air_Loc_dep_m_2.value.split('|')[0]);
		$('#startingFligtLocationTwoCode').val(hid_air_Loc_dep_m_2.value);
		$('#endingFligtLocationTwoName').val(hid_air_Loc_to_m_2.value.split('|')[0]);
		$('#endingFligtLocationTwoCode').val(hid_air_Loc_to_m_2.value);
		$('#flightCheckInDateTwo').val(air_departure_2.value);
		$('#flightCheckInTimeTwo').val(Air_DepTime_a_2.value);
		
		$('#startingFligtLocationThreeName').val(hid_air_Loc_dep_m_3.value.split('|')[0]);
		$('#startingFligtLocationThreeCode').val(hid_air_Loc_dep_m_3.value);
		$('#endingFligtLocationThreeName').val(hid_air_Loc_to_m_3.value.split('|')[0]);
		$('#endingFligtLocationThreeCode').val(hid_air_Loc_to_m_3.value);
		$('#flightCheckInDateThree').val(air_departure_3.value);
		$('#flightCheckInTimeThree').val(Air_DepTime_a_3.value);
		
		$('#startingFligtLocationFourName').val(hid_air_Loc_dep_m_4.value.split('|')[0]);
		$('#startingFligtLocationFourCode').val(hid_air_Loc_dep_m_4.value);
		$('#endingFligtLocationFourName').val(hid_air_Loc_to_m_4.value.split('|')[0]);
		$('#endingFligtLocationFourCode').val(hid_air_Loc_to_m_4.value);
		$('#flightCheckInDateFour').val(air_departure_4.value);
		$('#flightCheckInTimeFour').val(Air_DepTime_a_4.value);
		
		$('#startingFligtLocationFiveName').val(hid_air_Loc_dep_m_5.value.split('|')[0]);
		$('#startingFligtLocationFiveCode').val(hid_air_Loc_dep_m_5.value);
		$('#endingFligtLocationFiveName').val(hid_air_Loc_to_m_5.value.split('|')[0]);
		$('#endingFligtLocationFiveCode').val(hid_air_Loc_to_m_5.value);
		$('#flightCheckInDateFive').val(air_departure_5.value);
		$('#flightCheckInTimeFive').val(Air_DepTime_a_5.value);
		
		$('#numberOfNights').val(F_nights.value );
		$('#numberOfNights').val(air_nights.value);
		$('#numberOfAdults').val(R1occAdults_F.value);
		$('#numberOfChilds').val(R1occChildren_F.value);
		$('#numberOfInfants').val(R1occInfant_F.value);
		$('#numberOfSeniors').val(0);
		$('#airLine').val(Air_line.value);
		$('#portal').val("0");
		$('#userCode').val("0");
		$('#userName').val("0");
		$('#userPassword').val("0");
		$('#forwardURL').val("0");
		
		$('#vacationPkg').val("N");
		
		$('#isbackOfficePartnerLink').val("0");
		$('#enabledPublicDCLogin').val("0");
		$('#enableConsumerRegion').val("0");
		$('#actionTyp').val("0");
		$('#bookType').val("0");
		$('#consumerCountryId').val(F_Country.value);
		$('#consumerRegionId').val(F_Country.value);
		$('#languageCode').val("en");
		$('#consumerCurrencyCode').val(F_consumerCurrencyCode.value );
		$('#vacationpkg').val("N");
		$('#seatClass').val(seatClass);
		$('#guestList').val(setSelRoomOcc('F'));
		$('#tripType').val(trip_type.value);
		$('#discountCouponNo').val(discountCoupon_No_F.value);
		$('#isFlexSearch').val((isFlexSearch_F.checked?'Y':'N'));
		
		
		if(hid_air_Loc_a.value.split('|')[0]!=air_Loc_a.value){
			$('#hid_air_Loc_a').val('');
			return validate('formF');
		}
		else if(hid_air_Loc1_a.value.split('|')[0]!=air_Loc1_a.value ){
			$('#hid_air_Loc1_a').val('');
			return validate('formF');
		}
		
		document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//$('#actionPath').val();
		//document.forms["ResPkgSearchForm"].target = $('#targetField').val();
		//Processing();
		//document.forms["ResPkgSearchForm"].submit();
		//doWJTSearch(document.forms["ResPkgSearchForm"]);

	}
}



function LoadData_T(){
	
	with(document.form1){
		
		if(hotel_location_drop[0].checked){ // Hotel / Location drop selected
			
			$('#cityCode').val(hid_pickUpCity_H_Loc.value);
			$('#cityName').val(hid_pickUpCity_H_Loc.value.split('|')[1]);
			$('#countryCode').val(hid_pickUpCity_H_Loc.value.split('|')[3]);
			$('#countryName').val(hid_pickUpCity_H_Loc.value.split('|')[5]);
			$('#checkInDate').val(tr_arrival.value);
			$('#checkOutDate').val(tr_arrival.value);
			$('#transferTime').val(tr_arrivalTime.value);
			$('#pickUpCode').val(pickUpLocationType.value); 
			$('#dropOffCode').val("H"); // drop off to Hotel
			$('#dropOffCityName').val(dropOffCity_H_Loc.value);
			$('#dropOffCityCode').val(hid_dropOffCity_H_Loc.value.split('|')[0]);
			/*if(hid_pickUpCity_H_Loc.value.split('|')[1]!=pickUpCity_H_Loc.value){
				$('#hid_pickUpCity_H_Loc').val('');
				return validate('formT');
			}*/
			
		}else{ // Airport / Station drop selected
			$('#cityCode').val(hid_pickUpCity_A_Loc.value.split('|')[0]);
			$('#cityName').val(hid_pickUpCity_A_Loc.value.split('|')[1]);
			$('#countryCode').val(hid_pickUpCity_A_Loc.value.split('|')[3]);
			$('#countryName').val(hid_pickUpCity_A_Loc.value.split('|')[5]);
			$('#checkInDate').val(tr_departure.value);
			$('#checkOutDate').val(tr_departure.value);
			$('#transferTime').val(tr_depTime.value);

			$('#pickUpCode').val(dropOffLocationType.value); // pickup from Hotel
			$('#dropOffCode').val("A"); // drop off to A-Airport/ S-Station/ P-Port
			$('#dropOffCityName').val(dropOffCity_A_Loc.value);
			$('#dropOffCityCode').val(hid_dropOffCity_A_Loc.value.split('|')[0]);
			if(hid_pickUpCity_A_Loc.value.split('|')[1]!=pickUpCity_A_Loc.value){
				$('#hid_pickUpCity_A_Loc').val('');
				return validate('formT');
			}
		}
		
		$('#numberOfNights').val(tr_nights.value );
		$('#numberOfRooms').val($('#norooms_T').val());
		$('#numberOfAdults').val(parseInt($('#tr_cmbNoOfAdults').val()));
		$('#numberOfChilds').val(parseInt($('#tr_cmbNoOfChildren').val()));
		$('#numberOfInfants').val("0");
		$('#numberOfSeniors').val("0");
		$('#vacationPkg').val("N");
		
		$('#sessionName').val("0");
		$('#isbackOfficePartnerLink').val("0");
		$('#enabledPublicDCLogin').val("0");
		$('#enableConsumerRegion').val("0");
		$('#actionTyp').val("0");
		$('#bookType').val("0");
		$('#consumerCountryId').val($('#tr_Country').val());
		$('#consumerRegionId').val($('#tr_Country').val());
		$('#languageCode').val("en");
		$('#consumerCurrencyCode').val(tr_consumerCurrencyCode.value );
		$('#vacationpkg').val("N");
		
		//alert(document.forms["ResPkgSearchForm"].pickUpCode.value);
	
		document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//$('#actionPath').val();
		//document.forms["ResPkgSearchForm"].target = $('#targetField').val();	
		//Processing();
		//document.forms["ResPkgSearchForm"].submit();
		//doWJTSearch(document.forms["ResPkgSearchForm"]);
	
	}
}

function LoadData_A(){
	try {
	with(document.form1){
		
	
		
		$('#checkInDate').val(ac_departure.value);
		$('#checkOutDate').val(ac_arrival.value);
		$('#cityCode').val(hid_AC_Loc.value);
		$('#cityName').val(hid_AC_Loc.value.split('|')[1]);
		$('#countryCode').val(hid_AC_Loc.value.split('|')[3]);
		$('#countryName').val(hid_AC_Loc.value.split('|')[5]);
		$('#numberOfNights').val(AC_nights.value );
		$('#numberOfRooms').val($('#norooms_A').val());
		$('#numberOfAdults').val(setadultcount('A'));
		$('#numberOfChilds').val(setchildcount('A'));
		$('#numberOfInfants').val(setinfantcount('A'));
		$('#childAges').val(setActivityChildAges());
		$('#numberOfSeniors').val("0");
		$('#vacationPkg').val("N");
		$('#guestList').val(setSelRoomOcc('A'));
		$('#sessionName').val("0");
		$('#isbackOfficePartnerLink').val("0");
		$('#enabledPublicDCLogin').val("0");
		$('#enableConsumerRegion').val("0");
		$('#actionTyp').val("0");
		$('#bookType').val("0");
		$('#consumerCountryId').val(AC_Country.value);
		$('#consumerRegionId').val(AC_Country.value);
		$('#languageCode').val("en");
		$('#consumerCurrencyCode').val(AC_consumerCurrencyCode.value );
		$('#vacationpkg').val("N");
		try{$('#destinationCountry').val(destinationcountry_A?destinationcountry_A.value:"");}catch(e){}
		$('#discountCouponNo').val(discountCoupon_No_A.value);
		$('#activityTypeId').val(activityTypeId_a.value );
		
		
		
		if(hid_AC_Loc.value.split('|')[1]!=activity_Loc.value){
			$('#hid_AC_Loc').val('');
			return validate('formC');
				
				}
	
	document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//$('#actionPath').val();
	//document.forms["ResPkgSearchForm"].target = $('#targetField').val();
	//Processing();
	//document.forms["ResPkgSearchForm"].submit();
	//doWJTSearch(document.forms["ResPkgSearchForm"]);
	
	}
	}catch (e) {
		// TODO: handle exception
	}
}
function validateP(){
	if(document.getElementById("Package_Type2").checked){
		if((hid_package_Loc_ori.value.split('|')[0]!=package_Loc_ori.value)||(hid_package_Loc_ori.value.split('|')[0]==undefined)){
			$('#package_Loc_ori').val('');
			$('#hid_package_Loc_ori').val('');
			return validate('formP');
		}
		if((hid_package_Loc_des.value.split('|')[0]!=package_Loc_des.value)||(hid_package_Loc_des.value.split('|')[0]==undefined)){
			$('#package_Loc_des').val('');
			$('#hid_package_Loc_des').val('');
			return validate('formP');
		}
	}if(document.getElementById("Package_Type1").checked){
		package_Ex_des
		hid_package_Ex_des
		if((hid_package_Ex_des.value.split('|')[1]!=package_Ex_des.value)||(hid_package_Ex_des.value.split('|')[1]==undefined)){
			$('#package_Ex_des').val('');
			$('#hid_package_Ex_des').val('');
			return validate('formP');
		}
	}
}


function LoadData_P(){
	with(document.form1){
		
		var stateCode = "";
		$('#numberofdays').val(No_of_Days.value);
		
		if(document.getElementById("Package_Type2").checked){
			$('#includingflight').val("Y");
			$('#startingLocationName').val(hid_package_Loc_ori.value.split('|')[0]);
			$('#startingLocationCode').val(hid_package_Loc_ori.value);
			$('#endingLocationName').val(hid_package_Loc_des.value.split('|')[0]);
			$('#endingLocationCode').val(hid_package_Loc_des.value);
		}
			
		if(document.getElementById("Package_Type1").checked){
			$('#includingflight').val("N");
			$('#cityCode').val(hid_package_Ex_des.value);
			$('#cityName').val(hid_package_Ex_des.value.split('|')[1]);
		}
			
		$('#selectedFixedPackageTypeCode').val(P_Type.value);
		$('#selectedFixedPackageTypeName').val(P_Type.text);
		
		$('#checkInDate').val(Travel_On.value);
		$('#numberOfNights').val(No_of_Days.value);
		$('#stateCode').val(stateCode);
		$('#startingCountryCode').val(hid_package_Loc_ori.value.split('|')[5]);
		$('#endingCountryCode').val("0");
		$('#numberOfRooms').val($('#norooms_V').val());
		$('#vacationPkg').val("N");
		$('#consumerCountryId').val(P_Country.value);
		$('#consumerRegionId').val(P_Country.value);
		$('#consumerCurrencyCode').val(FP_consumerCurrencyCode.value );
		$('#languageCode').val("0");
		$('#vacationpkg').val("N");
		//alert($('#checkInDate').val())
		//alert($('#numberOfNights').val())
		//alert($('#selectedFixedPackageTypeCode').val() )
		
		//alert("numberofdays"+$('#numberofdays').val());
		//alert("endingLocationCode"+$('#endingLocationCode').val());
		//alert("includingflight"+$('#includingflight').val());
		
		
	document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//$('#actionPath').val();
	//document.forms["ResPkgSearchForm"].target = $('#targetField').val();
	//Processing();
	//document.forms["ResPkgSearchForm"].submit();
	//doWJTSearch(document.forms["ResPkgSearchForm"]);
	
	}
}

function LoadData_C(){
	with(document.form1){
		
		
			
		
		var stateCode = "";
		if(hid_car_Loc1.value.split('|')[4]=="-" || hid_car_Loc1.value.split('|')[4]==""){
			stateCode = ("0");
		}else{
			stateCode = (hid_car_Loc1.value.split('|')[4]);
	    }
		
		$('#checkInDate').val(car_departure.value);
		$('#checkOutDate').val(car_arrival.value);
		$('#checkInTime').val(PickTime.value);
		$('#checkOutTime').val(ReturnTime.value);
		//alert(car_departure.value + " ~~~~ " + car_arrival.value)
		//$('#cityCode').val(hid_car_Loc1.value.split('|')[2]);
		//$('#cityName').val(hid_car_Loc1.value.split('|')[0]);
		$('#countryCode').val(hid_car_Loc1.value.split('|')[5] );
		$('#countryName').val(hid_car_Loc1.value.split('|')[5]);
		$('#stateCode').val(stateCode);
		$('#startingLocationName').val(hid_car_Loc.value.split('|')[0]);
		$('#startingLocationCode').val(hid_car_Loc.value);
		$('#startingCountryCode').val("0");
		$('#endingCountryCode').val("0");
		$('#endingLocationName').val(hid_car_Loc1.value.split('|')[0]);
		$('#endingLocationCode').val(hid_car_Loc1.value);
		$('#carType').val(Car_Type.value);
		$('#vacationPkg').val("N");
		$('#isbackOfficePartnerLink').val("0");
		$('#enabledPublicDCLogin').val("0");
		$('#enableConsumerRegion').val("0");
		$('#actionTyp').val("0");
		$('#bookType').val("0");
		$('#consumerCountryId').val(C_Country.value);
		$('#consumerRegionId').val(C_Country.value);
		
		$('#consumerCurrencyCode').val(C_consumerCurrencyCode.value );
		$('#vacationpkg').val("N");
		$('#tripType').val("R");
		$('#discountCouponNo').val(discountCoupon_No_C.value);
		
		if(hid_car_Loc1.value.split('|')[0]!=car_Loc1.value){
			$('#hid_car_Loc1').val('');
			return validate('formC');
		}
		else if(hid_car_Loc.value.split('|')[0]!=car_Loc.value ){
			$('#hid_car_Loc').val('');
			return validate('formC');
				}
		 
		
		document.forms["ResPkgSearchForm"].action= subURL+"Search.do?method=loadWithResults"//$('#actionPath').val();
		//document.forms["ResPkgSearchForm"].target = $('#targetField').val();;
		//Processing();
		//document.forms["ResPkgSearchForm"].submit();
		//doWJTSearch(document.forms["ResPkgSearchForm"]);
		//console.log($('#cityCode').val())

	}
	
	
}


function setActivityChildAges() {
	var childAges = "";
	var childCount = $('#numberOfChilds').val();
	if (childCount > 0) {
		for (var a = 1; a <= childCount; a++) {
			childAges = childAges + $('#A_R1childage_' + a).val() + ","; 
		}
	}
	return childAges;
}

function setRoomOccupancy(pkg,occ,bec){
	
	if("F"==pkg || "A"==pkg){
		var adults = 0 ;
		var children = 0 ;
		var infant = 0 ;
		var childages = "" ;
		var rooms = occ.split("@");

			for(i=0;i<(rooms.length)-1;i++){
				var roomOccu = rooms[i].split('|');
				for(j=0;j<(roomOccu.length)-5;j++){
					adults += parseInt(roomOccu[0]) ;
					children += parseInt(roomOccu[1]) ;
					infant += parseInt(roomOccu[5]) ;
					
					if( parseInt(roomOccu[1]) > 0 ){
						if("F"==pkg){
							var childagesarr = roomOccu[2].split(',');
							for(j=0;j<(childagesarr.length);j++){
								if(childagesarr[j]=="1"){
									if(isNaN(infant)){
										infant =0;
									}
									children--;
									infant++
									childages += childagesarr[j]+"," ;
								}else{
									childages += childagesarr[j]+"," ;
								}
							}
						}else{
							childages += roomOccu[2]+"," ;
							if(parseInt(infant) > 0){
								children++;
								infant--;
								childages += "2," ;
							}
						}
					}
					//console.log(roomOccu[5])
				}
			}
			var i = 0 ;
			$('#R'+(i+1)+'occAdults_'+pkg).val(adults);
			$('#R'+(i+1)+'occChildren_'+pkg).val(children);
			$('#R'+(i+1)+'occInfant_'+pkg).val(infant);	
			
			if(children > 0 && infant > 0){
				showages(pkg,(1),(children+infant));
				var childagesarr = childages.split(',');
				for(j=0;j<(childagesarr.length);j++){
					if(childagesarr[j]=="1"){
						$('#'+pkg+'_R'+(1)+'childage_'+(j+1)).hide();
					}
					$('#'+pkg+'_R'+(1)+'childage_'+(j+1)).val(childagesarr[j]);
				}
			}else if(children > 0){
				showages(pkg,(1),children);
				var childagesarr = childages.split(',');
				for(j=0;j<(childagesarr.length);j++){
					$('#'+pkg+'_R'+(1)+'childage_'+(j+1)).val(childagesarr[j]);
					//$('#F_R'+(1)+'childage_'+(j+1)).val(childagesarr[j]);
				}
			}
	}else{
		var rooms = occ.split("@");
		roomocc(pkg,(rooms.length-1),bec);
		$('#norooms_'+pkg).val(rooms.length-1);
		for(i=0;i<(rooms.length)-1;i++){
			//console.log(rooms[i])
			var roomOccu = rooms[i].split('|');
			for(j=0;j<(roomOccu.length)-5;j++){
				if("H"==pkg || "C"==pkg){
					if(parseInt(roomOccu[5]) > 0 ){
						roomOccu[1] = parseInt(roomOccu[1])+1 ;
						roomOccu[2] = roomOccu[2]+",2";
					}
				}
				$('#R'+(i+1)+'occChildren_'+pkg).val(roomOccu[1]);
				$('#R'+(i+1)+'occAdults_'+pkg).val(roomOccu[0]);
				$('#R'+(i+1)+'occInfant_'+pkg).val(roomOccu[5]);
				showages(pkg,(i+1),roomOccu[1]);
				//console.log(roomOccu[5])
			}
			var childages = roomOccu[2].split(",");
			for(k=0;k<childages.length;k++){
				$('#'+pkg+'_R'+(i+1)+'childage_'+(k+1)).val(childages[k]);
				//console.log(childages[k])
			}
		}
	}
}

function initTabs(id){
	 $("#tabs").tabs({selected:id});
	 
 }
function ShowHide(){
	$(".moreinfo").toggle();
	setTimeout('resizeContainer()',200);
	
}

function showRibbon(arg){
	if(arg){
		 $('#ribbon').show();		
	}else{
		 $('#ribbon').hide();
	}
   
}

$.extend({
	  getUrlVars: function(){
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	      hash = hashes[i].split('=');
	      vars.push(hash[0]);
	      vars[hash[0]] = hash[1];
	    }
	    return vars;
	  },
	  getUrlVar: function(name){
	    return $.getUrlVars()[name];
	  }
	});

function fillForm(eng){
	var hasWjt = false;
	var wjtName = "";
	if( $.getUrlVar('wjt')){
		wjtName =  $.getUrlVar('wjt'); 
		hasWjt = true;
	}
		
	try{ 	
		if(window!=window.parent){
			if(hasWjt){
				eval('window.parent.'+wjtName+'.fillForm("'+eng+'");');
			}else{
				window.parent.fillForm(eng);
			}
		}
	}catch(e){  }

	if(!internalBEC){
		changeCss( $('#bookingChannel').val());
		$('#bec_wrapper_div').show('slow');
	}
}
function resizeContainer(bec){
	try{
		try{
		resizeParent(bec);
		}catch(e){  }
		if(bec_name && bec_name!='' && window.parent.document.getElementById(bec_name)){
			resizeParent(bec_name);
		}
		//setTimeout('resizeParent()',100);
		//window.parent.resizeBecFrame();
	}catch(e){  }
}
function hideHolidays(){ 
	 $('#vLi').hide();
	 $('#pLi').hide();
	 //$('#fLi').css('left','0');
	 //$('#hLi').css('left','67px');
	 //$('#aLi').css('left','134px');
	 //$('#cLi').css('left','201px');
	 //$('#tLi').css('left','268px');
}
function getTabNumber(tab){
	if("V"==tab)
		return 0;
	if("F"==tab)
		return 1;
	if("H"==tab)
		return 2;
	if("A"==tab)
		return 3;
	if("C"==tab)
		return 4;
	if("T"==tab)
		return 5;	
}
function filterTabs(tabs){
	 
	initTabs(getTabNumber(tabs.charAt(0)));
	
	 $('#vLi').hide();
	 $('#fLi').hide();
	 $('#hLi').hide();
	 $('#aLi').hide();
	 $('#cLi').hide();
	 $('#tLi').hide();
	 var w = 0;
	 if(tabs.indexOf("V")>-1){
		$('#vLi').show();
		// $('#vLi').css('left',w);
		// w = w+70;
	 }
	 if(tabs.indexOf("F")>-1){
		$('#fLi').show();
		//$('#fLi').css('left',w);
		//w = w+70;
	 }
	 if(tabs.indexOf("H")>-1){
		$('#hLi').show();
		//$('#hLi').css('left',w);
	 	//w = w+70;
	 }
	 if(tabs.indexOf("A")>-1){
		$('#aLi').show();
		//$('#aLi').css('left',w);
		//w = w+70;
	 }
	 if(tabs.indexOf("C")>-1){
		$('#cLi').show();
		//$('#cLi').css('left',w);
		//w = w+70;
	 }
	 if(tabs.indexOf("T")>-1){
		$('#tLi').show();
		//$('#tLi').css('left',w);
		//w = w+70;
	 }
	 
}

function changeCss(bc){
	var css = "";

	if("WEB"==bc){
		css = 'css/style.css';
	}else if("CC"==bc){
		css = 'css/style_CC.css';
	}
	Sid.css([css],'','head');
	setTimeout('hideMask()',200);

}

function showDest(){
	$('.destination_country_AS').css('display', 'block');
	$('.destination_country_HS').css('display', 'block');
	$('.destination_country_A').css('display', 'block');
	$('.destination_country_H').css('display', 'block');

}

function hideMask(){
	$('#mm').hide(200);
	
}

function changeWidth(form){
	if("A"==form){
//		$('#main_container').css({'width':'200px','background-color':'transparent','border':'none'});
//		$('.left-col').css('padding-left','5px');
//		$('.right-col').css('padding-left','5px');
//		$('.ui-tabs-panel').css('padding-top','0');
//		$('.ui-tabs').css('padding-top','0');
//		$('.main').css({'margin-top':'0','padding-top':'0'});
		
	}else if("CC"==form){
		$('#main_container').css('width','350px');
	}else{
		$('#main_container').css('width','400px');
	}
}

/** With the lookups , 
 * Valications should be done with the hidden fields . 
 * But the validatior did not suppport the hidden field validation, 
 * Therfor clear the value of the lookups if the hiden contains empty.
 * ~Kasun C - 13/09/2011  
 * */  
function resetLookupValues(){
	try{
		if($('#hid_H_Loc').val()=='')
			$('#H_Loc').val('');
	}catch(e){}

	try{
		if($('#hid_AC_Loc').val()=='')
			$('#activity_Loc').val('');
	}catch(e){}

	try{
		if($('#hid_car_Loc').val()=='')
			$('#car_Loc').val('');
		
		if($('#hid_car_Loc1').val()=='')
			$('#car_Loc1').val('');
	}catch(e){}
	
	try{
		if($('#hid_air_Loc_a').val()=='')
			$('#air_Loc_a').val('');
		
		if($('#hid_air_Loc1_a').val()=='')
			$('#air_Loc1_a').val('');
	}catch(e){}
	 
	try{
		if($('#V_DepFromHid').val()=='')
			$('#V_DepFrom').val('');
		
		if($('#V_RetLocHid').val()=='')
			$('#V_RetLoc').val('');
	}catch(e){}
	
	try{
		if($('#hid_pickUpCity_H_Loc').val()=='')
			$('#pickUpCity_H_Loc').val('');
		
		if($('#hid_pickUpCity_A_Loc').val()=='')
			$('#pickUpCity_A_Loc').val('');
	}catch(e){}
}

function resizeParentSize(bec,size) {
	if(bec==null)
		bec = 'bec_container_frame';
	 
	var frame = window.parent.document.getElementById(bec);
	var bodyH = frame.contentWindow.document.body.offsetHeight;
	
	var newbodH = bodyH + 1;
	
	if(bodyH==0)
		setTimeout('resizeParent("'+bec+'")',200);
	if(bec =='bec_container_frame'){ 
		
	if(bodyH < 300){
		if(size > 3){	
			frame.style.height = (bodyH+10) +"px";		
		}else{
			frame.style.height = (bodyH+50) +"px";
		}
	 }else{
	 		frame.style.height = 506 + "px";
	 }	
	
	}
}

function resizeParent(bec) { 
	
	//if('CC'==$('#bookingChannel').val()){
	if(bec==null)
		bec = 'bec_container_frame';
	//alert(bec)
	var frame = window.parent.document.getElementById(bec);
	var bodyH = frame.contentWindow.document.body.offsetHeight ;
	 if(bodyH==0 || bodyH==1)
		setTimeout('resizeParent("'+bec+'")',200);
	 if(bodyH<350)
		 bodyH = 330
	// alert(bodyH)
	if(bec =='bec_container_frame')
		frame.style.height = (bodyH + 10) +"px";
	else
		frame.style.height = (bodyH + 10) +"px";
// }

}
 
//-------------------------- Added by janith -- to load internal hotel names ------------------------
var hotel_list_url = "";

var localHotelList;
function callbackHotels(jsonString) {
	//console.log(jsonString);
	localHotelList = jsonString;
}
var ncache = {};
function fillHotelNames(){
	
   $(document).ready(function(){	
	   
	   /* $("#H_name").autocomplete({
	        minLength: 2,
	        source: function(request, response) {
	        	makehotelListUrl();
		        $.ajax({
			  	  	url: hotel_list_url,
			  	  	dataType: "script",
			  	  	data: {
			  	  		term: request.term,
			  	  		callback:"callbackHotels"
			  	  	},
			  	  	success: function(data){
			  	  	data = localHotelList;
				  	  	response(jQuery.map(data.list.sort(sort_by_hotel('HotelName', false, function(a){return a})), function(item) {
				  	  		var text = createLabel_hotel(item);
			                    
			                if(matcher_hotel(request.term, item.HotelName)){
			                        return {
			                            label: text.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" +request.term +")(?![^<>]*>)(?![^&;]+;)", "gi"), "$1"),
			                            value: item.HotelName,
			                            searchvalue: item.HotelName
			                        }
			                    }
			                }
				  	  	))
			  	  	}
	  	  		});
	        	
	        }
	    }); */
	   
	   /*$("#H_name").autocomplete({
			minLength: 2,
			source: function( request, response ) {
				var term = request.term;
				if(""==$("#hid_H_Loc").val()){
					validate('formH');
					return false;
				}
				var city = $("#hid_H_Loc").val().split("|")[0];
				if ( term in ncache ) {
					response( ncache[ term + city] );
					return;
				}

				lastXhr = $.getJSON( "../../../../../ComponentSupport.do?method=hotelNameLookup&transectionId=xxxxxx&city=" + city , request, function( data, status, xhr ) {
					ncache[ term  + city] = data;
					if ( xhr === lastXhr ) {
						response( data );
					}
				});
			}
		});
	    
	    //autocomplete finish
	    
	    
	    $("#H_name").bind( "autocompleteselect",function(event, ui){
	    	$("#H_ridecode").val(ui.item.rideId);
	    });
	    */
	   
   }); //ready finish
   
	
}



function sort_by_hotel(field, reverse, primer){
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
}

function matcher_hotel(regex, text){
    var filter = new RegExp(
        "(^)(" +
        regex +
        ")(?![^<>]*>)(?![^&;]+;)", "gi"
        ).test(text);
    return filter;
}

function createLabel_hotel(item){
	var label = '';
	if (item.HotelName != ''){
			label = item.HotelName;
	}
	return label;
}

function makehotelListUrl(){
	var serviceHost = $('#serviceHost').val();
	var  serviePortal = $('#serviePortal').val();
	
	var curUrl = window.location + "";
	var urlArr = curUrl.split("/");
	
	hotel_list_url = "http://" + serviceHost + "/content/" + serviePortal + "/hotel_List_s5.js";
	
}
//---------------------- End of  hotel name filter -----------------------------------------

$(document).ready(function(){
	//resizeParent();
	
});


function gt(id,form){
	try{
		return document.getElementById(form).contentWindow.document.getElementById(id);
	}catch(e){
		//alert("id : "+ id + ",form :"+form+ " Error:" + e);
		//throw e;
	}
}
function gtFrame(frame){
	try{
		return document.getElementById(frame).contentWindow;
	}catch(e){
		//alert( " frame :"+frame+ " Error:" + e);
		//throw e;
	}
}

function convertJson(frm,isEscape){
	var elLength =  frm.elements.length;
	var data = {};
    for (i=0; i<elLength; i++){
    	try{
    		var name = frm.elements[i].name;
    		var value =    frm.elements[i].value
    		if(isEscape)
    			data[name] = escape(value);
    		else
    			data[name] = (value);
    	}catch(d){
    		alert(d)
    	}
    }
    return data;
}
function convertQ(frm){
	var elLength =  frm.elements.length;
	var data = "";
    for (i=0; i<elLength; i++){
    	try{
    		var name = frm.elements[i].name;
    		var value =   frm.elements[i].value
    		data+="&"+name+"="+escape(value);
    	}catch(d){}
    }
    return data;
}

$( ".show_filter").unbind( "click" );
$(".show_filter").click(function(){
var objDiv = $(this).parentsUntil('main_holder').find(".bec_container_div")[0];
			if($(this).parentsUntil('main_holder').find(".morefilters").is(':visible')){
				$(this).parentsUntil('main_holder').find(".show_filter").html("高级搜索 &nbsp;<span id='arrow_down' class='arrow_down'>&nbsp;&nbsp;&nbsp;</span>");
				$(this).parentsUntil('main_holder').find("#arrow_up").toggleClass('arrow_up arrow_down');			
				
				$(this).parentsUntil('main_holder').find(".morefilters").hide('fast',function(){
					objDiv.scrollTop = 0;
				})	;
			} else {
				$(this).parentsUntil('main_holder').find(".show_filter").html("隐藏额外的查询条件 &nbsp;<span id='arrow_up' class='arrow_up'>&nbsp;&nbsp;&nbsp;</span>");
				$(this).parentsUntil('main_holder').find(".morefilters").show('fast',function(){
					objDiv.scrollTop = objDiv.scrollHeight
				});	 	
				$(this).parentsUntil('main_holder').find("#arrow_down").toggleClass('arrow_down arrow_up');			
			 }
		setTimeout('resizeContainer()',300);
	});
	
function refilFpackageDates() {
	var d = new Date();
	var yr = d.getFullYear();
	var op = $('#Travel_On')[0];
	op.options.length = 0;
	op.options[op.options.length] = new Option("Any", "-");	// Any option
	for(x = d.getMonth(); x < 12; x++) {	// remaining months of the current year
		op.options[op.options.length] = new Option(getMonthName(x) + " " + yr, (x + 1) + "-" +  yr);
	}
	for (x = 0; x < d.getMonth(); x++) {	// months of the next year
		op.options[op.options.length] = new Option(getMonthName(x) + " " +( yr + 1), (x + 1) + "-" +  (yr + 1));
	}
}

function getMonthName(m){
	switch (m){
	case 0: 
		return "January";
	case 1: 
		return "February";
	case 2: 
		return "March";
	case 3: 
		return "April";
	case 4: 
		return "May";
	case 5: 
		return "June";
	case 6: 
		return "July";
	case 7: 
		return "August";
	case 8: 
		return "September";
	case 9: 
		return "October";
	case 10: 
		return "November";
	case 11: 
		return "December";
			
	}
}



//----- Added by Gayan for All the BEC customize through one code. Use the following CORS ajax calling pattern for future implementations

var currentModule = 'ALL';
function becConfigLoad(){
	var becConfig = $.cookie("becConfig");
	if(becConfig != null && becConfig !='' && becConfig != undefined) {
		loadConfig(JSON.parse($.cookie("becConfig")));
	}else{
	      $.ajax({
	      url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	      dataType: "text",
	      cache: true,
	      data: {
	      	callBack: "loadConfig",
	      	cacheEnable: "Y",
	      	bookingChannel: "WEB"
	      },
	      success: function(data) {
		eval(data);
	      },
	       done: function(data) {
		eval(data);
	      }		     
	  });
      }
}

function becFilterLoad(curMod){
	try{
		currentModule=curMod;
		// put specific functions into the selection. Common functions outside the if
		if(currentModule=='H'){
//			loadHotelTypeViaEar();
//			loadStarRatingViaEar();
			loadHotelNameViaEar();
		}else if(currentModule=='F'){
		
		}else if(currentModule=='C'){
			loadCarTypeViaEar();
		}else if(currentModule=='T'){
			
		}else if(currentModule=='A'){
		    loadProgramTypeViaEar();
		}else if(currentModule=='V'){
//			loadHotelTypeViaEar();
//			loadStarRatingViaEar();
		}else if(currentModule=='FP'){
			loadPackageTypeViaEar();
		}
	}catch(e){}
	
	try{loadPrefCurViaEar();}catch(e){}
}

function loadPrefCurViaEar(){
	$(document).ready(function(){	
		var becPrefCurCookie = $.cookie("becPrefCur")
		if(becPrefCurCookie != null && becPrefCurCookie !='' && becPrefCurCookie != undefined) {
			loadPrefCur(JSON.parse($.cookie("becPrefCur")));
		}else{			
			$.ajax({
	               url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	               dataType: "script",
	               xhr: function () {
	                   if (jQuery.browser.msie && jQuery.browser.msie){
	                       return new ActiveXObject("Microsoft.XMLHTTP");
	                   } else {
	                       return new XMLHttpRequest();
	                   }
	               },
	               data: {
	            	   callBack: "loadPrefCur",
	            	   cacheEnable: "N",
	            	   dataField: "prefCurrency",
	            	   bookingChannel: "WEB"
	               },
	               success: function() {
	               }
	           });
		}
		

	 });
}

function loadHotelTypeViaEar(){
	 $(document).ready(function(){	
		 if($.cookie("becHotelType")!=null){
			 loadHotelType(JSON.parse($.cookie("becHotelType")));
		}else{
			$.ajax({
	               url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	               dataType: "script",
	               xhr: function () {
	                   if (jQuery.browser.msie && jQuery.browser.msie){
	                       return new ActiveXObject("Microsoft.XMLHTTP");
	                   } else {
	                       return new XMLHttpRequest();
	                   }
	               },
	               data: {
	            	   callBack: "loadHotelType",
	            	   cacheEnable: "N",
	            	   dataField: "hotelType",
	            	   bookingChannel: "WEB"
	               },
	               success: function() {
	               }
	           });

		}
		
	 });
}


function loadPackageTypeViaEar(){
	 $(document).ready(function(){	
		 if($.cookie("becPackageType")!=null){
			 loadPackageType(JSON.parse($.cookie("becPackageType")));
		}else{
			$.ajax({
	               url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	               dataType: "script",
	               xhr: function () {
	                   if (jQuery.browser.msie && jQuery.browser.msie){
	                       return new ActiveXObject("Microsoft.XMLHTTP");
	                   } else {
	                       return new XMLHttpRequest();
	                   }
	               },
	               data: {
	            	   callBack: "loadPackageType",
	            	   cacheEnable: "N",
	            	   dataField: "pkgType",
	            	   bookingChannel: "WEB"
	               },
	               success: function() {
	               }
	           });

		}
		
	 });
}

function loadStarRatingViaEar(){
	 $(document).ready(function(){	
		 /*if($.cookie("becStarRating")!=null){
			 loadStarRating(JSON.parse($.cookie("becStarRating")));
		}else{*/
			$.ajax({
	              url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	              dataType: "script",
	              xhr: function () {
	                  if (jQuery.browser.msie && jQuery.browser.msie){
	                      return new ActiveXObject("Microsoft.XMLHTTP");
	                  } else {
	                      return new XMLHttpRequest();
	                  }
	              },
	              data: {
	           	   callBack: "loadStarRating",
	           	   cacheEnable: "N",
	           	   dataField: "starRating",
	           	   bookingChannel: "WEB"
	              },
	              success: function() {
	              }
	          });
		//}
	

	 });
}


function loadCarTypeViaEar(){
	 $(document).ready(function(){	
		 if($.cookie("becCarType")!=null){
			 loadCarType(JSON.parse($.cookie("becCarType")));
		}else{
			$.ajax({
	             url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	             dataType: "script",
	             xhr: function () {
	                 if (jQuery.browser.msie && jQuery.browser.msie){
	                     return new ActiveXObject("Microsoft.XMLHTTP");
	                 } else {
	                     return new XMLHttpRequest();
	                 }
	             },
	             data: {
	          	   callBack: "loadCarType",
	          	   cacheEnable: "N",
	          	   dataField: "carType",
	          	   bookingChannel: "WEB"
	             },
	             success: function() {
	             }
	         });
		}
	 });
}

var hotelNameList;
function loadHotelNameViaEar(){
	
	 $(document).ready(function(){	
		 jQuery( "#H_name" ).autocomplete({
		        minLength: 2,
		        source: function(request, response) {
						            
		            $.ajax({
		            	url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
		                dataType: "script",
		                xhr: function () {
		                    if (jQuery.browser.msie && jQuery.browser.msie){
		                        return new ActiveXObject("Microsoft.XMLHTTP");
		                    } else {
		                        return new XMLHttpRequest();
		                    }
		                },
		                data: {
		                	term: request.term,
		                	callBack: "loadHotelName",
			              	cacheEnable: "N",
			              	dataField: "hotelName",
			              	otherParams: $("#hid_H_Loc").val().split("|")[0],
			              	bookingChannel: "WEB"
		                },
		                success: function() {                	
		                	response(hotelNameList);
		                }
		            });
		        }
		    });
		    
		    $("#H_name").bind( "autocompleteselect",function(event, ui){
		    	$("#H_ridecode").val(ui.item.rideId);
		    });
	 });
	 
	 
	 
}
function loadProgramTypeViaEar(){
	try{
	$(document).ready(function(){	
		 if($.cookie("becProgramType")!=null){
			 loadProgramType(JSON.parse($.cookie("becProgramType")));
		}else{
			$.ajax({
	               url: subURL+"ComponentSupport.do?method=getBookingEngineFiltersAndCustomization",
	               dataType: "script",
	               xhr: function () {
	                   if (jQuery.browser.msie && jQuery.browser.msie){
	                       return new ActiveXObject("Microsoft.XMLHTTP");
	                   } else {
	                       return new XMLHttpRequest();
	                   }
	               },
	               data: {
	            	   callBack: "loadProgramType",
	            	   cacheEnable: "N",
	            	   dataField: "activityTypeId",
	            	   bookingChannel: "WEB"
	               },
	               success: function() {
	               }
	           });

		}
		
	 });
	}catch(e){alert(e);}
}

//Call Back Functions


function loadConfig(jsonString) {
	var showPrefAirline='Y';
	var showAirClass='Y';
	var showPrefNonStop='Y';
	var showPromCode='Y';
	var showPrefCurrency='Y';
	var showStarRating='Y';
	var showHotelType='Y';
	var showInventryType='Y';
	var showPriceLevel='Y';
	var showCarType='Y';
	var showActivityType='Y';
	var showPackageType='Y';
	var showHotelName='Y';
	var showResCountry='Y';
	var showDestCountry='Y';
	var showDefCity='Y';
	var showflex='Y';
	var becConfigList = jsonString;
	if(becConfigList !=''){
		for (var x = 0; x < becConfigList.length; x++) {
			showPrefAirline=becConfigList[x].prefAirline;			
			showAirClass=becConfigList[x].airClass;
			showPrefNonStop=becConfigList[x].prefNonStop;
			showPromCode=becConfigList[x].promCode;
			showPrefCurrency=becConfigList[x].prefCur;
			showStarRating=becConfigList[x].starRating;
			showHotelType=becConfigList[x].hotelType;
			showInventryType=becConfigList[x].invType;
			showPriceLevel=becConfigList[x].priceLvl;
			showCarType=becConfigList[x].carType;
			showActivityType=becConfigList[x].actType;
			showPackageType=becConfigList[x].pkgType;
			showHotelName=becConfigList[x].hotelName;
			showResCountry=becConfigList[x].resCountry;	
			showDestCountry=becConfigList[x].destCountry;
			showDefCity=becConfigList[x].defaultCity;
			showflex=becConfigList[x].showflex;
		}
	}
	if(showPrefAirline=='N'){
		$('#pref_airline_F').css('display', 'none');
		$('#pref_airline_V').css('display', 'none');
	}
	if(showAirClass=='N'){
		$('#air_class_F').css('display', 'none');
		$('#air_class_V').css('display', 'none');
	}
	if(showPrefNonStop=='N'){
		$('#pref_nonstop_F').css('display', 'none');
	}
	if(showPromCode=='N'){
		$('#promotionCodeDiv_F').css('display', 'none');
		$('#promotionCodeDiv_H').css('display', 'none');
		$('#promotionCodeDiv_C').css('display', 'none');
		$('#promotionCodeDiv_A').css('display', 'none');
		$('#promotionCodeDiv_V').css('display', 'none');
		
	}
	if(showPrefCurrency=='N'){
		$('#pref_cur_F').css('display', 'none');
		$('#pref_cur_H').css('display', 'none');
		$('#car_curr_div').css('display', 'none');
		$('#t_curr_div').css('display', 'none');
		$('#ac_curr_lbl_div').css('display', 'none');
		$('#pref_cur_V').css('display', 'none');
		$('#air_curr_div').css('display', 'none');
	}
	if(showStarRating=='N'){
		$('#star_rating_div_H').css('display', 'none');
		$('#star_rating_div_V').css('display', 'none');
	}
	if(showHotelType=='N'){
		$('#hotel_type_H').css('display', 'none');
		$('#hotel_type_V').css('display', 'none');
	}
	if(showHotelName=='N'){
		$('#hotel_name_H').css('display', 'none');
	}
	
	if(showInventryType=='N'){
		$('#inv_type_H').css('display', 'none');
	}
	if(showPriceLevel=='N'){
		$('#prc_lvl_H').css('display', 'none');
	}
	if(showCarType=='N'){
		$('#car_type_C').css('display', 'none');
	}
	if(showActivityType=='N'){
		$('#act_type_A').css('display', 'none');
	}
	if(showPackageType=='N'){
		$('#pkg_type_P').css('display', 'none');
	}
	if(showflex=='N'){
		$('#flax_container_div').css('display', 'none');
	}
	if(showResCountry=='N'){
		try{
			$('#t_res_country_div').css('display', 'none');
			$('#h_res_country_div').css('display', 'none');
			$('#v_res_country_div').css('display', 'none');
			$('#fp_res_country_div').css('display', 'none');
			$('#f_res_country_div').css('display', 'none');
			$('#c_res_country_div').css('display', 'none');
			$('#a_res_country_div').css('display', 'none');
			
			$('#V_Country').attr('validate', '');
			$('#C_Country').attr('validate', '');
			$('#tr_Country').attr('validate', '');
			$('#AC_Country').attr('validate', '');
			$('#P_Country').attr('validate', '');
			$('#F_Country').attr('validate', '');
			$('#H_Country').attr('validate', '');
		}catch(e){}
	}
	if(showDestCountry=='N'){
		try{
			$('.destination_country_AS').css('display', 'none');
			$('.destination_country_HS').css('display', 'none');
			$('.destination_country_A').css('display', 'none');
			$('.destination_country_H').css('display', 'none');
		}catch(e){}
	}
	
	if(showDefCity!='Y' && showDefCity!='N'){
		
		try{
			var codes=showDefCity.split(",");
			$('#H_Loc').val(codes[0]);
			$('#hid_H_Loc').val(codes[1]);
			$('#activity_Loc').val(codes[0]);
			$('#hid_AC_Loc').val(codes[1]);
		}catch(e){}
	}
	
	if($.cookie("becConfig")==null){		
		var becConfig = [
		                 	{"prefAirline":showPrefAirline,
	    	                "airClass":showAirClass,
	    	                "prefNonStop":showPrefNonStop,
	    	                "promCode":showPromCode,
	    	                "prefCur":showPrefCurrency,
	    	                "starRating":showStarRating,
	    	                "hotelType":showHotelType,
	    	                "invType":showInventryType,
	    	                "priceLvl":showPriceLevel,
	    	                "carType":showCarType,
	    	                "actType":showActivityType,
	    	                "pkgType":showPackageType,
	    	                "hotelName":showHotelName,
	    	                "resCountry":showResCountry,
	    	                "destCountry":showDestCountry,
	    	                "showflex":showflex,
	    	                "defaultCity":showDefCity}
	    	];	
		
		var date = new Date();		
		date.setTime(date.getTime() + (cookieExpMin * 60 * 1000));
		$.cookie("becConfig", JSON.stringify(becConfig),{ expires: date });
		
	}
	
	if(document.forms["form1"].elements["Air_TripType2"] != undefined && document.forms["form1"].elements["Air_TripType2"].checked){
		//document.getElementById("flax_container_div").style.display="block";
	}
	
}

function loadPrefCur(jsonString){
	var prefCurList = jsonString;
	if(prefCurList !=''){
		if(currentModule=='H'){
			reLoadSelectList('H_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
		}else if(currentModule=='F'){
			reLoadSelectList('F_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
		}else if(currentModule=='C'){
			reLoadSelectList('C_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
		}else if(currentModule=='T'){
			reLoadSelectList('tr_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
		}else if(currentModule=='A'){
			reLoadSelectList('AC_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
		}else if(currentModule=='V'){
			reLoadSelectList('V_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
		}else if(currentModule=='FP'){
			reLoadSelectList('FP_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
		}else{
			reLoadSelectList('H_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
			reLoadSelectList('F_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
			reLoadSelectList('C_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
			reLoadSelectList('tr_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
			reLoadSelectList('AC_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
			reLoadSelectList('V_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
			reLoadSelectList('FP_consumerCurrencyCode',prefCurList,'','选择货币种类',false,"becPrefCur");
		}
		
	}
}

function loadHotelName(jsonString){
	hotelNameList=jsonString;
}

function loadHotelType(jsonString){
	var hotelTypeList = jsonString;
	if(hotelTypeList !=''){		
		if(currentModule=='H'){
			reLoadSelectList('hType_h',hotelTypeList,'ALL','全选',true,"becHotelType");
		}else if(currentModule=='V'){
			reLoadSelectList('hType_v',hotelTypeList,'ALL','全选',true,"becHotelType");
		}
	}
}

function loadStarRating(jsonString){
	var starRatingList = jsonString;
	if(starRatingList !=''){	
		if(currentModule=='H'){
			reLoadSelectList('star_rating_H',starRatingList,'ALL','全选',true,"becStarRating");
		}else if(currentModule=='V'){
			reLoadSelectList('star_rating_V',starRatingList,'ALL','全选',true,"becStarRating");
		}
	}
}

function loadCarType(jsonString){
	var carTypeList = jsonString;
	if(carTypeList !=''){		
		if(currentModule=='C'){
			reLoadSelectList('Car_Type',carTypeList,'ALL','全选',true,"becCarType");
		}
	}
}

function loadProgramType(jsonString){
	try{
	var programTypeList = jsonString;
	if(programTypeList !=''){		
			reLoadSelectList('activityTypeId_a',programTypeList,'ALL','全选',true,"becProgramType");
	}}catch(e){
		alert(e);
	}
}

$(".hotel-passenger-label-text").hide();

function reLoadSelectList(selectorName,preferredList,firstLabel,firstVal,showFirstVal,cacheName){
	
	try{
	if(firstVal!=null && firstVal!=''){
		if(showFirstVal){
			$("#"+selectorName).empty().append($('<option selected=\'selected\'></option>').val(firstLabel).html(firstVal));
		}else{
			$("#"+selectorName).empty().append($('<option selected=\'selected\' style=\'display:none\'></option>').val(firstLabel).html(firstVal));
		}
	}
	for (var x = 0; x < preferredList.length; x++) {
		$("#"+selectorName).append($('<option></option>').val(preferredList[x].value).html(preferredList[x].label));
	}

	if($.cookie(cacheName)==null){
		var cacheJson = [];
		for(var i in preferredList) {

		    var item = preferredList[i];

		    cacheJson.push({ 
		        "value" : item.value,
		        "label"  : item.label
		    });
		}
		var date = new Date();		
		date.setTime(date.getTime() + (cookieExpMin * 60 * 1000));
		$.cookie(cacheName, JSON.stringify(cacheJson),{ expires: date });
	}
	}catch(e){
		alert(e);
	}
}

function createXMLHttpRequest() {
	try{ return new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {}
    try{ return new ActiveXObject("Microsoft.XMLHTTP");} catch (e) {}
	try{ return new XMLHttpRequest(); }catch (e) {}
	return null;
}

function defaultDataWithRegionAndCountry(ex){
	var statusOfHideResidanceCountry = "";
	var defaultRegionAndCountryCodes ="";
	
	$(document).ready(function(){
	try{	
	$.ajax({
              url : subURL+'ComponentSupportAction.do',
              method : 'GET',
              data : {
            	  method : "getDefaultRegionAndCountryCodes",
            	  bookingChannel : "WEB"
              },
              dataType: "text",
              success: function(data){
            	var defaultCountryList = eval(data);
			    if (defaultCountryList != undefined && defaultCountryList.length > 0) {
			    	statusOfHideResidanceCountry = defaultCountryList[0].statusOfHideResidanceCountry;	
			    	defaultRegionAndCountryCodes = defaultCountryList[0].defaultRegionAndCountryCodes;	    
			    	if(statusOfHideResidanceCountry == 'Y'){
					var en = ex;
				    	if(ex=='T')en='tr';
					    $("#"+en+"_Country").val(defaultRegionAndCountryCodes);
				    }					   
			    }
			    $("#pkgType").val(ex);
				eval("LoadData_"+ex+"()");
				submitData();
              }
          });
	}catch(e){alert(e);}
	});				  						  						  
}



function  validatePriceFilter(){
	$(document).ready(function() {
	    $('#priceLevelFrom_H, #priceLevelTo_H').keydown(function (e) {
	        // Allow: backspace, delete, tab, escape, enter and .
	        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
	             // Allow: Ctrl+A
	            (e.keyCode == 65 && e.ctrlKey === true) || 
	             // Allow: home, end, left, right, down, up
	            (e.keyCode >= 35 && e.keyCode <= 40)) {
	                 // let it happen, don't do anything
	                 return;
	        }
	        // Ensure that it is a number and stop the keypress
	        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
	            e.preventDefault();
	        }
	    });
	});
}
validatePriceFilter();

function getDateFormat(date){
	return $.datepicker.formatDate('dd M yy', new Date(date));
}

function getOriginalDateFormat(date){
	var r  = new Date(date);
	return $.datepicker.formatDate('mm/dd/yy', new Date(date));
	
}