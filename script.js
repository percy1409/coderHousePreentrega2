let opcion

let departamentos = [
    { id: 101, alquilado:true, propietario: "Juan Perez Salas", piso: 1, metrosDpto: 70, cuotaMantenimiento: 300, consumoAgua: 15, cochera:false, moroso:false },
    { id: 102, alquilado:true, propietario: "Manuel Gutierrez Alva", piso: 1, metrosDpto: 120, cuotaMantenimiento: 500, consumoAgua: 19, cochera:true, moroso:false },
    { id: 103, alquilado:true, propietario: "Maria Laura Hernandez Montoya", piso: 1, metrosDpto: 80, cuotaMantenimiento: 400, consumoAgua: 16, cochera:false, moroso:true },
    { id: 201, alquilado:true, propietario: "Jose Balta Torres", piso: 2, metrosDpto: 75, cuotaMantenimiento: 320, consumoAgua: 12, cochera:true, moroso:false },
    { id: 202, alquilado:true, propietario: "Cinthya Trujillo Montes", piso: 2, metrosDpto: 110, cuotaMantenimiento: 450, consumoAgua: 20, cochera:true, moroso:true },
    { id: 203, alquilado:true, propietario: "Alberto Puerta Rivera", piso: 2, metrosDpto: 90, cuotaMantenimiento: 420, consumoAgua: 18, cochera:false, moroso:false },
    { id: 301, alquilado:true, propietario: "Marisol Rodriguez Tito", piso: 3, metrosDpto: 75, cuotaMantenimiento: 330, consumoAgua: 16, cochera:true, moroso:true },
    { id: 302, alquilado:true, propietario: "Alexa Monson Carrillo", piso: 3, metrosDpto: 150, cuotaMantenimiento: 600, consumoAgua: 20, cochera:false, moroso:false },
    { id: 303, alquilado:true, propietario: "Luisa Fundo Barbaren", piso: 3, metrosDpto: 40, cuotaMantenimiento: 250, consumoAgua: 9, cochera:false, moroso:false },
    { id: 401, alquilado:false, piso:4, cuotaMantenimiento: 250, consumoAgua: 0, metrosDpto: 60},
    { id: 402, alquilado:false, piso:4, cuotaMantenimiento: 250, consumoAgua: 0, metrosDpto: 100},
    { id: 403, alquilado:false, piso:4, cuotaMantenimiento: 250, consumoAgua: 0, metrosDpto: 90}
  ]
let cantCochera = 5
let cocherasUtilizadas = 0
for (let i = 0; i < departamentos.length; i++) {
    if (departamentos[i].cochera === true) {
        cocherasUtilizadas++;
    }
  }


function dptosDisponibles(departamentos){
        return departamentos.filter(departamento => departamento.alquilado === false ).map(departamento => "Del piso: " +departamento.piso + "- número:" + departamento.id + "- tamaño: " + departamento.metrosDpto+"m2").join("\n")
}
function verDetalleDpto(){
        let id =Number(prompt("Ingrese número del departamento: "))
        const existeObjeto = departamentos.some(objeto => objeto.id === id);
        if(existeObjeto){
            respuesta= departamentos.filter(departamento => departamento.id === id).map(departamento => " Numero de departamento: "+departamento.id+
            "\n Piso: "+(departamento.piso !== undefined ? departamento.piso:"-") +
            "\n Propietario: "+(departamento.propietario !== undefined ? departamento.propietario:"-") +
            "\n Tamaño(m2): "+(departamento.metrosDpto !== undefined ? departamento.metrosDpto:"-") +
            "\n Cuota Mantenimiento: "+(departamento.cuotaMantenimiento !== undefined ? departamento.cuotaMantenimiento:"-") +
            "\n Cochera: "+ (departamento.cochera === true ? "Sí" :  departamento.cochera === false ? "No" :  "-")+
            "\n Tiene deuda: " +(departamento.moroso === true ? "Sí" :  departamento.moroso === false ? "No" :  "-")
            ) 
        }
        if(existeObjeto){
            alert(respuesta);
        }else{
                alert("Ingrese un número valido de departamento")
        }        
}
function editarPropietario(indice){
    let nombre = prompt("Ingrese nombre propietario: ")
    departamentos[indice].propietario = nombre
    alert("Se actualizó el propietario al departamento: "+ departamentos[indice].id)
}
function agregarCochera(indice){
    if(!departamentos[indice].cochera){
        if(cantCochera - cocherasUtilizadas > 0){
            departamentos[indice].cochera = true
            cocherasUtilizadas++
            alert("Se agrego cochera al departamento: "+ departamentos[indice].id)
        }else{
            alert("No se cuenta con cocheras disponibles")
        }  
    }else{
        alert("El departamento: "+departamentos[indice].id +" ya cuenta con cochera")
    }
    
}
function editarConsumoAgua(indice){
    let agua = Number(prompt("Ingrese consumo de agua: "))
    departamentos[indice].consumoAgua = agua
    alert("Se actualizó el consumo de agua al departamento: "+ departamentos[indice].id)
}

function editarMorosidad(indice){
            continuar = confirm("El departamento: "+ departamentos[indice].id +" es moroso?")
            departamentos[indice].moroso = continuar
            alert("Se actualizó la morosidad del departamento: "+ departamentos[indice].id)
}

function editarDpto(){
    let id =Number(prompt("Ingrese número del departamento: "))
    
    const indice = departamentos.findIndex(objeto => objeto.id === id);
        if(indice !== -1){
            opcion = Number(prompt("Ingrese campo a editar:"+
                            "\n1.- Nombre Propietario"+
                            "\n2.- Agregar cochera"+
                            "\n3.- Consumo de Agua"+
                            "\n4.- Actualizar Morosidad"))
            switch(opcion){
                case 1:
                    editarPropietario(indice)
                    break
                case 2:
                    agregarCochera(indice)
                    break
                case 3:
                    editarConsumoAgua(indice)
                    break
                case 4:
                    editarMorosidad(indice)
                    break
            }
        }else{
                alert("Ingrese un número valido de departamento")
        } 
}
function mostrarCocheras(){
    return departamentos.filter(departamento => departamento.cochera === true ).map(departamento => "Departamento: "+departamento.id).join("\n") +
    "\n **Existen "+ (cantCochera-cocherasUtilizadas) +" cocheras disponibles" 
}

function listarMorosos(){
    return departamentos.filter(departamento => departamento.moroso === true ).map(departamento => "Departamento: "+departamento.id+ "- Propietario: "+departamento.propietario).join("\n")
}

//Inicio
alert("Bienvenido al Sistema de Administracion del Edificio Aramburu 666")
do{
    opcion = Number(prompt("Ingrese opción:"+
                            "\n1.- Listar Departamentos disponibles"+
                            "\n2.- Ver detalles de un departamento en particular"+
                            "\n3.- Editar informacion de departamento"+
                            "\n4.- Mostrar cocheras disponibles"+
                            "\n5.- Listar propietarios Morosos"))
    switch(opcion){
        case 1:
            alert("Los departamentos disponibles son: \n" +dptosDisponibles(departamentos))
            break
        case 2:
            verDetalleDpto()
            break
        case 3:
            editarDpto()
            break
        case 4:
            alert("Los departamentos con cocheras son: \n" + mostrarCocheras())
            break
        case 5:
            alert("Los propietarios Morosos son : \n"+ listarMorosos())
            break
    }
}while(opcion != 0)