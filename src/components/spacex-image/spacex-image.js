import SpaceX from "./SpaceX.jpg";
import "./spacex-image.scss";

class SpaceXImage {
  render() {
    const img = document.createElement("img");
    img.src = SpaceX;
    img.alt = "SpaceX";
    img.classList.add("spacex-image");

    const bodyDomElement = document.querySelector("body");
    bodyDomElement.appendChild(img);
  }
}

export default SpaceXImage;
