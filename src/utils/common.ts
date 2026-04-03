export const debounce = <T extends Callback>(callback: T, wait: number) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => callback(...args), wait);
  };
}
