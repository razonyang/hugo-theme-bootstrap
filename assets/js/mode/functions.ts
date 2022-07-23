export function getPreferMode(): string {
    if (
      window
        .getComputedStyle(document.body)
        .getPropertyValue('--mode')
        .toString()
        .trim() === 'dark'
    ) {
      return 'dark';
    }
    return 'light';
}
