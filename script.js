onload = () => {
  alert("Happy Morning di Pondati...");
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
