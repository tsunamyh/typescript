class Emtehan{
  employees : string[] = []
  // constructor(private readonly id:number,public name:string){

  // }
  des(employee : string){
    // console.log(this.id);
    this.employees.push(employee)
  }
}

const emtehan = new Emtehan()
emtehan.des("Sina")
emtehan.des("Sara")