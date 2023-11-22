dineroCofla = prompt("Cuanto dinero tiene Cofla"); //dinero de Cofla 3
dineroLaura = prompt("Cuanto dinero tiene Laura"); //dinero de Laura 1.5
dineroSebastian = prompt("Cuanto dinero tiene Sebastian"); //dinero de Sebastina 1.7

document.write(`el dinero de Cofla es ${dineroCofla} <br> el dinero de Laura es ${dineroLaura} <br> y el dinero de Sebastian es ${dineroSebastian} <br><br><br>`);

//Dinero Cofla

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla compra helado de agua y le sobran " + (dineroCofla - 0.6));
    document.write("Cofla compra helado de agua y le sobran " + (dineroCofla - 0.6) + "<br><br>");
}else if (dineroCofla >=1 && dineroCofla < 1.6){
    alert("Cofla compra helado de crema y le sobran " + (dineroCofla - 1));
    document.write("Cofla compra helado de crema y le sobran " + (dineroCofla - 1) + "<br><br>");
}else if (dineroCofla >=1.6 && dineroCofla < 1.7) {
    alert("Cofla compra helado de mora y le sobran " + (dineroCofla - 1.6));
    document.write("Cofla compra helado de mora y le sobran " + (dineroCofla - 1.6) + "<br><br>");
}else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla compra helado de fresa y le sobran " + (dineroCofla - 1.7));
    document.write("Cofla compra helado de fresa y le sobran " + (dineroCofla - 1.7) + "<br><br>");
}else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla compra helado de aguacate y le sobran " + (dineroCofla - 1.8));
    document.write("Cofla compra helado de aguacate y le sobran " + (dineroCofla - 1.8) + "<br><br>");
}else if (dineroCofla >= 2.9){
    alert("Cofla compra helado de brownie con fresa o el tarro de helado y le sobran " + (dineroCofla - 2.9));
    document.write("Cofla compra helado de brownie con fresa o el tarro de helado y le sobran " + (dineroCofla - 2.9) + "<br><br>");
} else {
    alert("Lo siento Cofla, estas sin plata, largate");
    document.write("Lo siento Cofla, estas sin plata, largate <br><br>");
}

//Dinero Laura

if (dineroLaura >= 0.6 && dineroLaura < 1) {
    alert("Laura compra helado de agua y le sobran " + (dineroLaura - 0.6));
    document.write("Laura compra helado de agua y le sobran " + (dineroLaura - 0.6) + "<br><br>");
}else if (dineroLaura >=1 && dineroLaura < 1.6){
    alert("Laura compra helado de crema y le sobran " + (dineroLaura - 1));
    document.write("Laura compra helado de crema y le sobran " + (dineroLaura - 1) + "<br><br>");
}else if (dineroLaura >=1.6 && dineroLaura < 1.7) {
    alert("Laura compra helado de mora y le sobran " + (dineroLaura - 1.6));
    document.write("Laura compra helado de mora y le sobran " + (dineroLaura - 1.6) + "<br><br>");
}else if (dineroLaura >= 1.7 && dineroLaura < 1.8){
    alert("Laura compra helado de fresa y le sobran " + (dineroLaura - 1.7));
    document.write("Laura compra helado de fresa y le sobran " + (dineroLaura - 1.7) + "<br><br>");
}else if (dineroLaura >= 1.8 && dineroLaura < 2.9){
    alert("Laura compra helado de aguacate y le sobran " + (dineroLaura - 1.8));
    document.write("Laura compra helado de aguacate y le sobran " + (dineroLaura - 1.8) + "<br><br>");
}else if (dineroLaura >= 2.9){
    alert("Laura compra helado de brownie con fresa o el tarro de helado y le sobran " + (dineroLaura - 2.9));
    document.write("Laura compra helado de brownie con fresa o el tarro de helado y le sobran " + (dineroLaura - 2.9) + "<br><br>");
} else {
    alert("Lo siento Laura, estas sin plata, largate");
    document.write("Lo siento Laura, estas sin plata <br><br>");
}

//Dinero Sebastian

if (dineroSebastian >= 0.6 && dineroSebastian < 1) {
    alert("Sebastian compra helado de agua y le sobran " + (dineroSebastian - 0.6));
    document.write("Sebastian compra helado de agua y le sobran " + (dineroSebastian - 0.6) + "<br><br>");
}else if (dineroSebastian >=1 && dineroSebastian < 1.6){
    alert("Sebastian compra helado de crema y le sobran " + (dineroSebastian - 1));
    document.write("Sebastian compra helado de crema y le sobran " + (dineroSebastian - 1) + "<br><br>");
}else if (dineroSebastian >=1.6 && dineroSebastian < 1.7) {
    alert("Sebastian compra helado de mora y le sobran " + (dineroSebastian - 1.6));
    document.write("Sebastian compra helado de mora y le sobran " + (dineroSebastian - 1.6) + "<br><br>");
}else if (dineroSebastian >= 1.7 && dineroSebastian < 1.8){
    alert("Sebastian compra helado de fresa y le sobran " + (dineroSebastian - 1.7));
    document.write("Sebastian compra helado de fresa y le sobran " + (dineroSebastian - 1.7) + "<br><br>");
}else if (dineroSebastian >= 1.8 && dineroSebastian < 2.9){
    alert("Sebastian compra helado de aguacate y le sobran " + (dineroSebastian - 1.8));
    document.write("Sebastian compra helado de aguacate y le sobran " + (dineroSebastian - 1.8) + "<br><br>");
}else if (dineroSebastian >= 2.9){
    alert("Sebastian compra helado de brownie con fresa o el tarro de helado y le sobran " + (dineroSebastian - 2.9));
    document.write("Sebastian compra helado de brownie con fresa o el tarro de helado y le sobran " + (dineroSebastian - 2.9) + "<br><br>");
} else {
    alert("Lo siento Sebastian, estas sin plata, largate");
    document.write("Lo siento Sebastian, estas sin plata <br><br>");
}


