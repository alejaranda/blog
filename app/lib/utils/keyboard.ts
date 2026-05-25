export function handleKeyboardEvent(
  event: KeyboardEvent,
  callbacks: Record<string, () => void>
): void {
  if (callbacks[event.key]) {
    callbacks[event.key]();
  }
}
