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
    if (userData.rol === "Estudiante") showStudent();
    else showTeacher();
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
    document.getElementById("column_mid_activities_student").style.display = "none";
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
    document.getElementById("column_mid_activities_student").style.display = "none";
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
    document.getElementById("column_mid_activities_student").style.display = "none";
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
    document.getElementById("column_mid_activities_student").style.display = "none";
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
    document.getElementById("column_mid_activities_student").style.display = "none";
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
    document.getElementById("column_mid_activities_student").style.display = "none";
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
    document.getElementById("column_mid_activities_student").style.display = "none";
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
    document.getElementById("column_mid_activities_student").style.display = "none";
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
    document.getElementById("column_mid_activities_student").style.display = "none";
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
    document.getElementById("column_mid_activities").style.display = "none";
    document.getElementById("column_mid_activities_student").style.display = "none";

    volverCalificaciones();
    loadGradesTeacher();
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
    document.getElementById("column_mid_activities_student").style.display = "none";
    document.getElementById("boton_guardar_actividad").style.display = "none";
    document.getElementById("boton_volver_actividad").style.display = "none";
    volverActividades();
}

function showActivitiesStudent(){
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
    document.getElementById("boton_volver_st").style.display = "none";
    document.getElementById("column_mid_activities").style.display = "none";
    document.getElementById("column_mid_activities_student").style.display = "block";
    volverActividades();
    listActivitiesStudent();
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
    document.getElementById("column_mid_activities").style.display = "none";
    document.getElementById("column_mid_activities_student").style.display = "none";

    volverCalificaciones();
    loadGradesStudent();
}

function showStudent(){
    document.getElementById("columnLeftComputerStudent").style.display = "block";
    document.getElementById("columnLeftComputer").style.display = "none";
}

function showTeacher(){
    document.getElementById("columnLeftComputerStudent").style.display = "none";
    document.getElementById("columnLeftComputer").style.display = "block";
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
    document.getElementById("userNameComputer1").innerHTML = userData.username;
    document.getElementById("userNameTablet1").innerHTML = userData.username;
    activityStudentSelection();
}

function changeWeb2(){
    document.getElementById("pagAsignaturas").style.display = "none";
    document.getElementById("pagWeb").style.display = "block";
    showCourse();
    document.getElementById("userNameComputer2").innerHTML = userData.username;
    document.getElementById("userNameTablet2").innerHTML = userData.username;
    activityStudentSelection();
}

function cerrarSesion() {
    if (confirm("Seguro que quieres cerrar sesión?")) {
        document.getElementById("pagWeb").style.display = "none";
        document.getElementById("pagAsignaturas").style.display = "none";
        document.getElementById("pagInicio").style.display = "block";
        userEmail = "inputEmail";
        userData = null;
        //location.reload();
    }
}

function enviarEmail(profesorActividadStudent){
    var email = document.getElementById(profesorActividadStudent);
    var mailto_link = 'mailto:' + email
    window.open(mailto_link);
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

    if (userData.rol == "Profesor") {
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
        document.getElementById("gradesTable").style.display = "none";
        document.getElementById("boton_descargar_st").style.display = "none";
        document.getElementById("boton_grafica_st").style.display = "none";
        document.getElementById("boton_volver_st").style.display = "block";
        document.getElementById("grafica2").style.display = "block";
        

        table = document.getElementById("gradesTable");
        columns = table.rows.length - 1;
        var actividades = new Array(columns);
        var notas = new Array(columns);
        var k = 0;
        for (var i = 1, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j == 0) actividades[k] = col.innerHTML;
                else notas[k] = parseFloat(col.innerHTML);
            }
            k++;
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
        document.getElementById("gradesTable").style.display = "";
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
        let day = new Date().getDate();
        if (day < 10){
            day = "0" + day;
        }
        let month = new Date().getMonth() + 1;
        if (month < 10){
            month = "0" + month;
        }
        let year = new Date().getFullYear();
        let hour = new Date().getHours();
        if (hour < 10){
            hour = "0" + hour;
        }
        let minute = (new Date().getMinutes());
        if (minute < 10){
            minute = "0" + minute;
        }
        let today = (day + "/" + month + "/" + year);
        let time = (hour + ":" + minute);
        let date = (today + " - " + time);

        var parent = document.createElement("li");
        var image_element = document.createElement("img");
		var name_element = document.createElement("p");
        var message_element = document.createElement("p");
        var date_element = document.createElement("p");
        
		var txt_name = document.createTextNode(name);
        var txt_message = document.createTextNode(comment);
        var txt_date = document.createTextNode(date);

        name_element.appendChild(txt_name);
        //message_element.style.whiteSpace = "pre-wrap";
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
        alert("El comentario ha sido publicado correctamente");
	}
}

function commentBox2(id_comment, result){
	var name = userData.name + " " + userData.surname;
    var comment = document.getElementById(id_comment).value;

	if(name == "" || comment == ""){
		alert("Los campos marcados con * son obligatorios!");
	}else{
        let day = new Date().getDate();
        if (day < 10){
            day = "0" + day;
        }
        let month = new Date().getMonth() + 1;
        if (month < 10){
            month = "0" + month;
        }
        let year = new Date().getFullYear();
        let hour = new Date().getHours();
        if (hour < 10){
            hour = "0" + hour;
        }
        let minute = (new Date().getMinutes());
        if (minute < 10){
            minute = "0" + minute;
        }
        let today = (day + "/" + month + "/" + year);
        let time = (hour + ":" + minute);
        let date = (today + " - " + time);

        var parent=document.createElement("li");
		var name_element=document.createElement("p");
        var message_element=document.createElement("p");
        var date_element = document.createElement("p");

		var txt_name=document.createTextNode(name);
        var txt_message=document.createTextNode(comment);
        var txt_date = document.createTextNode(date);

        name_element.appendChild(txt_name);
        message_element.appendChild(txt_message);
        date_element.appendChild(txt_date);

        parent.appendChild(name_element);
        parent.appendChild(message_element);
        parent.appendChild(date_element);

        name_element.setAttribute("class", "dataActivity");
        message_element.setAttribute("class", "forumMessage");
        date_element.setAttribute("class", "forumMessage");
        
        document.getElementById(result).appendChild(parent);
        alert("La actividad se ha subido correctamente");
	}
}

function volverForo(id_tema_foro){
    document.getElementById("column_mid_forum").style.display = "block";
    document.getElementById(id_tema_foro).style.display = "none";
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
    var obj = findUser(inputEmail);
    if (obj == null) {
        alert("El correo electrónico introducido no está dado de alta. Por favor, regístrese.");
        return false;
    }
    else if (obj.password === inputPass) {
        userEmail = inputEmail;
        userData = obj;
        changeWeb1();
    }
    else {
        alert("La contraseña es incorrecta");
    }
}

function setCookie(cname, cvalue) {
    console.log("Setting cookie: " + cname + "=" + cvalue + ";secure ;path=/");
    document.cookie = cname + "=" + cvalue + ";secure ;path=/";
}

function setUser(vEmail, vrol, obj){
    var newUser = "{ \"" + vEmail + "\" :" + JSON.stringify(obj) + "}";
    var currentUsers;
    if(vrol === "Estudiante"){
        currentUsers = findCookie("estudiantes"); 
        if(currentUsers==null) setCookie("estudiantes", newUser); 
        else {
            currentUsers[vEmail] = obj;
            setCookie("estudiantes",  JSON.stringify(currentUsers)); 
        }
    } else{
        currentUsers = findCookie("profesores");
        if(currentUsers==null) setCookie("profesores", newUser); 
        else {
            currentUsers[vEmail] = obj;
            setCookie("profesores",  JSON.stringify(currentUsers)); 
        }
    }
}

// findCookie busca la cookie según su tipo (estudiantes, profesores, actividades). Si la encuentra devuelve un 
// objeto (JSON) con el valor de la cookie (todos los estudiantes, todos los profesores,...), si no devuelve null.
function findCookie(type) {
    var tag = type + "=";
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
            console.log("Found cookie: " + JSONstring);
            return JSON.parse(JSONstring);
        }
    }
    return null;
}

// comprueba si el usuario emailValue está registrado (tiene que buscar en estudiantes y en profesores)
// si no está registrado devuelve null, si lo está devuelve un objeto con sus datos
function findUser(emailValue) {
    var profesores = findCookie("profesores");
    if (profesores != null) {
        var user = findKeyValue(emailValue, profesores);
        if(user != null) return user;
    }
    var estudiantes = findCookie("estudiantes");
    if (estudiantes != null) {
        var user = findKeyValue(emailValue, estudiantes);
        if(user != null) return user;
    }
    return null;
}

function findKeyValue(key, myObject) { 
    var keysArray= Object.keys(myObject); // get array of keys
    if(keysArray.length === 0) return null;
    for(var i = 0; i < keysArray.length; i++) {
        if(keysArray[i]===key) return myObject[key];
    }
    return null;
}

// saveCookies comprueba que el correo especificado no está ya registrado
// luego comprueba que se han rellenado todos los campos y, finalmente,
// los guarda como objeto JSON en una cookie (cname = email; cvalue = JSON)
// se ejecuta tras pulsar "guardar" en el formulario de registro
function saveCookies() {
    var vEmail = document.getElementById("email").value;
    if (!(vEmail === "") && (findUser(vEmail) !== null)) {
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
        var userObj = { name: vName, surname: vSurname, username: vUsername, NIA: vNIA, birthdate: vBirthdate, id: vId, rol: vRol, lang: vLang, password: vPassword, grado: vGrado };
        setUser(vEmail, vRol, userObj); // registrar como estudiante o como profesor
        cambiarLogIn();
        document.getElementById("form_registro").reset();
    }
}

if(userData != null) window.addEventListener('resize', showStudentPhone);



// ACTIVIDADES 
// -------------------------------------------------------------------------------------------------------------------

function displayActivityForm(){ 
    document.getElementById("crearActividad").style.display = "block";
    document.getElementById("boton_volver_actividad").style.display = "block";
    document.getElementById("boton_guardar_actividad").style.display = "block";
    document.getElementById("boton_crear_actividad").style.display = "none";
    document.getElementById("activitiesList").style.display = "none";
    document.getElementById("activityInfo").style.display = "none";
}

function volverActividades(){
    document.getElementById("crearActividad").style.display = "none";
    document.getElementById("boton_volver_actividad").style.display = "none";
    document.getElementById("boton_guardar_actividad").style.display = "none";
    document.getElementById("boton_crear_actividad").style.display = "block";
    document.getElementById("activitiesList").style.display = "block";
    document.getElementById("activityInfo").style.display = "none";
    listAllActivities();
}

function volverActividadesStudent(idMostradoAntes){
    document.getElementById("activitiesStudent").style.display = "block";
    document.getElementById(idMostradoAntes).style.display = "none";
    document.getElementById("activityInfoStudent").style.display = "none";
}

var currentActivity;

function showActivityInfo(actName){
    currentActivity = actName;
    activityInfo(actName);
    document.getElementById("activityInfo").style.display = "block";
    document.getElementById("crearActividad").style.display = "none";
    document.getElementById("boton_volver_actividad").style.display = "block";
    document.getElementById("boton_guardar_actividad").style.display = "none";
    document.getElementById("boton_crear_actividad").style.display = "none";
    document.getElementById("activitiesList").style.display = "none";
}

function showActivityInfo2(actName, showingResult, resultId){
    currentActivity = actName;
    var objActivities = findCookie("actividades");
    var objActivity = objActivities[actName];
    var teacher = objActivity.profesor;
    var endDate =  objActivity.fecha;
    document.getElementById("infoActividadTituloStudent").innerHTML = actName;
    document.getElementById("profesorActividadStudent").innerHTML = "Profesor: " + teacher;
    document.getElementById("fechaActividadStudent").innerHTML = "Fecha límite de entrega: " + endDate;
    document.getElementById("activityInfoStudent").style.display = "block";
    document.getElementById(showingResult).style.display = "block";
    var botonActividades = document.getElementById("enviarActividad");
    botonActividades.onclick = function() {commentBox2("commentActivity", resultId)};
    document.getElementById("activitiesStudent").style.display = "none";
    var botonVolverActividades = document.getElementById("volverActividad");
    botonVolverActividades.onclick = function() {volverActividadesStudent(showingResult)};
}

// recuperar valores del form
// creamos un objeto studentsList de la forma : {estudiante1 : "", estudiante2 : "" ---} 
// cuando califiquemos la actividad lo iremos rellenando
function guardarActividad() {
    var actName = document.getElementById("activityName").value;
    var endDate = document.getElementById("endDate").value;
    var selectedOptions = getSelectValues(document.getElementById("studentSelection"));
    var studentsList = {};
    for (var i = 0; i < selectedOptions.length; i++) {
        studentsList[selectedOptions[i]] = "notGraded";
    }
    setActivity(actName, studentsList, endDate);
    volverActividades();
}

function setActivity(actName, students, endDate) {
    var teacherData = userData.name + " " + userData.surname + ", " + userData.NIA;
    var actAtributtes = {profesor: teacherData, estudiantes: students, fecha: endDate};
    var currentActivities = findCookie("actividades"); // busca la cookie "actividades", si la encuentra devuelve el valor de la cookie (obj json de actividades) y si no dev null
    if (currentActivities == null) setCookie("actividades",  "{ \"" + actName + "\": " + JSON.stringify(actAtributtes) + "}")
    else {
        currentActivities[actName] = actAtributtes; //si currentActivities no contiene la actividad nueva, la añade como un campo mas del JSON (y si ya estaba se actualiza) (como myarray.push(newAct))
        setCookie("actividades", JSON.stringify(currentActivities));
    }
}

// Return an array of the selected option values
// select is an HTML select element
function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }

// Pasar la lista de estudiantes a un formulario de opciones multiples
function activityStudentSelection(){
    var objStudents = findCookie("estudiantes");     // Obtener la lista de estudiantes
    var arrayStudentEmails= Object.keys(objStudents); // get array of keys (emails)
    var selection = document.getElementById("studentSelection");
    selection.innerHTML = "";
    for(var i = 0; i < arrayStudentEmails.length; i++){
        var studentFullName = objStudents[arrayStudentEmails[i]].name + " " + objStudents[arrayStudentEmails[i]].surname + ", " + objStudents[arrayStudentEmails[i]].NIA + ", " + arrayStudentEmails[i];
        var option = document.createElement("OPTION");
        option.text = studentFullName;
        selection.add(option);
    }
}

var createClickHandler = function(arg) {    
    return function(){
        showActivityInfo(arg);
    }
}

function listAllActivities(){
    var list = document.getElementById("listActivities");
    list.innerHTML = "";
    var objActivities = findCookie("actividades");
    if(objActivities != null){          
        var arrayActivities = Object.keys(objActivities); 
        for(var i = 0; i < arrayActivities.length; i++){
            var node = document.createElement("LI");
            var textnode = document.createTextNode(arrayActivities[i]);
            node.appendChild(textnode); // Append the text to <li>
            node.onclick = createClickHandler(arrayActivities[i]);
            list.appendChild(node);     // Append <li> to <ul> with id="myList"
        }
    }
}

var createClickHandler2 = function(arg1,arg2, arg3) {    
    return function(){
        showActivityInfo2(arg1, arg2, arg3);
    }
}

function listActivitiesStudent(){
    var studentData = userData.name + " " + userData.surname + ", " + userData.NIA + ", " + userEmail;
    var list = document.getElementById("activitiesListStudent");
    list.innerHTML = "";
    var objActivities = findCookie("actividades");
    if(objActivities != null){
        var keyArrayActivities = Object.keys(objActivities);
        var arrayActivities = [];
        var listResults = document.getElementById("results");
        for(var i = 0; i < keyArrayActivities.length; i++){
            var objActividad = objActivities[keyArrayActivities[i]];
            var objEstudiantes = objActividad.estudiantes;
            var keyArrayEstudiantes = Object.keys(objEstudiantes);
            for(var j = 0; j < keyArrayEstudiantes.length; j++){
                if(keyArrayEstudiantes[j] === studentData){
                    arrayActivities.push(keyArrayActivities[i]);
                }
            }
        }
        for(var k = 0; k < arrayActivities.length; k++){
            var resultList = document.createElement("UL");
            resultList.id = "resultList" + k;
            var result = document.createElement("LI");
            result.id = "resultListStudent" + k;
            resultList.appendChild(result);
            resultList.style.display = "none";
            listResults.appendChild(resultList);

            var node = document.createElement("LI");
            var textnode = document.createTextNode(arrayActivities[k]);
            node.appendChild(textnode); // Append the text to <li>
            node.onclick = createClickHandler2(arrayActivities[k], resultList.id, result.id);
            list.appendChild(node);     // Append <li> to <ul> with id="myList"
        }
    }

}

function activityInfo(actName){
    var objActivities = findCookie("actividades");
    var objActivity = objActivities[actName];
    var teacher = objActivity.profesor;
    var endDate =  objActivity.fecha;

    document.getElementById("infoActividadTitulo").innerHTML = actName;
    document.getElementById("profesorActividad").innerHTML = "Profesor: " + teacher;
    document.getElementById("fechaActividad").innerHTML = "Fecha límite de entrega: " + endDate;

    activityGradesTable(actName, "tablaActividad", "Estudiante");

}

function activityGradesTable(actName, idTable, firstTitle){
    var objActivities = findCookie("actividades");
    var objActivity = objActivities[actName];
    var objEstudiantes = objActivity.estudiantes; // {"c@c.c":"notGraded" , "a@a.a": "" , "b@b.a": ""} => [{"c@c.c":""} , {"a@a.a": ""} , {"b@b.a": ""}]
    var arrayEst = Object.keys(objEstudiantes); // ["c@c.c", "c@c.c", "c@c.c"]

    var arrayTable = [];
    for(var i = 0; i < arrayEst.length ; i++){
        var objString = "{ \"" + arrayEst[i] + "\" : " + JSON.stringify(objEstudiantes[arrayEst[i]]) + "}";
        arrayTable.push(JSON.parse(objString));
    }

    let table =  document.getElementById(idTable);
    table.innerHTML= "";
    generateTable(table, arrayTable); // generate the table first. Uso actName para ponerle un id a las celdas...
    generateTableHead(table, firstTitle); // then the head
}

// +++++++++++++++++++++++++++++++++++++++++++++++++

function generateTableHead(table, firstTitle) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    let th = document.createElement("th");
    let text = document.createTextNode(firstTitle);
    th.appendChild(text);
    row.appendChild(th);
    let th2 = document.createElement("th");
    let text2 = document.createTextNode("Calificación");
    th2.appendChild(text2);
    row.appendChild(th2);
  }


var clickHandler_grading = function(id) {    
    return function(){
        studentGraded = id;
        showGradeForm();
    }
  }

   // el id de cada celda de calificación es el nombre de la actividad ("ej3" por ejemplo) + un número (i)
   // solo puede haber una misma actividad con el mismo nombre     var i = 0;

  function generateTable(table, data) {
    for (let element of data) {
        let key = Object.keys(element)[0];
        let row = table.insertRow();
        let cell = row.insertCell();
        let text = document.createTextNode(key);
        cell.appendChild(text);

        let cell2 = row.insertCell();
        let text2 = document.createTextNode(element[key]);
        cell2.appendChild(text2);
        cell2.onclick = clickHandler_grading(key);
    }
  }
  
var studentGraded;

function showGradeForm(){
    document.getElementById("setCalification").style.display = "block"; 
    document.getElementById("calificationForm").reset()
}

function hideGradeForm(){
    document.getElementById("setCalification").style.display = "none"; 
}

function setGrade(){
    if(currentActivity == null || currentActivity == "" ) return false;
    var nota = document.getElementById("calification").value; // al guardar
    // actualizar cookie actividades con la nota guardada
    var activitiesObj = findCookie("actividades");
    var currentActivityObj = activitiesObj[currentActivity];
    var endDate = currentActivityObj.fecha;
    var studentsList = currentActivityObj.estudiantes; // modificarla metiendo la calificación obtenida
    studentsList[studentGraded] = nota;
    setActivity(currentActivity, studentsList, endDate);
    hideGradeForm();
    showActivityInfo(currentActivity);
}

//arrayActivities =  [{"actividad1":"10"} , {"actividad2": "7"} , {"actividad3": "9"}]
function loadGradesStudent(){
    var objActivities = findCookie("actividades");
    var studentData = userData.name + " " + userData.surname + ", " + userData.NIA + ", " + userEmail;

    if(objActivities != null){
        var keyArrayActivities = Object.keys(objActivities);
        var arrayActivities = [];
    
        for(var i = 0; i < keyArrayActivities.length; i++){
            var objActividad = objActivities[keyArrayActivities[i]];
            var objEstudiantes = objActividad.estudiantes;
            var keyArrayEstudiantes = Object.keys(objEstudiantes);
            for(var j = 0; j < keyArrayEstudiantes.length; j++){
                if(keyArrayEstudiantes[j] === studentData){
                    var objGrade = "{ \"" + keyArrayActivities[i] + "\": \""+ objEstudiantes[studentData] + "\"}";
                    console.log("pushing " + objGrade);
                    arrayActivities.push(JSON.parse(objGrade));
                    break;
                }
            }
        }

        let table =  document.getElementById("gradesTable");
        table.innerHTML= "";
        generateTable(table, arrayActivities); // generate the table first. Uso actName para ponerle un id a las celdas...
        generateTableHead(table, "Actividad"); // then the head    
    }
}

//arrayActivities =  [{"actividad1":"10"} , {"actividad2": "7"} , {"actividad3": "9"}]
// y si genero una tabla por cada actividad ????

function loadGradesTeacher(){
    var objActivities = findCookie("actividades");
    var list = document.getElementById("totalActivityTables");
    list.innerHTML = "";
    if(objActivities != null){
        var keyArrayActivities = Object.keys(objActivities);
        for(var i = 0; i < keyArrayActivities.length; i++){
            var tableId = keyArrayActivities[i] + "_id"
            var nodeTable = document.createElement("table");
            nodeTable.id = tableId;

            var node = document.createElement("LI");
            var textnode = document.createTextNode(keyArrayActivities[i]);
            node.appendChild(textnode); // Append the text to <li>
            node.appendChild(nodeTable); 
            list.appendChild(node);    

            activityGradesTable(keyArrayActivities[i], tableId, "Estudiante");
        }
    }      
} 