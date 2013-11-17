var box = document.getElementById( 'mw-content-text' );

    var table = document.createElement("table");
    var newrow = document.createElement( 'tr' );
    var th = document.createElement('th');
    table.className="infobox vcard";
    table.style.width="22em";
   th.colspan="2";
    th.className="n";
    th.style.text-align="center"; 
    th.style.fontSize="125%";
    th.innerText= "hello world";
    newrow.appendChild(th);
    table.appendChild(newrow);
    box.insertBefore(table, box.firstChild);
    