function wrapValue<T>(value: T): { data: T } {
  return { data: value };
}

const num = wrapValue<number>(5);
const str = wrapValue("hello");
