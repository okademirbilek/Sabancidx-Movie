import useAsync from "./useAsync";



export default function useFetch(url, options = {}, dependencies = []) {
  return useAsync(() => {
    return fetch(url, options).then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}
