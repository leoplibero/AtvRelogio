        var rep;
           
        var mes_ext = new Array();
        mes_ext[0] = "Janeiro";
        mes_ext[1] = "Fevereiro";
        mes_ext[2] = "Março";
        mes_ext[3] = "Abril";
        mes_ext[4] = "Maio";
        mes_ext[5] = "Junho";
        mes_ext[6] = "Julho";
        mes_ext[7] = "Agosto";
        mes_ext[8] = "Setembro";
        mes_ext[9] = "Outubro";
        mes_ext[10] = "Novembro";
        mes_ext[11] = "Dezembro";
                
               
        var sema = new Array()
        sema[0]="Domingo";
        sema[1]="Segunda-feira";
        sema[2]="Terça-feira";
        sema[3]="Quarta-feira";
        sema[4]="Quinta-feira";
        sema[5]="Sexta-feira";
        sema[6]="Sábado";

                      
        function Exibir()
            {
                rep=setInterval("IniciaRelogio()",1000);
            }
        
       
        function PareRelogio() {
            clearInterval(rep);
            document.getElementById("status").value = "";
        }
 
        function IniciaRelogio() {
            var hoje = new Date();
            var dia = hoje.getDate();
            document.getElementById("txtdia").value = dia;
            var mes = hoje.getMonth() + 1;
            document.getElementById("txtmes").value = mes;
            var ano = hoje.getFullYear();
            document.getElementById("txtano").value = ano;
            var hora = hoje.getHours();
            document.getElementById("txthora").value = hora;
            var minuto = hoje.getMinutes();
            if (minuto < 10) 
            minuto = "0" + minuto;
            document.getElementById("txtmin").value = minuto;
            var segundo = hoje.getSeconds();
            if (segundo < 10) 
            segundo = "0" + segundo;
            document.getElementById("txtseg").value = segundo;
            var tudo = "Hoje é " + dia + "/" + mes + "/" + ano + " e o horário é " + hora + ":" + minuto + ":" + segundo;
            document.getElementById("status").value = tudo;         
         
         document.getElementById("mesext").value = mes_ext[mes-1];

         document.getElementById("semaext").value = sema[hoje.getDay()];
        }

         window.onload = IniciaRelogio();
        
       