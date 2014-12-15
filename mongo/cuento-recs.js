function mad(x) {
fecha_ini = new Date().getTime() ;
fecha_fin = new Date().getTime() ;
i = 0 ;
total = 0 ; 
while (total < x*1000 ) {
    i++;
    total = fecha_fin - fecha_ini ; 
    fecha_fin = new Date().getTime() ;
}
v_fecha_ini = new Date(fecha_ini) ; 
v_fecha_fin = new Date(fecha_fin) ; 

// print ("Start: " + v_fecha_ini) ; 
// print ("End  : " + v_fecha_fin) ; 
print ("# Operations: " + i); 
// print ("") ; 
}

veces = 0 ;
while ( veces < 5 ) {
   mad(10) ;
   veces++ ;
}

print ("---------------------------------------------------") ; 
print ("") ; 
