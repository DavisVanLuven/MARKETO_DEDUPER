
var demo  = document.getElementById('demo')
var demo2 = document.getElementById('demo2')
var demo3 = document.getElementById('demo3')
var demo4 = document.getElementById('demo4')
var demo5 = document.getElementById('demo5')
var demo6 = document.getElementById('demo6')

var leads = masterLeads.leads, w = "", x = "", y = "", z = "", v = "", u = ""


/*!!!!!!!!!!SORTS BY PROPERTY!!!!!!!!!!!
*/

var sortByProperty = function (property) {

    return function (x, y) {

        return ((x[property] === y[property]) ? 1 : ((x[property] < y[property]) ? 1 : -1));

    };

};


leads.sort(sortByProperty('entryDate'));




/*!!!!!!!ORIGINAL ITERATORS (SORTED)!!!!!!*/

for (i in leads) {
    w += "<ul>"  
    + "<li>" + leads[i]._id +"</li>" 
    + "<li>" + leads[i].email + "</li>" 
    + "<li>" + leads[i].firstName + "</li>" 
    + "<li>" + leads[i].lastName + "</li>" 
    + "<li>" + leads[i].address + "</li>" 
    + "<li>" + leads[i].entryDate + "</li>" +
     "</ul>";
    }


for (i in leads) {
    v += "<p>" + leads[i].email + "</p>";

    
    }



for (i in leads) {
    y += "<p>" + leads[i]._id + "</p>";

    
    }


/*!!!!!EMAIL DE-DUPER!!!!!*/

var emails = [];
var deDupedEmails = []  //Pushing it into new array and 


$.each(leads, function(index, value) {
    if($.inArray(value.email, emails) == -1)
    {

        emails.push(value.email);
        deDupedEmails.push(value);
    }

    else
    {
    	console.log('Emails removed: ' + value.email + 'from: ' + value.firstName) //logged removed emails
    }
});



for (i in deDupedEmails) {
    x += "<ul>"  
    + "<li>" + deDupedEmails[i]._id +"</li>" 
    + "<li>" + deDupedEmails[i].email + "</li>" 
    + "<li>" + deDupedEmails[i].firstName + "</li>" 
    + "<li>" + deDupedEmails[i].lastName + "</li>" 
    + "<li>" + deDupedEmails[i].address + "</li>" 
    + "<li>" + deDupedEmails[i].entryDate + "</li>" +
     "</ul>";
    }

/*console.log(emails)*/



    /*!!!!!ID DE-DUPER!!!!!*/

var ids = []; // Not used
var deDupedIds = []

$.each(leads, function(index, value) {
    if($.inArray(value._id, ids) == -1)
    {
        ids.push(value._id);
        deDupedIds.push(value)
    }

      else
    {
    	console.log('Ids removed: ' + value._id + 'from: ' + value.firstName) // logged removed ids
    }
});




for (i in deDupedIds) {
    z += "<ul>"  
    + "<li>" + deDupedIds[i]._id +"</li>" 
    + "<li>" + deDupedIds[i].email + "</li>" 
    + "<li>" + deDupedIds[i].firstName + "</li>" 
    + "<li>" + deDupedIds[i].lastName + "</li>" 
    + "<li>" + deDupedIds[i].address + "</li>" 
    + "<li>" + deDupedIds[i].entryDate + "</li>" +
     "</ul>";
    }


  /*!!!!!COMBINATION DE-DUPER!!!!!*/

var ids = []; // Not used
var deDupedEmails_ids = []

$.each(deDupedEmails, function(index, value) {
    if($.inArray(value._id, ids) == -1)
    {
        ids.push(value._id);
        deDupedEmails_ids.push(value)
    }

      else
    {
    	console.log('Overlap removed: ' + value._id + 'from: ' + value.firstName) // logged removed ids
    }
});




for (i in deDupedEmails_ids) {
    u += "<ul>"  
    + "<li>" + deDupedEmails_ids[i]._id +"</li>" 
    + "<li>" + deDupedEmails_ids[i].email + "</li>" 
    + "<li>" + deDupedEmails_ids[i].firstName + "</li>" 
    + "<li>" + deDupedEmails_ids[i].lastName + "</li>" 
    + "<li>" + deDupedEmails_ids[i].address + "</li>" 
    + "<li>" + deDupedEmails_ids[i].entryDate + "</li>" +
     "</ul>";
    }




   
console.log(leads)  // Original Array

console.log(deDupedEmails) // Sans Dupe Emails 

console.log(deDupedEmails_ids) // Dupe Emails - Dupe Ids = DeDuped



/*!!!!!!!!OUTPUTS!!!!!!!!!*/

demo.innerHTML = w
demo2.innerHTML = x
demo3.innerHTML = y
demo4.innerHTML = z
demo5.innerHTML = v
demo6.innerHTML = u










/*!!!!!SOME STUFF THAT I TRIED!!!!!!!:*/



/*This is the best way I've found to de-dupe the arrays but it's jqery:*/
/*var json = [
    {"text":"menu1","parent":"#","id":"128102"},
    {"text":"menu1.1","parent":"128102","id":"128103"},
    {"text":"menu1.1","parent":"128102","id":"128103"}
];

var ids = [];
var clean = [];

$.each(json, function(index, value) {
    if($.inArray(value.id, ids) == -1)
    {
        ids.push(value.id);
        clean.push(value);
    }
});


demo.innerHTML = ids
demo2.innerHTML = clean*/


/*---------*/



/*This diplays non duplicated array of emails with the IDs that corrspond:
*/
/*var emails = {};
leads.forEach( function( item ) {
    var customer = emails[item.email] = emails[item.email] || {};
    customer[item._id] = true;

});

demo.innerHTML = JSON.stringify( emails, null, 4 );*/






/*-----------------------*/

/*
var emails = [];
var clean = [];

$.each(leads, function(index, value) {
    if($.inArray(value.email, emails) == -1)
    {
        emails.push("<ul>"  
    + "<li>" + value._id +"</li>" 
    + "<li>" + value.email + "</li>" 
    + "<li>" + value.firstName + "</li>" 
    + "<li>" + value.lastName + "</li>" 
    + "<li>" + value.address + "</li>" 
    + "<li>" + value.entryDate + "</li>" +
     "</ul>");
      /*  clean.push(value);
    }
});*/




/*leads.sort(function(a, b) {
    return parseFloat(a.entryDate) - parseFloat(b.entryDate);
});*/








