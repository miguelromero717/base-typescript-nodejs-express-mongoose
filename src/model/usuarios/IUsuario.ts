/** 
 * Interface para el Schema Usuario
 * 
 * @author miguelromero717
 */
interface IUsuario {
    nombres: string;
    apellidos: string;
    correo: string;
    username: string;
    password: string;
    activo?: boolean;
}