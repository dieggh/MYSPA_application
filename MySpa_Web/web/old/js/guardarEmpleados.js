function guardar()   {
                    
			//traer datos del formulario
			var misDatos =
			{
					primerNombre:document.getElementById("primerNombre").value,
					segundoNombre:document.getElementById("segundoNombre").value,
                                        primerApellido:document.getElementById("primerApellido").value,
                                        segundoApellido:document.getElementById("segundoApellido").value,
                                        genero:document.getElementById("genero").value,
                                        rfc:document.getElementById("rfc").value,
                                        domicilio:document.getElementById("domicilio").value,
                                        telefono:document.getElementById("telefono").value,
                                        puesto:document.getElementById("puesto").value,
                                        usuario:document.getElementById("usuario").value,
                                        contraseña:document.getElementById("contraseña").value,
                                        rol:document.getElementById("rol").value,
                                        estatus:document.getElementById("estatus").value
			};
                        
                        var section = document.querySelector('table');
                        
                        var tr = document.createElement('tr');
			tr.textContent="";
			section.appendChild(tr);
                        
                        var p2 = document.createElement('td');
			p2.textContent= misDatos.primerNombre + " " + misDatos.segundoNombre + " " + misDatos.primerApellido + " " + misDatos.segundoApellido;
			section.appendChild(p2);
                        
                        //convertir el nombre completo a mayúsculas
                        misDatos.primerNombre=misDatos.primerNombre.toUpperCase();
                        misDatos.segundoNombre=misDatos.segundoNombre.toUpperCase();
                        misDatos.primerApellido=misDatos.primerApellido.toUpperCase();
                        misDatos.segundoApellido=misDatos.segundoApellido.toUpperCase();
                        
                        //Igualar los valores nulos a X
				if(misDatos.primerNombre==''){
					misDatos.primerNombre='XXX';
				}
				if(misDatos.segundoNombre==''){
					misDatos.segundoNombre='XXX';
				}
				if(misDatos.primerApellido==''){
					misDatos.primerApellido='XXX';
				}
				if(misDatos.segundoApellido==''){
					misDatos.segundoApellido='XXX';
				}
                        
                        //crear la variable del numero unico
                        var numeroUnicoEmpleado;
                        numeroUnicoEmpleado = "E";
                        //comprobar que el rfc no esté vacío
                        if(misDatos.rfc != ""){
                            //si no está vacío, se toman las primeras letras para formar el numero unico del cleinte
                            numeroUnicoEmpleado = numeroUnicoEmpleado + misDatos.rfc.substring(0, 4);
                        }else{
                            //si está vacío, se toma lo siguiente:
                            //Primera letra de su apellido paterno
                            numeroUnicoEmpleado = numeroUnicoEmpleado + misDatos.primerApellido.charAt(0);
                            
                            //Primera vocal interna de su apellido paterno. Si no existe, se usa X.
                            for(var i=1; i<misDatos.primerApellido.length; i++) {
					var c = misDatos.primerApellido.charAt(i);
					var g;
					if(c=='A' || c=='E' || c=='I' || c=='O' || c=='U'){
						g=c;
						break;
					}
					else{
						g="X";
					}
                            }
                            numeroUnicoEmpleado=numeroUnicoEmpleado+g;
                            
                            //Primera letra del apellido materno. Si no existe, se usa X.
                            numeroUnicoEmpleado=numeroUnicoEmpleado + misDatos.segundoApellido.charAt(0);
                            
                            //Primera letra del primer nombre.
                            numeroUnicoEmpleado=numeroUnicoEmpleado + misDatos.primerNombre.charAt(0);
                        }
                        
                        //obtenemos el timestamp
                        var d = new Date();
                        var n = d.getTime();
                        
                        //agregamos el timestamp al numero unico
                        numeroUnicoEmpleado=numeroUnicoEmpleado + n;
                        
                        //seleccionamos el apartado donde se verá le numero unico
                        
			
			var p1 = document.createElement('td');
			p1.textContent=numeroUnicoEmpleado;
			section.appendChild(p1);
                        
                        var p7 = document.createElement('td');
			p7.textContent= misDatos.domicilio;
			section.appendChild(p7);
                        
                        var p6 = document.createElement('td');
			p6.textContent= misDatos.rfc;
			section.appendChild(p6);
                        
                        var p8 = document.createElement('td');
			p8.textContent= misDatos.telefono;
			section.appendChild(p8);
                        
                        var p5 = document.createElement('td');
			p5.textContent= misDatos.genero;
			section.appendChild(p5);
                        
                        var p9 = document.createElement('td');
			p9.textContent= misDatos.puesto;
			section.appendChild(p9);
                        
                        var p10 = document.createElement('td');
			p10.textContent= misDatos.rol;
			section.appendChild(p10);
                        
                        var p11 = document.createElement('td');
			p11.textContent= misDatos.estatus;
			section.appendChild(p11);
                    }