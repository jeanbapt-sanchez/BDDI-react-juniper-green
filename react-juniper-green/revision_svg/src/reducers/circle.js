export const initialState = {
  number: 0,
  circles: [],
  easter_eggs: [],
  frequency_easter_eggs : 7 // TODO pour définir la fréquence des easter-eggs
};

export const reducer = (state, action) => {
  let circles;
  switch (action.type) {

    case 'EASTER_EGGS':

    // numéro de la figure à transformer en carré
      const { number } = action;

      return {
        ...state,
        easter_eggs: state.easter_eggs.concat(number)
      }

    case "ADD_CIRCLE":

      const circle = {
        w: 100,
        h: 100,
        cx: 50,
        cy: 50,
        r: 25,
        number: state.number,
        stop: false,
      };

      return {
        ...state,
        circles: state.circles.concat(circle),
        number: state.number + 1,
      };

    case "SHUFFLE":

    // vraie copie de mes cercles
    // 1. map retourne un tableau donc un nouvel objet
    // 2. copie de chaque littéral des circles
      // circles = state.circles.map((circle) => { return { ...circle } }  );

      // ( {} ) dans le return indique à JS de retourner l'expression qui se trouve dans les parenthèses
      circles = state.circles.map( circle => ({ ...circle })   );

      circles.sort(() => Math.random() - 0.5);

      return {
        ...state,
        // circles:circles,
        circles
      };

    case "STOP_ODD":
      circles = state.circles.map((circle) => {
        if (circle.number % 2 === 1) circle.stop = true;

        return { ...circle };
      });

      return {
        ...state,
        circles,
      };

    case "START_ODD":
      circles = state.circles.map((circle) => {
        if (circle.number % 2 === 1) circle.stop = false;

        return { ...circle };
      });

      return {
        ...state,
        circles,
      };

    default:
      return state;
  }
};
