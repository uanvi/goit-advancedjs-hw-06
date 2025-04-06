// Функція приймає рядок і нічого не повертає (тип void)
function showMessage(message: string): void {
  console.log(message);
}

// Функція приймає два числа і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція нічого не повертає, бо викидає помилку — тип never
function customError(): never {
  throw new Error('Error');
}

export {};
