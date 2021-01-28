import "./script/main.js";
import "./style/style.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import AOS from "aos";

AOS.init({
  startEvent: "DOMContentLoaded",
  delay: 100,
  duration: 800,
  useClassNames: true,
  once: true,
});
