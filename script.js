function updatePreview() {
  const title = document.getElementById("title").value || "Example Title";
  const desc = document.getElementById("description").value || "This is your description.";
  const img = document.getElementById("image").value || "https://via.placeholder.com/400x210";

  document.getElementById("g-title").innerText = title;
  document.getElementById("g-desc").innerText = desc;

  document.getElementById("fb-title").innerText = title;
  document.getElementById("fb-desc").innerText = desc;
  document.getElementById("fb-img").src = img;

  document.getElementById("tw-title").innerText = title;
  document.getElementById("tw-desc").innerText = desc;
  document.getElementById("tw-img").src = img;
}
