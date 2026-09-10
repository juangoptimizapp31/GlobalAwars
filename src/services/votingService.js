import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';

import {
  signInAnonymously
} from 'firebase/auth';

import {
  db,
  auth
} from '../firebase/firebase';


// ========================================================
// OBTENER / CREAR USUARIO ANÓNIMO
// ========================================================

export const ensureAnonymousUser = async () => {

  if (auth.currentUser) {
    return auth.currentUser;
  }

  const result = await signInAnonymously(auth);

  return result.user;
};


// ========================================================
// VERIFICAR SI YA VOTÓ EN UNA CATEGORÍA
// ========================================================

export const getVoteStatus = async (categoryId) => {

  try {

    if (!categoryId) {
      throw new Error('categoryId es obligatorio');
    }

    const user = await ensureAnonymousUser();

    const voteId = `${categoryId}_${user.uid}`;

    const voteRef = doc(
      db,
      'votes',
      voteId
    );

    const snapshot = await getDoc(voteRef);

    if (snapshot.exists()) {

      const vote = snapshot.data();

      return {
        success: true,
        status: 'already_voted',
        contestantName: vote.contestantName,
        voterId: user.uid,
        message: 'Ya votaste en esta categoría.'
      };
    }

    return {
      success: true,
      status: 'available',
      voterId: user.uid,
      message: 'Puedes votar.'
    };

  } catch (error) {

    console.error(
      'Error verificando voto:',
      error
    );

    return {
      success: false,
      status: 'error',
      message: 'No fue posible verificar el estado del voto.'
    };
  }
};


// ========================================================
// REGISTRAR VOTO
// ========================================================

export const submitVote = async ({
  categoryId,
  categoryName,
  contestantName
}) => {

  try {

    // -----------------------------------------
    // VALIDACIONES
    // -----------------------------------------

    if (!categoryId) {
      throw new Error('categoryId es obligatorio');
    }

    if (!categoryName) {
      throw new Error('categoryName es obligatorio');
    }

    if (!contestantName) {
      throw new Error('contestantName es obligatorio');
    }


    // -----------------------------------------
    // OBTENER USUARIO ANÓNIMO
    // -----------------------------------------

    const user = await ensureAnonymousUser();


    // -----------------------------------------
    // ID ÚNICO DEL VOTO
    //
    // Una categoría + un usuario = un voto
    // -----------------------------------------

    const voteId = `${categoryId}_${user.uid}`;

    const voteRef = doc(
      db,
      'votes',
      voteId
    );


    // -----------------------------------------
    // COMPROBAR SI YA VOTÓ
    // -----------------------------------------

    const existingVote = await getDoc(voteRef);

    if (existingVote.exists()) {

      const vote = existingVote.data();

      return {
        success: false,
        status: 'already_voted',
        contestantName: vote.contestantName,
        message: 'Ya votaste en esta categoría.'
      };
    }


    // -----------------------------------------
    // GUARDAR VOTO
    // -----------------------------------------

    await setDoc(voteRef, {

      categoryId,

      categoryName,

      contestantName,

      voterId: user.uid,

      createdAt: serverTimestamp()

    });


    // -----------------------------------------
    // RESPUESTA
    // -----------------------------------------

    return {

      success: true,

      status: 'confirmed',

      message: '¡Voto registrado con éxito!',

      contestantName

    };

  } catch (error) {

    console.error(
      'Error registrando voto:',
      error
    );

    return {

      success: false,

      status: 'error',

      message: 'No fue posible registrar tu voto.'

    };
  }
};