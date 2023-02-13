import React, { useRef } from "react";

const ModelViewer = () => {
  const ModRef = useRef();

  return (
    <>
      <model-viewer
        src="./assets/Marmelos.glb"
        alt="name"
        skybox-image="https://modelviewer.dev//shared-assets/environments/spruit_sunrise_1k_HDR.hdr"
        envitonment-image="https://modelviewer.dev//shared-assets/environments/spruit_sunrise_1k_HDR.hdr"
        loading="eager"
        camera-controls
        ar
        ar-scale="fixed"
        disable-tap
        ar-placement="floor"
        ar-modes="webxr scene-viewer quick-look"
        shadow-intensity="1"
        shadow-softness="1"
        touch-action="pan-y"
        id="model"
        ref={ModRef}
      >
        <button
          slot="ar-button"
          className="px-2 py-1 text-secondaryText font-semibold bg-secondary border border-secondaryText rounded-md"
        >
          View in Your Space
        </button>
      </model-viewer>
    </>
  );
};

export default ModelViewer;
