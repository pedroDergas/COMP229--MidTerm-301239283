/* created by Pedro da Silva Dergado
File name: index.js
Student’s Name: Pedro da Silva Dergado
StudentID: 301239283
Date: 10/28/2022
*/
import { Router } from 'express';

let router = Router();

import { DisplayHomePage } from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;