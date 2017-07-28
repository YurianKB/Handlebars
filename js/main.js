var template = document.getElementById("index").innerHTML;
console.log(template)
var compilar = Handlebars.compile(template);

var persona = {
  registros: [{
      nombre: "100MB Disk Space",
      apellidos: "200MB Monthly Traffic",
      edad: "2 subdomains",
      edad2: "5 Email Accounts",
      edad3: "Webmail Support",
      edad4: "MySQL Support"
    },
    {
      nombre: "Charlie",
      apellidos: "<em>Mozz</em>",
      edad: "25 queeeeeeeeeee :0",
      mayor_edad: false
    },
    {
      nombre: "Yu",
      apellidos: "<em>Keith</em>",
      edad: 24,
      mayor_edad: false
    }
  ]
}
var compiladoHTML = compilar(persona);
/*var compiladoHTML = compilar({name:"<em>YU</em>"});*/
document.getElementById("action").innerHTML +=
  compiladoHTML;
