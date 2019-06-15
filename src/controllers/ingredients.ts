import Ingredient from "../models/ingredient";
import { Response, Request, NextFunction } from "express";
import { pick } from "lodash";

interface IngredientParams {
  name: string;
  description?: string;
}

function permit(json: any): IngredientParams {
  return pick(json.ingredient, ["name", "description"]);
}

export async function index(req: Request, res: Response): Promise<void> {
  const ingredients = await Ingredient.findAll();
  const json = ingredients.map(r => r.toJSON());
  res.json({ ingredients: json });
}

export async function create(req: Request, res: Response): Promise<void> {
  const ingredient = await Ingredient.create(permit(req.body));
  res.json({ ingredient: ingredient.toJSON() });
}

export async function get(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const ingredient = await Ingredient.findByPk(res.locals.id);
  if (!ingredient) {
    next(); // intentionally 404
    return;
  }
  res.json({ ingredient: ingredient.toJSON() });
}

export async function update(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const ingredient = await Ingredient.findByPk(res.locals.id);
  if (!ingredient) {
    next(); // intentionally 404
    return;
  }
  await ingredient.update(permit(req.body));
  res.json({ ingredient: ingredient.toJSON() });
}

export async function del(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const ingredient = await Ingredient.findByPk(res.locals.id);
  if (!ingredient) {
    next(); // intentionally 404
    return;
  }
  await ingredient.destroy();
  res.status(204).send();
}
