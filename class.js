class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "boshiruddin school"
    }
}

const student1 = new Student(100, "rohim");
const student2 = new Student(200, "halim");
const student3 = new Student(300, "rumi")
console.log(student1, student2, student3)
console.log(student3.name, student2.id);