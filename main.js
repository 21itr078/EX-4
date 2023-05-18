const getResult = () => {
    let tamil = document.getElementById('tamil').value;
    let english = document.getElementById('english').value;
    let math = document.getElementById('math').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;
    let computer = document.getElementById('computer').value;

    if(document.getElementsByTagName('input').value==""){
        alert("Please Enter Some Value");
    }
   
    let total =parseFloat(tamil) + parseFloat(english) + parseFloat(math) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(computer);
    let percentage = (total * 100) / 600;

    if (percentage >= 100) {
        document.getElementById("grade").innerHTML = "O";
        grade.style.color='green';
    }
    else if (percentage >= 90) {
        document.getElementById("grade").innerHTML = "A+";

    }
    else if (percentage >= 80) {
        document.getElementById("grade").innerHTML = "A";

    }
    else if (percentage >= 70) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 60) {
        document.getElementById("grade").innerHTML = "B";

    }
    else if (percentage >= 50) {
        document.getElementById("grade").innerHTML = "C";

    }
    else {
      document.getElementById("grade").innerHTML = "You Are Failed";
        grade.style.color='red';
    }


    document.getElementById('percentage').innerHTML = percentage.toFixed(1);
    document.getElementById('total').innerHTML = total;
}