import Recipe from "../models/recipe";
import { Response, Request, NextFunction } from "express";
import { pick } from "lodash";

interface RecipeParams {
  name: string;
  copy?: string;
}

function permit(json: any): RecipeParams {
  return pick(json.recipe, ["name", "copy"]);
}

export async function index(req: Request, res: Response): Promise<void> {
  const recipes = await Recipe.findAll();
  const json = recipes.map(r => r.toJSON());
  res.json({ recipes: json });
}

export async function create(req: Request, res: Response): Promise<void> {
  const recipe = await Recipe.create(permit(req.body));
  res.json({ recipe: recipe.toJSON() });
  // TODO handle error
}

export async function get(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const recipe = await Recipe.findByPk(res.locals.id);
  if (!recipe) {
    next(); // intentionally 404
    return;
  }
  res.json({ recipe: recipe.toJSON() });
}

export async function update(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const recipe = await Recipe.findByPk(res.locals.id);
  if (!recipe) {
    next(); // intentionally 404
    return;
  }
  await recipe.update(permit(req.body));
  res.json({ recipe: recipe.toJSON() });
}

export async function del(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const recipe = await Recipe.findByPk(res.locals.id);
  if (!recipe) {
    next(); // intentionally 404
    return;
  }
  await recipe.destroy();
  res.status(204).send();
}
