import express from 'express';

// Start temp code

const recipes = ['cat1', 'dog', 'cat', 'zebra'];

// End temp code

const router = express.Router();

router.param('id', (_req, res, next, id): void => {
  res.locals.user = {
    id: id,
    name: 'TJ',
  };
  next();
});

// https://expressjs.com/en/api.html#router.route
router
  .route('/:id')
  .all((req, res, next): void => {
    // Something for everything
    next();
  })
  .get((req, res): void => {
    res.json(res.locals.user);
  })
  .put((req, res, next): void => {
    next(new Error('update'));
  })
  .delete((req, res, next): void => {
    next(new Error('delete'));
  });

router
  .route('/')
  .post((req, res, next): void => {
    // create
    next(new Error('create'));
  })
  .get((req, res): void => {
    res.json(recipes);
  });

export default router;
