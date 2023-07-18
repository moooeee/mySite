function skipToMain() {
  const mainContent = document.getElementsByTagName("main")[0];
  mainContent.tabIndex = -1;
  mainContent.focus();
}
