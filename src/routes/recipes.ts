import express from "express";
import { index, update, del, create, get } from "../controllers/recipes";
import wrap from "../lib/async-error-catcher";

const router = express.Router();

router.param("id", (_req, res, next, id): void => {
  res.locals.id = id;
  next();
});

// https://expressjs.com/en/api.html#router.route
router
  .route("/:id")
  // .all((req, res, next): void => {
  //   // Something for everything
  //   next();
  // })
  .get(wrap(get))
  .patch(wrap(update))
  .delete(wrap(del));

router
  .route("/")
  .post(wrap(create))
  .get(wrap(index));

export default router;
