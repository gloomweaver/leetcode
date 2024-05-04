export function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }

  return typeof obj !== "object"
    ? Object(obj) instanceof classFunction
    : obj instanceof classFunction;
}
