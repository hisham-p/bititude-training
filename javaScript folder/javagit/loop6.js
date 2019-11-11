// Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor

// Student Name Marks
// David 80
// Vinoth 77
// Divya 88
// Ishitha 95
// Thomas 68
// The grades are computed as follows :

// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

function student(name, mark) {
  for (let j = 0; j < name.length; j++) {
    console.log(name[j] + ' : ' + mark[j] + ' : ' + grade(mark[j]) + ' grade');
  }
}

function grade(mark) {
  if (mark < 60) {
    return 'F';
  } else if (mark < 70 && mark >= 60) {
    return 'D';
  } else if (mark < 80 && mark >= 70) {
    return 'C';
  } else if (mark < 90 && mark >= 80) {
    return 'B';
  } else {
    return 'A';
  }
}
console.log(student(['David', 'Vinoth', 'Divya', 'Ishitha', 'Thomas'], [80, 77, 88, 95, 68]));
