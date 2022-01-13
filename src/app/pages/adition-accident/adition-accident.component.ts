import { Component, OnInit } from '@angular/core';
import { ClienteAccidentes } from '../mapadespliegue/entities/clienteAccidente';
import { ClienteAccidenteService } from '../mapadespliegue/services/cliente-accidente.service';



@Component({
  selector: 'app-adition-accident',
  templateUrl: './adition-accident.component.html',
  styleUrls: ['./adition-accident.component.scss']
})
export class AditionAccidentComponent implements OnInit {

  accidentes: ClienteAccidentes[];

 // public selectedAccidents: ClienteAccidentes[];
  
  cols: any[] = [];

  exportColumns: any[];

  first = 0;

  rows = 10;

  constructor(private accidentesService: ClienteAccidenteService) { }

  ngOnInit(): void {

    this.accidentesService.getClientes().subscribe(
      accidentes => this.accidentes = accidentes
    );
    //this.accidentesService.getClientes().then(acci => this.accidentes = acci );

    this.cols = [
      {field:'id', header: 'id'},
      {field:'carretera', header: 'Carretera'},
      {field:'abscisado', header: 'Abscisado'},
      {field:'latitud', header: 'Latitud'},
      {field:'longitud', header: 'Longitud'},
      {field:'victimas', header: 'Victimas'},
      {field:'heridosLeves', header: 'Heridos Leves'},
      {field:'heridosGraves', header: 'Heridos Graves'},
      {field:'muertos', header: 'Muertos'},
      {field:'diaSemana', header: 'Día Semana'},
      {field:'fecha', header: 'Fecha'},
      {field:'hora', header: 'Hora'},

    ];
    

    this.exportColumns = this.cols.map(
      col => (
        {
          title: col.header,
          dataKey: col.field
        }
      )
    );
    console.log('resultado de columnas -> ', this.cols)
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.first === (this.accidentes.length - this.rows);
}

isFirstPage(): boolean {
    return this.first === 0;
}

 /* exportPdf() {
    import("jspdf").then( jsPDF => {
      import('jspdf-autotable').then( x => {
        const doc = new jsPDF.default(0,0);
        doc.autoTable(this.exportColumns, this.accidentes);
        doc.save('accidentes.pdf');
      })
    })
  }


  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.getAccidents());
      const workbook = {
        Sheets: {'data':worksheet},
        Sheetnames: ['data']
      };
      const excelBuffer: any = xlsx.write(workbook, 
        {
          Booktype: 'xlsx',
          type: 'array'
        });
        this.saveAsExcelFile(excelBuffer, "accidentes");
    });
  }

  getAccidents(){
    let info = [];
    for(let accidente of this.accidentes){
      info.push(accidente);
    }
    return info;
  }

  saveAsExcelFile(buffer: any, filename: string): void {
    import("file-saver").then( Filesaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data:Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      Filesaver.saveAs(data, filename + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }*/

}
