import { IBaseSelector } from "./IBaseSelector";
export abstract class BaseSelector<TDelegate>
  implements IBaseSelector<TDelegate>
{
  base: { [key in keyof TDelegate]: boolean } = this.initializeWithTrue();
  find: { [key in keyof TDelegate]: boolean } = this.base;
  findOne: { [key in keyof TDelegate]: boolean } = this.base;
  findById: { [key in keyof TDelegate]: boolean } = this.base;
  create: { [key in keyof TDelegate]: boolean } = this.base;
  update: { [key in keyof TDelegate]: boolean } = this.base;
  delete: { [key in keyof TDelegate]: boolean } = this.base;

  protected abstract initializeWithTrue(): {
    [key in keyof TDelegate]: boolean;
  };
}
