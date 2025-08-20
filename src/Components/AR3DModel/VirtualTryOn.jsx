import React, { useEffect, useState } from "react";
import './ar.css'

const VirtualTryOn = ({ setModalTryitOnOpen }) => {
  const [showScene, setShowScene] = useState(true);

  const stopCamera = () => {
    // Stop all video streams
    const video = document.querySelector("video");
    if (video && video.srcObject) {
      video.srcObject.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
    }
    // Remove the a-scene completely
    const scene = document.querySelector("a-scene");
    if (scene) {
      scene.parentNode.removeChild(scene);
    }

    // Call the function passed from the parent
    if (setModalTryitOnOpen) {
      setModalTryitOnOpen();
    }

    setShowScene(false);
  };


  useEffect(() => {
    if (!showScene) return;

    // Load scripts
    const aframeScript = document.createElement("script");
    aframeScript.src = "https://aframe.io/releases/1.5.0/aframe.min.js";
    aframeScript.async = true;
    document.head.appendChild(aframeScript);

    const mindarScript = document.createElement("script");
    mindarScript.src =
      "https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-face-aframe.prod.js";
    mindarScript.async = true;
    document.head.appendChild(mindarScript);

    const handleScript = () => {
      const list = ["glasses1", "glasses2", "hat1", "hat2", "earring", "necklace1"];
      const visibles = [true, false, false, true, true, false];

      const setVisible = (button, entities, visible) => {
        if (visible) {
          button.classList.add("selected");
        } else {
          button.classList.remove("selected");
        }
        entities.forEach((entity) => {
          entity.setAttribute("visible", visible);
        });
      };

      list.forEach((item, index) => {
        const button = document.querySelector("#" + item);
        const entities = document.querySelectorAll("." + item + "-entity");
        if (button && entities.length > 0) {
          setVisible(button, entities, visibles[index]);
          button.addEventListener("click", () => {
            visibles[index] = !visibles[index];
            setVisible(button, entities, visibles[index]);
          });
        }
      });
    };

    setTimeout(handleScript, 1000); // Wait for scene to be initialized
  }, [showScene]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const aframeCanvas = document.querySelector("canvas.a-canvas");
  //     if (aframeCanvas) {
  //       aframeCanvas.style.zIndex = "9999";
  //       aframeCanvas.style.position = "fixed";
  //       aframeCanvas.style.top = "0";
  //       aframeCanvas.style.left = "0";
  //       aframeCanvas.style.width = "100%";
  //       aframeCanvas.style.height = "100%";
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // }, [showScene]);

  useEffect(() => {
    const interval = setInterval(() => {
      const aframeCanvas = document.querySelector("canvas.a-canvas");
      if (aframeCanvas) {
        aframeCanvas.style.zIndex = "9999";
        aframeCanvas.style.top = "0";
        aframeCanvas.style.left = "0";
        aframeCanvas.style.width = "100%";
        aframeCanvas.style.height = "100%";

        // Apply fixed position only on desktop
        if (window.innerWidth > 768) {
          aframeCanvas.style.position = "fixed";
        } else {
          aframeCanvas.style.position = "absolute"; // or just remove if you prefer
        }

        clearInterval(interval);
      }
    }, 1000);
  }, [showScene]);



  return (
    <>
      <style>{`
        .example-container {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
        }
        .options-panel {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 10000;
          pointer-events: auto;
          background-color: rgba(255,255,255,0.5);
          padding: 10px;
          border-radius: 0 10px 10px 0;
        }
        .options-panel img {
          border: solid 2px;
          border-radius: 8px;
          width: 50px;
          height: 50px;
          object-fit: cover;
          cursor: pointer;
          margin-bottom: 5px;
        }
        .options-panel img.selected {
          border-color: green;
        }
        .close-button {
          position: fixed;
          top: 10px;
          right: 10px;
          z-index: 10001;
          background: #fff;
          color: black;
          border: none;
          padding: 10px 16px;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>

      {showScene && (
        <div className="example-container">
          <button className="close-button" onClick={stopCamera} >
            Close
          </button>

          <div className="options-panel">
            {/* <img id="hat1" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat/thumbnail.png" />
            <img id="hat2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat2/thumbnail.png" /> */}
            {/* <img id="glasses1" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses/thumbnail.png" /> */}
            <img id="glasses2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses2/thumbnail.png" />
            <img id="earring" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/thumbnail.png" />
            <img id="necklace1" src="/assets/Images/3DAR/neckleceThumbnail.png" />
          </div>

          {/* AR SCENE */}
          <a-scene
            embedded
            mindar-face="autoStart: true; filterMinCF: 0.1; filterBeta: 0.01"
            color-space="sRGB"
            renderer="colorManagement: true, physicallyCorrectLights: true, antialias: true; precision: high; logarithmicDepthBuffer: true;"
            vr-mode-ui="enabled: false"
            device-orientation-permission-ui="enabled: false"
          >
            <a-assets>
              <a-asset-item id="headModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/sparkar/headOccluder.glb" />
              <a-asset-item id="glassesModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses/scene.gltf" />
              <a-asset-item id="glassesModel2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/glasses2/scene.gltf" />
              <a-asset-item id="hatModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat/scene.gltf" />
              <a-asset-item id="hatModel2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/hat2/scene.gltf" />
              <a-asset-item id="earringModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/face-tracking/assets/earring/scene.gltf" />
              <a-entity mindar-face-target="anchorIndex: 356">
                <a-gltf-model
                  src="#earringModel"
                  class="earring-entity"
                  visible="false"
                  position="0 -0.3 -0.3"
                  rotation="0.1 0 0"
                  scale="0.05 0.05 0.05"
                />
              </a-entity>              <a-asset-item id="necklaceModel" src="/assets/Images/3DAR/necklace_b.glb" />
            </a-assets>

            <a-camera active="false" position="0 0 0"></a-camera>

            <a-entity mindar-face-target="anchorIndex: 168">
              <a-gltf-model mindar-face-occluder visible="true" position="0 -0.45 0.15" rotation="0 0 0" scale="0.065 0.065 0.065" src="#headModel" />
            </a-entity>

            {/* Models */}
            <a-entity mindar-face-target="anchorIndex: 10">
              <a-gltf-model src="#hatModel" class="hat1-entity" visible="false" position="0 1.0 -0.5" scale="0.35 0.35 0.35" />
            </a-entity>
            <a-entity mindar-face-target="anchorIndex: 10">
              <a-gltf-model src="#hatModel2" class="hat2-entity" visible="false" position="0 -0.2 -0.5" scale="0.008 0.008 0.008" />
            </a-entity>
            <a-entity mindar-face-target="anchorIndex: 168">
              <a-gltf-model src="#glassesModel" class="glasses1-entity" visible="false" position="0 0 0" scale="0.01 0.01 0.01" />
            </a-entity>
            <a-entity mindar-face-target="anchorIndex: 168">
              <a-gltf-model
                src="#glassesModel2"
                class="glasses2-entity"
                visible="false"
                position="0 -0.3 0"
                rotation="0 -90 0"
                scale="0.6 0.6 0.6"
              />
            </a-entity>
            <a-entity mindar-face-target="anchorIndex: 127">
              <a-gltf-model src="#earringModel" class="earring-entity" visible="false" position="0 -0.3 -0.3" scale="0.05 0.05 0.05" />
            </a-entity>
            <a-entity mindar-face-target="anchorIndex: 356">
              <a-gltf-model src="#earringModel" class="earring-entity" visible="false" position="0 -0.3 -0.3" scale="0.05 0.05 0.05" />
            </a-entity>
            <a-entity mindar-face-target="anchorIndex: 200">
              <a-gltf-model src="#necklaceModel" class="necklace1-entity" visible="false" position="0 -0.9 0.15" scale="0.95 0.95 0.95" />
            </a-entity>
          </a-scene>
        </div>
      )}
    </>
  );
};

export default VirtualTryOn;
