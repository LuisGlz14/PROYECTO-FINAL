import { SnackbarService } from './snackbar.service';
import { TexttospeechService } from './texttospeech.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user: User;

  constructor(
    private db: AngularFirestore,
    private auth: AngularFireAuth,
    private tts: TexttospeechService,
    private snackBarService: SnackbarService
  ) { }

  setUser(user: User) { this.user = user; }
  getUser(): User { return this.user; }
  getUsuarioConectado() { return this.auth.user; }
  logout() { this.auth.signOut(); }

  getUserDB(username: string) {
    const query = this.db.collection<User>('users', ref => ref.where('username', '==', username));
    return query.valueChanges();
  }

  crearNuevoUsuario(user: User, password: string) {
    return this.auth.createUserWithEmailAndPassword(user.email, password);
  }

  emailPasswdLogin(correo: string, passwd: string) {
    return this.auth.signInWithEmailAndPassword(correo, passwd);
  }

  agregarUsuario(user: User) {
    this.db.collection('users').doc(user.username).set(user)
      .then(exito => {
        window.location.reload();
      })
      .catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.error(errorCode, errorMessage);
        alert('Error al grabar en la base de datos');
        this.snackBarService.openSnackBar('Error al grabar en la base de datos', 'Aceptar');
        this.tts.play('Error al grabar en la base de datos');
      });
  }

  cargarUsuarios() {
    const query = this.db.collection<User>('users',
      ref => ref.orderBy('date', 'asc'));
    return query.valueChanges();
  }

  async updateUser(user: User, passwordNew: string, passwordOld: string) {

    let aux = false;

    await this.emailPasswdLogin(user.email, passwordOld)
      .then(res => {
        this.auth.currentUser.then((usr) => {
          usr.updatePassword(passwordNew);
          aux = true;
        });

        this.db.collection('users').doc(user.username).update({
          name: user.name,
          picture: user.picture
        });
      })
      .catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;

        this.snackBarService.openSnackBar('La contraseña anterior ingresada es incorrecta', 'Aceptar');
        this.tts.play('La contraseña anterior ingresada es incorrecta');
      });

    return new Promise((resolve: any, reject) => {
      resolve(aux);
    });
  }

  crearNuevoPost(post: Post){
    return this.db.collection('users').doc(post.username).collection('posts').doc(post.date.toString()).set(post);
  }

}
