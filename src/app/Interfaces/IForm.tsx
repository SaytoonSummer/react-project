//Creación del objeto "Client" para uso posterior tanto en Firebase como en los componentes
export interface Client{
  nombre: string,
  apellido: string,
  edad: number,
  fechaNacimiento: string,
  telefono: number,
  email: string,
  mensaje: string,
  tipoEnvio: string,
  idCliente?: string,
}