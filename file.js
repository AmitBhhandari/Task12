class Student{
    static count=0;
    constructor(name , age , phone_number, board_marks )
    {
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.board_marks=board_marks;
        Student.countStudent();
        
    }

    static countStudent(){
        console.log(Student.count++)
    }


        eligibility(board_marks) {
        if (board_marks>40)
        {
            console.log(   this.name+' '+ 'is eligble for college ')
        }
        else{
            console.log( this.name+' '+ " is not eligble for college")
        }
        
    }
    eligibleForPlacements(minPlacementAge) {
        return  (minMarks) => {
            if (this.board_marks > minMarks && this.age > minPlacementAge) {
                console.log(this.name + " is ready for placements")
            } 
            else {
                console.log(this.name + " is not ready for placements")
                 }
        }    
}
}
console.log(Student.countStudent());
const amit=new Student('Amit',24,1234567,70); 
const sahil=new Student('Sahil',24,9875567,39); 
const raja=new Student('Raja',25,16574644,45); 
const ronit=new Student('Ronit',23,19834567,75); 
const rohit=new Student('Rohit',24,5864567,30); 



amit.eligibility();
sahil.eligibility();
raja.eligibility();
ronit.eligibility();
rohit.eligibility();


amit.eligibleForPlacements(20)(70);
sahil.eligibleForPlacements(20)(70);
raja.eligibleForPlacements(20)(70);
ronit.eligibleForPlacements(20)(70);
rohit.eligibleForPlacements(20)(70);
 
