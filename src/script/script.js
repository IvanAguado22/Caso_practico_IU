var userEmail;  //cookie name
var userData;   // cookie value (JSON object)

// Tras hacer click en "iniciar sesión" pequeño (muestra el formulario de login)
function cambiarLogIn(){ 
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("logIn").className = "active";
    document.getElementById("signUp").className = "";
}

// Tras hacer click en "Registrarse" (muestra el formulario de registro)
function cambiarSignIn(){
    document.getElementById("signup").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("logIn").className = "";
    document.getElementById("signUp").className = "active";
}

function showIni() {
    document.getElementById("pagAsignaturas").style.display = "block";
    document.getElementById("pagWeb").style.display = "none";
}

function showCourse() {
    document.getElementById("column_mid_ini").style.display = "block";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";
}

function showStudentsList() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "block";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";

}

function showForum() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "block";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";

}

function showForum1() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "block";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";

}

function showForum2() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "block";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";

}

function showForum3() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "block";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";

}

function showForum4() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "block";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";

}

function showForum5() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "block";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";

}

function showSubjectsList() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "block";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";
}

function showGrades() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "block";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none"
    document.getElementById("boton_volver").style.display = "none";
    volverCalificaciones();
    document.getElementById("column_mid_activities").style.display = "none";
}

function showActivities() {
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "block";
}

function showGradesStudent(){
    document.getElementById("column_mid_ini").style.display = "none";
    document.getElementById("column_mid_studentsList").style.display = "none";
    document.getElementById("column_mid_forum").style.display = "none";
    document.getElementById("column_mid_grades").style.display = "none";
    document.getElementById("column_mid_forum1").style.display = "none";
    document.getElementById("column_mid_forum2").style.display = "none";
    document.getElementById("column_mid_forum3").style.display = "none";
    document.getElementById("column_mid_forum4").style.display = "none";
    document.getElementById("column_mid_forum5").style.display = "none";
    document.getElementById("column_mid_subjectsList").style.display = "none";
    document.getElementById("column_mid_grades_student").style.display = "block";
    document.getElementById("boton_volver_st").style.display = "none";
    volverCalificaciones();
    document.getElementById("column_mid_activities").style.display = "none";
}

function showStudent(){
    document.getElementById("columnLeftComputerStudent").style.display = "block";
    document.getElementById("columnLeftComputer").style.display = "none";
}

function showTeacher(){
    document.getElementById("columnLeftComputerStudent").style.display = "none";
    document.getElementById("columnLeftComputer").style.display = "show";
}

function showStudentPhone(){
    if(userData.rol === "Estudiante"){
        if (window.matchMedia("(max-width: 600px)").matches) {
            document.getElementById("columnLeftPhoneStudent").style.display = "block";
            document.getElementById("columnLeftComputerStudent").style.display = "none";
            document.getElementById("columnLeftPhone").style.display = "none";
        } else{
            document.getElementById("columnLeftPhoneStudent").style.display = "none";
            document.getElementById("columnLeftComputerStudent").style.display = "block";
        }
    }
}

function showGrade(){
    if(document.getElementById("rol").value == "Estudiante"){
        document.getElementById("divGrade").style.display = "block";
    } else{
        document.getElementById("divGrade").style.display = "none";
    }
}

function changeWeb1(){
    document.getElementById("pagInicio").style.display = "none";
    document.getElementById("pagAsignaturas").style.display = "block";
    document.getElementById("userNameComputer").innerHTML = userData.username;
    document.getElementById("userNameTablet").innerHTML = userData.username;
}

function changeWeb2(){
    document.getElementById("pagAsignaturas").style.display = "none";
    document.getElementById("pagWeb").style.display = "block";
    document.getElementById("userNameComputer").innerHTML = userData.username;
    document.getElementById("userNameTablet").innerHTML = userData.username;
}

function cerrarSesion() {
    if (confirm("Seguro que quieres cerrar sesión?")) {
        document.getElementById("pagWeb").style.display = "none";
        document.getElementById("pagInicio").style.display = "block";
        userEmail = "inputEmail";
        userData = null;
        location.reload();
    }
}

function enviarEmail(){
    window.open('mailto:test@example.com');
}

function descargarExcel(id_tabla){
    var tmpElemento = document.createElement('a');
    var data_type = 'data:application/vnd.ms-excel';
    var tabla_div = document.getElementById(id_tabla);
    var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
    tmpElemento.href = data_type + ', ' + tabla_html;
    tmpElemento.download = 'calificaciones.xls';
    tmpElemento.click();
}

function mostrarGraficas() {
    var table = null;
    var columns = 0;
    var dataPoints_array = [];

    if (!(userData.rol === "Estudiante")) {
        document.getElementById("table1").style.display = "none";
        document.getElementById("boton_descargar").style.display = "none";
        document.getElementById("boton_grafica").style.display = "none";
        document.getElementById("boton_volver").style.display = "block";
        document.getElementById("grafica1").style.display = "block";

        table = document.getElementById("table1");
        columns = table.rows[0].cells.length - 1;
        var estudiante = "";
        var notaMedia = 0;

        for (var i = 1, row; row = table.rows[i]; i++) {
            estudiante = "";
            notaMedia = 0;
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j === 0) estudiante = col.innerHTML;
                else notaMedia += parseFloat(col.innerHTML);
            }
            notaMedia /= columns;
            dataPoints_array.push({ y: notaMedia, label: estudiante });
        }

        var chart = new CanvasJS.Chart("grafica1", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title: {
                text: "Nota media por estudiante"
            },
            axisY: {
                title: "Calificación"
            },
            data: [{
                type: "column",
                showInLegend: true,
                legendMarkerColor: "grey",
                legendText: "Estudiantes",
                dataPoints: dataPoints_array
            }]
        });
        chart.render();

    } else {
        document.getElementById("table2").style.display = "none";
        document.getElementById("boton_descargar_st").style.display = "none";
        document.getElementById("boton_grafica_st").style.display = "none";
        document.getElementById("boton_volver_st").style.display = "block";
        document.getElementById("grafica2").style.display = "block";
        

        table = document.getElementById("table2");
        columns = table.rows[0].cells.length - 1;
        var actividades = new Array(columns);
        var notas = new Array(columns);

        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 1, col; col = row.cells[j]; j++) {
                if (i == 0) actividades[j - 1] = col.innerHTML;
                else notas[j - 1] = parseFloat(col.innerHTML);
            }
        }

        for (var i = 0; i < columns; i++) {
            dataPoints_array.push({ y: notas[i], label: actividades[i] });
        }

        var chart = new CanvasJS.Chart("grafica2", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title: {
                text: "Mis calificaciones"
            },
            axisY: {
                title: "Nota"
            },
            data: [{
                type: "column",
                showInLegend: true,
                legendMarkerColor: "grey",
                legendText: "Actividades",
                dataPoints: dataPoints_array
            }]
        });
        chart.render();
    }
}

function volverCalificaciones(){
    if (!(userData.rol === "Estudiante")) {
        document.getElementById("table1").style.display = "";
        document.getElementById("boton_descargar").style.display = "block";
        document.getElementById("boton_grafica").style.display = "block";
        document.getElementById("grafica1").style.display = "none";
        document.getElementById("boton_volver").style.display = "none";
    } else {
        document.getElementById("table2").style.display = "";
        document.getElementById("boton_descargar_st").style.display = "block";
        document.getElementById("boton_grafica_st").style.display = "block";
        document.getElementById("grafica2").style.display = "none";
        document.getElementById("boton_volver_st").style.display = "none";
    }
}


function commentBox(id_comment, result){
	var name = userData.name + " " + userData.surname;
    var comment = document.getElementById(id_comment).value;

	if(name == "" || comment == ""){
		alert("Los campos marcados con * son obligatorios!");
	}else{
        var parent=document.createElement("li");
        var image_element = document.createElement("img");
		var name_element=document.createElement("p");
        var message_element=document.createElement("p");
        var date_element=document.createElement("p");
        
		var txt_name=document.createTextNode(name);
        var txt_message=document.createTextNode(comment);
        var today = new Date();
        var date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date + " - " + time;
        var txt_date = document.createTextNode(dateTime);

        name_element.appendChild(txt_name);
		message_element.appendChild(txt_message);
        date_element.appendChild(txt_date);

        parent.appendChild(image_element);
        parent.appendChild(name_element);
        parent.appendChild(message_element);
        parent.appendChild(date_element);

        image_element.setAttribute("src", "images/perfil.jpg"); 
        image_element.setAttribute("class", "forumProfile"); 
        name_element.setAttribute("class", "data");
        message_element.setAttribute("class", "forumMessage");
        
		document.getElementById(result).appendChild(parent);
	}
}

function addActivitie(id_comment, result){
	var name = userData.name + " " + userData.surname;
    var comment = document.getElementById(id_comment).value;

	if(comment == ""){
		alert("Los campos marcados con * son obligatorios!");
	}else{
        var parent=document.createElement("li");
        var message_element=document.createElement("p");
        
        var txt_message=document.createTextNode(comment);

		message_element.appendChild(txt_message);

        parent.appendChild(message_element);

        message_element.setAttribute("class", "data");
        
		document.getElementById(result).appendChild(parent);
	}
}

// checkCookie comprueba si existe una cookie registrada con el correo
// introducido. Si no existe == no está registrado. Si existe pero
// la contraseña no coindide == contraseña incorrecta. Si coincide == login. 
// Se ejecuta tras pulsar "iniciar sesión" en el formulario de login
function checkCookie() {
    var inputEmail = document.getElementById("emailLogin").value;
    var inputPass = document.getElementById("passLogin").value;
    if(inputEmail === "" || inputPass === "") {
        alert("Por favor, rellene todos los campos");
        return false;
    }
    var obj = findCookie(inputEmail);
    if (obj === null) {
        alert("El correo electrónico introducido no está dado de alta. Por favor, regístrese.");
        return false;
    }
    else if (obj.password === inputPass) {
        userEmail = inputEmail;
        userData = obj;
        changeWeb1();
        if (userData.rol === "Estudiante") showStudent();
    }
    else {
        alert("La contraseña es incorrecta");
    }
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";secure ;path=/";
}


// findCookie busca la cookie según su nombre (el email). Si la encuentra devuelve un 
// objeto (JSON) con el valor de la cookie, si no devuelve null.
function findCookie(emailValue) {
    var tag = emailValue + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    if (decodedCookie.length === 0) return null;
    var ca = decodedCookie.split(';'); // ca es un array, en cada posición guardamos una cookie
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') { //obviar espacios
            c = c.substring(1);
        }
        if (c.indexOf(tag) === 0) { // encontrada una cookie asignada al email introducido, devuelvo su valor (obj JSON)
            var JSONstring = c.substring(tag.length, c.length);
            return JSON.parse(JSONstring);
        }
    }
    return null;
}

// saveCookies comprueba que el correo especificado no está ya registrado
// luego comprueba que se han rellenado todos los campos y, finalmente,
// los guarda como objeto JSON en una cookie (cname = email; cvalue = JSON)
// se ejecuta tras pulsar "guardar" en el formulario de registro
function saveCookies() {
    var vEmail = document.getElementById("email").value;
    if (!(vEmail === "") && (findCookie(vEmail) !== null)) {
        alert("El correo especificado ya está registrado por otra cuenta, por favor introduzca uno válido");
        return false;
    }

    var vName = document.getElementById("name").value;
    var vSurname = document.getElementById("surname").value;
    var vUsername = document.getElementById("usrname").value;
    var vNIA = document.getElementById("nia").value;
    var vBirthdate = document.getElementById("bornDate").value;
    var vId = document.getElementById("dni").value;
    var vRol = document.getElementById("rol").value;
    var vLang = document.getElementById("language").value;
    var vPassword = document.getElementById("pass").value;
    var vGrado = document.getElementById("grade").value;

    if (vEmail === "" || vName === "" || vSurname === "" || vUsername === "" || vNIA === "" || vBirthdate === "" || vId === "" || vRol === "" || vPassword === "") {
        alert("Por favor, rellene todos los campos");
        return false;
    } else {
        var obj = { name: vName, surname: vSurname, username: vUsername, NIA: vNIA, birthdate: vBirthdate, id: vId, rol: vRol, lang: vLang, password: vPassword, grado: vGrado };
        setCookie(vEmail, JSON.stringify(obj));
    }
}

window.addEventListener('resize', showStudentPhone);