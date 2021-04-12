export const usePreventLeave = () => {
  const Listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", Listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", Listener);
  return { enablePrevent, disablePrevent };
};
