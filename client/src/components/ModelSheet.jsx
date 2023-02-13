import { useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import Content from "./elements/Content";
import Divider from "./elements/Divider";
import Header from "./elements/Header";
import SliderComponent from "./elements/SliderComponent";

export default function ModelSheet() {
  return (
    <>
      <BottomSheet
        open
        skipInitialTransition
        blocking={false}
        scrollLocking={false}
        expandOnContentDrag={true}
        header={<Header />}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 5,
        ]}
      >
        <div className="m-5 flex flex-col overflow-hidden">
          <Content />
          <Divider />
          <SliderComponent />
        </div>
      </BottomSheet>
    </>
  );
}
