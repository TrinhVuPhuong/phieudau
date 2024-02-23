function getAllUrlParams(url) {
    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }

    return obj;
}
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    
    return result.join(' ');
  }

const output = document.querySelector('body');
var obj = getAllUrlParams();
function maker() {

    

    console.log(obj);
    
    var p = document.createElement('p');
    p.setAttribute("class", "title");
    p.textContent = "Mã PD: "+  obj['mapd'].toUpperCase();

    output.append(p);

    const myArray = obj['tungay'].split("%20");

    console.log(myArray);
    
    var date = "";
    //date += myArray[0] + " " + myArray[1];
    date += myArray[0];
    

    p = document.createElement('p');
    p.setAttribute("class", "title");
    p.textContent = "Từ Ngày: " + date;
    output.append(p);

    const myArray2 = obj['denngay'].split("%20");

    console.log(myArray2);
    
    var date2 = "";
    //date2 += myArray2[0] + " " + myArray2[1];
    date2 += myArray2[0];
    

    p = document.createElement('p');
    p.setAttribute("class", "title");
    p.textContent = "Đến Ngày: " + date2;
    output.append(p);


    p = document.createElement('p');
    p.setAttribute("class", "title");
    console.log(obj['ncc']);
    p.textContent = "NCC: " + titleCase(decodeURIComponent(obj['ncc']));
    output.append(p);


    var table, tr, td,div;
    table = document.createElement('table');

   
    div = document.createElement('div');
    div.setAttribute("class", "line2");
    output.append(div);




     table = document.createElement('table');

         tr = document.createElement('tr');

             td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Số mã cân";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['somacan']+ " mã"
            tr.append(td);

        table.append(tr);



        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Số ký cân";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['sokycan']+ " kg"
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Bì";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['bi']+ " kg"
            tr.append(td);

        table.append(tr);

     tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="%Cành";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['canh']+ " kg"
            tr.append(td);

        table.append(tr);

     tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="%Nước";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['nuoc']+ " kg"
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Số ký thực tế";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['sokythucte']+ " kg"
            tr.append(td);

        table.append(tr); 

        
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Giá dâu";
            tr.append(td);

            var x = obj['giadau'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);

        
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("colspan", "2");
                div = document.createElement("div");
                div.setAttribute("class","lineTB")
                td.append(div);
            tr.append(td);

        table.append(tr);


    
    
   
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title3");
            td.textContent="Thành Tiền";
            tr.append(td);

            x = obj['tiendau'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);    

    
    output.append(table);


    const myArray3 = obj['ngay'].split("%20");

    console.log(myArray);
    
    var date = "";
    date += myArray3[0] + " " + myArray3[1];

    

    p = document.createElement('p');
    p.setAttribute("class", "footer");
    p.textContent =  date;
    output.append(p);
 

    // p=document.createElement('p');
    // p.setAttribute("class","");
    // p.textContent="Duy Phương cảm ơn quý khách!";
    // output.append(p);
    


 


}
maker();


window.print();
if(obj['thietbi']=='computer'){
    window.addEventListener('afterprint', function() {
    window.close();
});
}
