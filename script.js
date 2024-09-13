// Funcion para validar el formulario
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    

    // Prevencion basica de inyeccion (sanitizacion)
    const badInputRegex = /['"<>;]/;

    let isValid = true;
    
    // Validar nombre (sin caracteres especiales)
    const nameRegex = /^[a-zA-Z\s]+$/;
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Limpiar mensajes de error
    clearErrors();
  
    if (!nameRegex.test(name)) {
      document.getElementById("nameError").textContent = "Nombre inválido (solo letras y espacios).";
      isValid = false;
    }
      
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Correo electrónico inválido.";
      isValid = false;
    }
  
    // Validar contraseña
    if (password.length < 8 || badInputRegex.test(password)) {
      document.getElementById("passwordError").textContent = 'La contraseña debe tener al menos 8 caracteres y sin los siguientes caracteres (\' \" < > ;) .';
      isValid = false;      
    }
      
    if (badInputRegex.test(name) || badInputRegex.test(email) || badInputRegex.test(password)) {
      alert("Se han detectado entradas incorrectas. Por favor, revise los datos.");
      isValid = false;
    }
    
    if(isValid){
        alert("Se registro su informacion.");
    }
    return isValid;
  }
  
  // Funcion para limpiar los mensajes de error
  function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  }
  