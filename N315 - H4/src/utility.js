export function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");

  toast.className = `toast ${type}`;

  toast.innerText = message;

  container.appendChild(toast);

  if (type !== "loading") {
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  return toast;
}
