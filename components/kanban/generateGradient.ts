import type { EnumStatus } from "~/types/deals.types"

export const generateGradient = (index: number) => {//функция генерации градиента
  switch (index) {
    case 0:
      return {
        'backgroundColor': `hsl(168, 76%, 90%)`
      }
      break;
    case 1:
      return {
        'backgroundColor': `hsl(168, 76%, 80%)`
      }
      break;
    case 2:
      return {
        'backgroundColor': `hsl(168, 76%, 70%)`
      }
      break;
    case 3:
      return {
        'backgroundColor': `hsl(168, 76%, 60%)`
      }
      break;
    case 4:
      return {
        'backgroundColor': `hsl(168, 76%, 47%)`
      }
      break;

    default:
      return {
        'backgroundColor': `hsl(168, 76%, 47%)`
      }
      break;
  }
  //возвращает градиент
}