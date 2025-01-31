const BASE_PATH = import.meta.env.GITHUB_PAGES ? "/training" : "";

export const ROUTES = {
  home: `${BASE_PATH}/`,
  counter: `${BASE_PATH}/counter`,
  todoApp: `${BASE_PATH}/todo-app`,
};

export default BASE_PATH;
