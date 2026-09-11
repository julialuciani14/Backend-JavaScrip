const comidasDisponivel ={
    arroz:10, 
    feijao:3,
    macarrao:15,
    leite:2, 
    cafe:8
}

for(const disponivel in comidasDisponivel){
        if( comidasDisponivel[disponivel] > 3){
            console.log( disponivel  +"-" + comidasDisponivel[disponivel]  +" :disponivel")


    }else{
        console.log(disponivel+ "-" + comidasDisponivel[disponivel] +":esta acabando!" )



        }

    
}
