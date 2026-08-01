export function runAndClose(action: () => void, onOpenChange: (open: boolean) => void) {
  action();
  onOpenChange(false);
}

export function isCurrentValue<T>(current: T, value: T) {
  return Object.is(current, value);
}
