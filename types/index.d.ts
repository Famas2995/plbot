export interface Command {
  name: string;
  desc: string;
  run: (msg: any, args: string[]) => void;
}
