export function formatDateToDDMMYYYY(dateStr: string): string {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');       // Día con cero a la izquierda
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes con cero a la izquierda
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  