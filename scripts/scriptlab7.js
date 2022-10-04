//nummer 1
const ändratext = () => document.getElementById("gammal").innerHTML= "Denna paragraf är ny och fräsch.";

//nummer 2
const ändralänk = () => document.getElementById("länk").href="https://google.com";

//nummer 3

function volym()
 {
  var b = document.getElementById('bredd').value;
  var l = document.getElementById('längd').value;
  var h = document.getElementById('höjd').value;
  var v = b*l*h;
  document.getElementById('resultat').innerHTML = v;
  return false;
 } 

