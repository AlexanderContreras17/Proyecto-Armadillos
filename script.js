function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  function showConfirmationCard() {
    // Ocultar el formulario principal
    document.querySelector('.attendance-list').style.display = 'none';
  
    // Darle efecto de desenfoque al fondo
    document.querySelector('.main').style.filter = 'blur(5px)';

    //el siguiente codigo va en el html, hay que modificar las etiquetas <I></I> de las tablas para poder mandar a llamar la funcion
  //   <button
  //   class="cancel-button"
  //   onclick="showConfirmationCard()"
  // >
  //   <!-- Agregar el evento onclick aquí -->
  //   <i
  //     class="fas fa-trash-alt icon-eliminar"
  //     title="Eliminar"
  //   ></i>
  // </button>
  }
  