// basic command structure where a description is unnecessary
export interface Command {
  name: string;
  desc?: string;
  run: void;
}
