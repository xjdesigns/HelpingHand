export const WorkerFunc = (x: number, y: number):  number => {
  return x + y
}

export function WorkerClass<Worker> (thing: Worker) {
  return thing
}

export const Workerfn1 = WorkerClass<string>('hello world')
export const Workerfn2 = WorkerClass<number>(10)

export type DataObj = {
  name: string;
  title?: string;
}

export interface ThingArgs {
  data: DataObj[];
  fn?: (arg: {}[]) => {} | undefined;
}

export const Thing = ({ data, fn }: ThingArgs) => {
  const d: {}[] = data.filter(d => d.name.includes('name'))
  return fn ? fn(d) : () => {}
}

const data = [{
  name: 'Jason'
}]

export const TT = Thing({ data })
