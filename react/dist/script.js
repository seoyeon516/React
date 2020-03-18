function formatInfo(student) {
  return student.name + "[" + student.id + "]";
}

const student = {
  id: "2010123",
  name: "Seoyeon",
  color: 'blue' };


//JSX:{formatInfo(student)} 중괄호!
const element =
React.createElement("h3", { class: student.color },
formatInfo(student));



//ReactDOM:화면에 실제로 그려주는 역활.
ReactDOM.render(element,
document.getElementById('root'));