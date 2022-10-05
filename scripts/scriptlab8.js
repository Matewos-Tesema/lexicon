function minValidator() {
  let fnamn = document.forms["frm"]["fnamn"].value;
  let enamn = document.forms["frm"]["enamn"].value;  
  let epost = document.forms["frm"]["email"].value;
  let snabelA = epost.indexOf("@");
  let punkt = epost.lastIndexOf(".");
  
 
  if (fnamn==null || fnamn==""){  
    alert("Namn fält kan inte vara tom");
    document.frm.fnamn.focus();
    return false;
  }else if (enamn==null || enamn==""){  
    alert("Efternam fältet kan inte vara tom");
    document.frm.enamn.focus();  
    return false;
  }else if (epost==null || epost=="" ||snabelA < 1 || ( punkt - snabelA < 2 )) {
    alert("matta in rätt email format!")
    document.frm.email.focus() ;
    return false;
  }
  else return true;
 
} 