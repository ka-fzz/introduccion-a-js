const $botonEnviar = document.querySelector('#boton-enviar')
const $saludoUsuario = document.querySelector('#bienvenido')
const $identificacion = document.querySelector('#texto-identificacion')

$botonEnviar.onclick = function () {
  const $primerNombre = document.querySelector('#primer-nombre-usuario').value
  const $segundoNombre = document.querySelector('#segundo-nombre-usuario').value
  const $apellidoUsuario = document.querySelector('#apellido-usuario').value
  const $edadUsuario = document.querySelector('#edad-usuario').value

  $identificacion.innerHTML = `Te identificaste como ${
    $primerNombre + ' ' + $segundoNombre + ' ' + $apellidoUsuario
  }, de ${$edadUsuario} años.`
  $saludoUsuario.innerHTML += ' ' + $primerNombre

  return false
}
