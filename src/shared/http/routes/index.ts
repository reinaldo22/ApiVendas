import {Router } from 'express';

const routes = Router();

routes.get('/', (request, response)=>{
    return response.json({message: 'oLA'});
})
export default routes;
