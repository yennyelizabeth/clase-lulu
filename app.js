var boton = document.querySelector("button");

var sectionDivs = document.querySelector("section");
var pushme = function () {
  var div = document.createElement("div"); /*creo div*/
  sectionDivs.appendChild(div); /* lo agrego como hijo */
  div.setAtribute("style","background:pink; color:blue; height:100px; width:100px; display:inline; padding:4px; ");
  var contenido = document.querySelectorAll("div"); /* lista coleccion de nodos*/
  var cantidad = document.length; /* le da el nro */
  var dato = document.createTextNode(cantidad);
  div.appendChild(dato);
}
boton.addEeventListener("click",pushme);
