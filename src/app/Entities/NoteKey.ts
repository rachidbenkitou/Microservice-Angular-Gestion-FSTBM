export class NoteKey {
      etudiantId!:String;
      examenId!:Number;
      
      constructor(id:String, examId: Number) {
            this.etudiantId = id;
            this.examenId = examId;
          }
}