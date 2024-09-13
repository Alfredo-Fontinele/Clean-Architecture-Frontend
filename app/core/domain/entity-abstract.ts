import { randomInt } from "crypto"

export abstract class Entity<T> {
  protected _id: number
  public props: T

  constructor(props: T, id?: number) {
    this._id = id ?? randomInt(1000)
    this.props = props
  }

  get id() {
    return this._id
  }
}
