// 2. Return the name of the student who has the lowest evaluation
// score.
//     Վարադարձնել այն ուսանողի անունը, ով արդյունքների մեջ ունի
// ամենացածր գնահատականը։

const evaluations = [
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 70
    },
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 60
    },
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 50
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",

        score: 60
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 50
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 40
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 45
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 35
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 3, // Unique identifier for each course

        courseName: "JS Level 1",
        score: 25
    }
];



function getDumbestStudentName(arr) {
    let dumbestStudentName = arr[0];

    for (const student of arr) {
        if (student.score < dumbestStudentName.score) {
            dumbestStudentName = student;
        }
    }
    return dumbestStudentName.studentName;
}

console.log(getDumbestStudentName(evaluations))