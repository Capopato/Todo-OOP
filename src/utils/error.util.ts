export function throwError(error: unknown): asserts error is Error {
  if (!(error instanceof Error)) {
    console.log(error);
    throw error;
  }
}
