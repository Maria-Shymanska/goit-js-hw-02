function formatMessage(message, maxLength) {
  // Перевірка, чи довжина рядка перевищує maxLength
    if (message.length > maxLength) {
      // Якщо перевищує, обрізаємо рядок та додаємо "..."
        return message.slice(0, maxLength) + "...";
    } else {
      // Якщо нi, тоді повертаємо початковий рядок без змін
      return message;
    }
}


// Перевірка роботи функції за допомогою прикладів
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
