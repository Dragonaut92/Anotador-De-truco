$(document).ready( function(){

var puntosmax = 30;
var pe1= 0;
var pe2= 0;


    $('#botonini').on('click', fnini);
    $('#botonfin').on('click', fnfin);
    $('.borrar').on('click', fnborrar);
    
    $('#suma').on('click', fnsuma,);
    $('#suma2').on('click', fnsuma2);
    
    $('#resta').on('click', fnresta);
    $('#resta2').on('click', fnresta2);
    
    $('#boton24').on('click',fnMax24 );
    console.log(fnMax24);
    
    $('#boton30').on('click',fnMax30 );
    console.log(fnMax30);

        function fnMax24 (){
            puntosmax = 24;
        }

        function fnMax30 () {
            puntosmax = 30; 
        }

        function fnborrar(){
            document.getElementById("pe1").value="  " ;
            document.getElementById("pe2").value="  " ;
        }

        function fnini(){
            //Nombres
            var ne1 = $('#ne1').val();
            if (ne1 == "") { ne1 = "Equipo 1"; }
            $('#nombre1').html(ne1);
            
            var ne2 = $('#ne2').val();
            if (ne2 == "") { ne2 = "Equipo 2"; }
            $('#nombre2').html(ne2);
            
            //Puntos a Jugar
            $('#max').html('A ' + puntosmax)
            pe1 = 0; pe2 = 0;
            
            // $('.img').attr('src', '/Truco/0.png');
            $('#pe1').html(pe1);
            $('#pe2').html(pe2);
            
            $('#pantalla1').removeClass('visible').addClass('oculto');
            $('#pantalla2').removeClass('oculto').addClass('visible');
            
        }

        //SUMA
        
        function fnsuma(){
        if (pe1 < puntosmax){
            pe1++;
            fnMuestra1();
         }
         if(pe1 == puntosmax){
            ne1 = $('#ne1').text();
            alert("Gano" + ne1);
         }
       
        }
        function fnsuma2(){
            if(pe2 < puntosmax){ 
            pe2++;
            fnMuestra2();
             }
             if(pe2==puntosmax){
                ne2 = $('#ne2').text();
                alert("Gano" + ne2);
            }
        }
            // RESTA

        function fnresta(){
            if(pe1 > 0){
                pe1--;
                fnMuestra1();
            }
                
              }
        function fnresta2(){
            if(pe2 > 0){
            pe2--;
            fnMuestra2();

        }
    } 
        //PALURDOS
             
        function fnMuestra1(){
                $('#pe1').html(pe1);
                fnDibuja(1);
             }
            
        function fnMuestra2 (){
                $('#pe2').html(pe2);
                fnDibuja(2);
             }

             function fnDibuja (equipo) {
                var pad = 0
                if(equipo==1) { pad = pe1;} 
                if(equipo==2) { pad = pe2;}
                
                for(i=1;i<=6;i++){
                    idImagen = '#p' + equipo + i;
                        console.log(idImagen);
                    if (puntosmax==24 && i==3 && pad >= 2) {
                            $(idImagen).attr('src','2.png');
                            pad -= 2;
                    } else {
                            if (pad >= 5) {
                            $(idImagen).attr('src','5.png');
                            pad -= 5;
                    } else {
                            // 01234
                            $(idImagen).attr('src', pad+'.png');
                            pad = 0;
                        }
                    }
                }
            }
        
             function fnfin (){

                $('#pantalla2').removeClass('visible').addClass('oculto');
                $('#pantalla1').removeClass('oculto').addClass('visible');
                
                console.log(fnfin);
            }
});
