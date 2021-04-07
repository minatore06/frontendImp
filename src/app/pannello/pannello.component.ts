import { Component } from '@angular/core';
import { DataRestService } from '../data-rest.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-pannello',
  templateUrl: './pannello.component.html',
  styleUrls: ['./pannello.component.css']
})
export class PannelloComponent {

  constructor(private restClient: DataRestService) {
    document.getElementById("conferma")?.addEventListener("click", () =>{
      //this.inserimento();
    }, false)
  }

   inserimento(){
    let risposta;
    let errors;
    this.restClient.getDataRows("http://localhost:8080/api/tutorial/1.0/employees").subscribe(
        data=>{
          let impiegatoId = 0;
          data.forEach(impiegato => {
            if(impiegato.employeeId>impiegatoId)impiegatoId = impiegato.employeeId;
          })
          impiegatoId+=1;
/*           let nome = document.getElementById('nome').value; 
          let cognome = document.getElementById('cognome').value; 
          let email = document.getElementById('email').value; 
          let phone = document.getElementById('telefono').value;  */
        },
        error=>errors = error
    )

    

/*     let data = {
      "employeeId": impiegatoId,
      "firstName": nome,
      "lastName": cognome,
      "email": email,
      "phone": phone
    };

    xhr.onreadystatechange = function() {
      if(xhr.readyState === xhr.DONE && xhr.status === 201) {
        window.location.reload();
        
      }else if(xhr.readyState === xhr.DONE && xhr.status !== 201){
        document.getElementById("response").innerHTML = "Errore"
        console.log(xhr.status)
      }
    };  */
  
  }
}
