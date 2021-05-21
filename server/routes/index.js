const { Router } = require('express');
const submissionsService = require('../services/submissions-service');

const indexRouter = Router();

indexRouter.get('/formsubmissions', async (req, res) => {
    try {
        const submissions = await submissionsService.getAll();
        res.json(submissions);
    } catch (error) {
        console.log(error);
        res.status(500).json('oops');
    }
});

indexRouter.post('/add', async (req, res) => {
    try {
        const submissionsDTO = req.body;
        const submissions = await submissionsService.getAll();
        submissions.push(submissionsDTO);
        await submissionsService.writeNew(submissions);
        res.redirect('/formsubmissions');
    } catch (error) {
        console.log(error);
        res.status(500).json('oops');
    }
});

module.exports = indexRouter;