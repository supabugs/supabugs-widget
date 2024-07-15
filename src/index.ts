import formCSS from "./widget.css";
import { widgetHTML } from "./widget-html";

function init() {
  // add styles
  const styleElement = document.createElement("style");
  styleElement.id = "supabugs__css";
  styleElement.innerHTML = formCSS;
  document.head.insertBefore(styleElement, document.head.firstChild);

  // add toggle script
  const scriptElement = document.createElement("script");
  scriptElement.innerHTML = `function supabugstoggleWidget() {
    const widget = document.querySelector("#supabugs__widget__container #supabugs__widget");
    widget.classList.toggle("expanded");
  }`;
  document.head.insertBefore(scriptElement, document.head.lastChild);

  // add widget
  const widgetContainer = document.getElementById(
    "supabugs__widget__container"
  );
  widgetContainer!.innerHTML = widgetHTML;

  const token = widgetContainer!.dataset.token;

  if (!token) {
    console.log("TOKEN is mandatory");
    return;
  }

  const type = widgetContainer!.dataset.type === "true" || false;
  const severity = widgetContainer!.dataset.severity === "true" || false;
  const priority = widgetContainer!.dataset.priority === "true" || false;
  const attachments = widgetContainer!.dataset.attachments === "true" || false;

  // injecting frame
  const widgetElement = document.getElementById("supabugs__widget__iframe")!;
  widgetElement.setAttribute(
    "src",
    `https://cloud.supabugs.io/widgets/${token}/form?type=${type}&severity=${severity}&priority=${priority}&attachments=${attachments}`
  );
}
window.addEventListener("load", init);
