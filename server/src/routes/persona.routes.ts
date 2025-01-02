import { getPersonas, getPersonaById, updatePersona, deletePersona } from '../controllers/persona.controllers';
import { Router } from 'express';

export const personaRouter = Router();

personaRouter.get('/personas', getPersonas);

personaRouter.get('/persona/:id', getPersonaById);

personaRouter.patch('/persona', updatePersona);

personaRouter.patch('/deletepersona', deletePersona);