import express from "express";
import { index, update, del, create, get } from "../controllers/recipes";

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
  .get(get)
  .patch(update)
  .delete(del);

router
  .route("/")
  .post(create)
  .get(index);

export default router;
